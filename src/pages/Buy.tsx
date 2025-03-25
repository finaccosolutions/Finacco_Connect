import React, { useState } from 'react';
import { CreditCard, Mail, User, Lock, CheckCircle2 } from 'lucide-react';
import { loadStripe } from '@stripe/stripe-js';

const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const Buy = () => {
  const [formData, setFormData] = useState({
    email: '',
    name: '',
    cardNumber: '',
    expiry: '',
    cvc: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/create-payment-intent', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          name: formData.name,
        }),
      });

      const { clientSecret } = await response.json();
      const stripe = await stripePromise;

      if (!stripe) {
        throw new Error('Stripe failed to load');
      }

      const { error: stripeError } = await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card: {
            number: formData.cardNumber,
            exp_month: parseInt(formData.expiry.split('/')[0], 10),
            exp_year: parseInt(formData.expiry.split('/')[1], 10),
            cvc: formData.cvc,
          },
          billing_details: {
            name: formData.name,
            email: formData.email,
          },
        },
      });

      if (stripeError) {
        throw new Error(stripeError.message);
      }

      // Payment successful, redirect to success page
      window.location.href = '/payment-success';
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let { name, value } = e.target;

    // Format expiry date
    if (name === 'expiry') {
      value = value
        .replace(/\D/g, '')
        .slice(0, 4)
        .replace(/(\d{2})(\d)/, '$1/$2');
    }

    // Format card number with spaces
    if (name === 'cardNumber') {
      value = value
        .replace(/\D/g, '')
        .slice(0, 16)
        .replace(/(\d{4})(?=\d)/g, '$1 ');
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="pt-24 pb-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden">
          <div className="grid md:grid-cols-2">
            {/* Product Information */}
            <div className="bg-gradient-to-br from-blue-600 to-cyan-500 p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">Finacco Connect Premium</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Lock className="h-5 w-5 mr-2" />
                  <span>Lifetime License</span>
                </div>
                <div className="text-4xl font-bold">₹4,999</div>
                <p className="text-blue-100">One-time payment, lifetime updates</p>
                
                <div className="border-t border-blue-400 pt-4 mt-6">
                  <h3 className="font-semibold mb-3">What's included:</h3>
                  <ul className="space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      All Premium Features
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      Lifetime Updates
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      Priority Support
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="h-5 w-5 mr-2" />
                      Custom Templates
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Payment Form */}
            <div className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Payment Details
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 px-4 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 px-4 text-gray-900 dark:text-white"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                    Card Number
                  </label>
                  <div className="relative">
                    <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="text"
                      name="cardNumber"
                      value={formData.cardNumber}
                      onChange={handleChange}
                      placeholder="1234 5678 9012 3456"
                      className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 px-4 text-gray-900 dark:text-white"
                      required
                      maxLength={19}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      name="expiry"
                      value={formData.expiry}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 px-4 text-gray-900 dark:text-white"
                      required
                      maxLength={5}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                      CVC
                    </label>
                    <input
                      type="text"
                      name="cvc"
                      value={formData.cvc}
                      onChange={handleChange}
                      placeholder="123"
                      className="w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 px-4 text-gray-900 dark:text-white"
                      required
                      maxLength={3}
                    />
                  </div>
                </div>

                {error && (
                  <div className="text-red-600 dark:text-red-400 text-sm">
                    {error}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-gradient-to-r from-green-600 to-emerald-500 text-white py-3 px-6 rounded-lg font-semibold hover:from-green-700 hover:to-emerald-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-500 disabled:opacity-50 transition-all duration-300 transform hover:scale-105"
                >
                  {loading ? 'Processing...' : 'Pay ₹4,999'}
                </button>

                <p className="text-sm text-gray-500 dark:text-gray-400 text-center mt-4">
                  Secure payment powered by Stripe
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;