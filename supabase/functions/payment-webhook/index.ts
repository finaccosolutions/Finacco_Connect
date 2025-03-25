import { serve } from 'https://deno.land/std@0.168.0/http/server.ts';
import { createClient } from 'npm:@supabase/supabase-js@2.39.3';
import Stripe from 'npm:stripe@14.14.0';
import { SMTPClient } from 'npm:emailjs@4.0.3';

const stripe = new Stripe(Deno.env.get('STRIPE_SECRET_KEY') || '', {
  apiVersion: '2023-10-16',
});

const supabase = createClient(
  Deno.env.get('SUPABASE_URL') || '',
  Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') || ''
);

const smtp = new SMTPClient({
  user: Deno.env.get('SMTP_USER'),
  password: Deno.env.get('SMTP_PASSWORD'),
  host: Deno.env.get('SMTP_HOST'),
  ssl: true,
});

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

serve(async (req) => {
  if (req.method === 'OPTIONS') {
    return new Response('ok', { headers: corsHeaders });
  }

  try {
    const signature = req.headers.get('stripe-signature');
    const body = await req.text();
    
    const event = stripe.webhooks.constructEvent(
      body,
      signature || '',
      Deno.env.get('STRIPE_WEBHOOK_SECRET') || ''
    );

    if (event.type === 'payment_intent.succeeded') {
      const paymentIntent = event.data.object;
      const { email } = paymentIntent.metadata;

      // Update license status
      const { data: license, error: updateError } = await supabase
        .from('licenses')
        .update({ status: 'active' })
        .eq('payment_id', paymentIntent.id)
        .select()
        .single();

      if (updateError) {
        throw new Error('Failed to update license status');
      }

      // Send email with license key
      await smtp.send({
        text: `Thank you for purchasing Finacco Connect!\n\nYour license key is: ${license.license_key}\n\nPlease keep this key safe as you'll need it to activate the software.`,
        from: 'support@finaccosolutions.com',
        to: email,
        subject: 'Your Finacco Connect License Key',
      });
    }

    return new Response(JSON.stringify({ received: true }), {
      headers: { ...corsHeaders, 'Content-Type': 'application/json' },
    });
  } catch (err) {
    return new Response(
      JSON.stringify({ error: err.message }),
      {
        status: 400,
        headers: { ...corsHeaders, 'Content-Type': 'application/json' },
      }
    );
  }
});