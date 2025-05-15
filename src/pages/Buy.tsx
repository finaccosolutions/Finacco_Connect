import React, { useState } from 'react';
import { CreditCard, Mail, User, Phone, Shield, CheckCircle2 } from 'lucide-react';

declare global {
  interface Window {
    Razorpay: any;
  }
}

const Buy = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const options = {
        key: 'rzp_test_YOUR_KEY_HERE', // Replace with your Razorpay key
        amount: 499900, // Amount in paise (₹4,999)
        currency: 'INR',
        name: 'Finacco Connect',
        description: 'Premium License',
        image: 'https://finaccosolutions.com/connect/images/Finacco%20Logo.png',
        handler: async function (response: any) {
          try {
            const result = await fetch('https://finaccosolutions.com/secure/process_payment.php', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                ...formData,
                paymentId: response.razorpay_payment_id,
              }),
            });

            const data = await result.json();
            
            if (data.success) {
              alert(`Payment successful! Your license key has been sent to your email.`);
            } else {
              throw new Error(data.message || 'Payment processing failed');
            }
          } catch (err) {
            setError(err instanceof Error ? err.message : 'Payment processing failed');
          }
        },
        prefill: {
          name: formData.name,
          email: formData.email,
          contact: formData.phone,
        },
        theme: {
          color: '#2563EB',
        },
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Payment failed');
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
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
                  <Shield className="h-5 w-5 mr-2" />
                  <span>Lifetime License</span>
                </div>
                <div className="flex items-baseline">
                  <span className="text-4xl font-bold">₹4,999</span>
                  <span className="ml-2 text-lg line-through text-blue-200">₹9,999</span>
                  <span className="ml-2 bg-green-500 text-white px-2 py-1 rounded-full text-sm">
                    50% OFF
                  </span>
                </div>
                <p className="text-blue-100">One-time payment, lifetime access</p>
                
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
                Purchase Details
              </h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
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
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="pl-10 w-full rounded-lg border border-gray-300 dark:border-gray-600 bg-white dark:bg-gray-700 py-2 px-4 text-gray-900 dark:text-white"
                      required
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

                <div className="flex items-center justify-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                  <Shield className="h-4 w-4" />
                  <span>Secure payment via Razorpay</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Buy;