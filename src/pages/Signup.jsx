import React, { useState } from 'react';
import { supabase, signUpUser } from '../lib/supabase';
import { ArrowRight, Heart } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (import.meta.env.VITE_SUPABASE_URL) {
      const { error: signUpError } = await signUpUser(email, password, fullName);
      if (signUpError) {
        setError(signUpError.message);
        setLoading(false);
        return;
      }
    } else {
      console.log('Dummy Signup Success', { email, fullName });
    }
    
    navigate('/dashboard'); // Proceed to checkout or dashboard
  };

  return (
    <div className="container animate-fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '40px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Heart size={40} color="var(--brand-secondary)" fill="var(--brand-secondary)" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: '28px' }}>Join the Movement</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Play, Win, Impact.</p>
        </div>

        {error && <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444', padding: '12px', borderRadius: 'var(--radius-md)', marginBottom: '24px', fontSize: '14px' }}>{error}</div>}

        <form onSubmit={handleSignup} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>Full Name</label>
            <input 
              type="text" 
              required
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              style={{ width: '100%', padding: '16px', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: '#fff', fontSize: '16px' }}
              placeholder="Your Name"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>Email Address</label>
            <input 
              type="email" 
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: '100%', padding: '16px', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: '#fff', fontSize: '16px' }}
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label style={{ display: 'block', marginBottom: '8px', fontSize: '14px', color: 'var(--text-secondary)' }}>Password</label>
            <input 
              type="password" 
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '16px', borderRadius: 'var(--radius-md)', background: 'rgba(0,0,0,0.3)', border: '1px solid var(--glass-border)', color: '#fff', fontSize: '16px' }}
              placeholder="••••••••"
            />
          </div>

          <button type="submit" disabled={loading} className="btn btn-primary" style={{ width: '100%', height: '54px', fontSize: '16px', marginTop: '8px' }}>
            {loading ? 'Processing...' : 'Create Account'} <ArrowRight size={18} />
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', color: 'var(--text-secondary)', fontSize: '14px' }}>
          Already have an account? <Link to="/login" style={{ color: 'var(--brand-primary)', fontWeight: '500' }}>Login here</Link>
        </p>

      </div>
    </div>
  );
};

export default Signup;
