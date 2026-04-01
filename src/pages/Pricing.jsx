import React, { useState } from 'react';
import { ArrowRight, CheckCircle, CreditCard, ShieldCheck } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState('monthly');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubscribe = (planId) => {
    setLoading(true);
    // Simulating Stripe Gateway Checkout redirect
    setTimeout(() => {
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '80px 0', textAlign: 'center' }}>
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Join The Movement</h1>
      <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px', margin: '0 auto 48px' }}>
        Unlock performance tracking, enter monthly mega-draws, and drive real impact to the charity of your choice.
      </p>

      {/* Billing Toggle */}
      <div style={{ display: 'inline-flex', background: 'rgba(0,0,0,0.3)', padding: '6px', borderRadius: 'var(--radius-pill)', marginBottom: '48px', border: '1px solid var(--glass-border)' }}>
        <button 
          onClick={() => setBillingCycle('monthly')}
          style={{ padding: '12px 24px', borderRadius: 'var(--radius-pill)', background: billingCycle === 'monthly' ? 'var(--brand-primary)' : 'transparent', color: '#fff', fontSize: '16px', fontWeight: '500' }}
        >
          Monthly Plan
        </button>
        <button 
          onClick={() => setBillingCycle('yearly')}
          style={{ padding: '12px 24px', borderRadius: 'var(--radius-pill)', background: billingCycle === 'yearly' ? 'var(--brand-primary)' : 'transparent', color: '#fff', fontSize: '16px', fontWeight: '500', display: 'flex', alignItems: 'center', gap: '8px' }}
        >
          Yearly Plan 
          <span style={{ fontSize: '12px', background: '#fff', color: 'var(--brand-primary)', padding: '2px 8px', borderRadius: '12px', fontWeight: 'bold' }}>Save 20%</span>
        </button>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: '32px' }}>
        
        {/* Main Plan Card */}
        <div className="glass-panel" style={{ width: '400px', padding: '48px', position: 'relative', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)', border: '1px solid rgba(139, 92, 246, 0.3)' }}>
          <div style={{ position: 'absolute', top: 0, left: '50%', transform: 'translate(-50%, -50%)', background: 'var(--brand-primary)', color: '#fff', padding: '6px 16px', borderRadius: 'var(--radius-pill)', fontSize: '14px', fontWeight: '600' }}>
            Most Popular
          </div>
          
          <h2 style={{ fontSize: '28px', marginBottom: '8px' }}>Pro Impact Tier</h2>
          <div style={{ fontSize: '48px', fontWeight: '700', marginBottom: '8px' }}>
            ${billingCycle === 'monthly' ? '29' : '278'}
            <span style={{ fontSize: '16px', color: 'var(--text-secondary)', fontWeight: '400' }}>/{billingCycle === 'monthly' ? 'mo' : 'yr'}</span>
          </div>
          <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>Everything you need to play and give back.</p>

          <ul style={{ textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
            {['10% Minimum Charity Contribution included', 'Unlimited Stableford Score Tracking', 'Automatic Entry to Monthly Mega-Draw', 'Eligibility for Rollover Jackpots', 'Premium Dashboard Analytics'].map((feature, i) => (
              <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', fontSize: '16px' }}>
                <CheckCircle size={20} color="var(--brand-tertiary)" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>

          <button onClick={() => handleSubscribe('pro')} className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '18px' }} disabled={loading}>
            {loading ? 'Connecting to Stripe...' : 'Subscribe via Stripe'} <CreditCard size={20} />
          </button>
          
          <div style={{ marginTop: '16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '12px' }}>
            <ShieldCheck size={14} /> PCI-Compliant Secure Checkout
          </div>
        </div>

      </div>
    </div>
  );
};

export default Pricing;
