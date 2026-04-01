import React, { useState } from 'react';
import { signInUser } from '../lib/supabase';
import { ArrowRight, Lock } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    if (import.meta.env.VITE_SUPABASE_URL) {
      const { error: signInError } = await signInUser(email, password);
      if (signInError) {
        setError(signInError.message);
        setLoading(false);
        return;
      }
    } else {
      console.log('Dummy Login Success', { email });
    }
    
    navigate('/dashboard');
  };

  return (
    <div className="container animate-fade-in" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '80vh' }}>
      <div className="glass-panel" style={{ width: '100%', maxWidth: '400px', padding: '40px' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '32px' }}>
          <Lock size={40} color="var(--brand-primary)" style={{ margin: '0 auto 16px' }} />
          <h2 style={{ fontSize: '28px' }}>Welcome Back</h2>
          <p style={{ color: 'var(--text-secondary)' }}>Log in to track your impact.</p>
        </div>

        {error && <div style={{ background: 'rgba(239, 68, 68, 0.1)', border: '1px solid rgba(239, 68, 68, 0.3)', color: '#ef4444', padding: '12px', borderRadius: 'var(--radius-md)', marginBottom: '24px', fontSize: '14px' }}>{error}</div>}

        <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
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
            {loading ? 'Authenticating...' : 'Sign In'} <ArrowRight size={18} />
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '24px', color: 'var(--text-secondary)', fontSize: '14px' }}>
          Don't have an account? <Link to="/signup" style={{ color: 'var(--brand-secondary)', fontWeight: '500' }}>Create one</Link>
        </p>

      </div>
    </div>
  );
};

export default Login;
