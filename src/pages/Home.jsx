import React from 'react';
import { Trophy, HeartHandshake, ArrowRight, Target } from 'lucide-react';

const Home = () => {
  return (
    <div className="home-page animate-fade-in">
      <section className="hero-section" style={{
        position: 'relative',
        padding: '120px 0',
        minHeight: '80vh',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden'
      }}>
        {/* Background Image Setup */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          backgroundImage: 'url(/hero_background.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          opacity: 0.3,
          zIndex: -1
        }}></div>
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          background: 'linear-gradient(to top, var(--bg-color), transparent)',
          zIndex: -1
        }}></div>

        <div className="container">
          <div style={{ maxWidth: '800px' }}>
            <span style={{ 
              display: 'inline-block',
              padding: '6px 16px',
              borderRadius: '20px',
              backgroundColor: 'rgba(236, 72, 153, 0.1)',
              color: 'var(--brand-secondary)',
              fontWeight: '600',
              marginBottom: '24px',
              fontSize: '14px',
              border: '1px solid rgba(236, 72, 153, 0.2)'
            }}>Play For A Purpose</span>
            <h1 style={{ fontSize: '72px', marginBottom: '24px', letterSpacing: '-2px' }}>
              Your <span className="text-gradient">Performance</span>.<br />
              Their <span className="text-gradient">Impact</span>.
            </h1>
            <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '40px', maxWidth: '600px' }}>
              Join the first subscription-based golf platform where your scores drive meaningful charitable contributions. Track performance, enter monthly draws, and make a difference.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '18px' }}>
                Start Your Impact <ArrowRight size={20} />
              </button>
              <button className="btn btn-outline" style={{ padding: '16px 36px', fontSize: '18px' }}>
                Explore Charities
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="features-section container" style={{ padding: '80px 0' }}>
        <h2 style={{ textAlign: 'center', fontSize: '42px', marginBottom: '60px' }}>How It Works</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
          
          <div className="glass-panel" style={{ padding: '40px 32px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(139, 92, 246, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Target size={32} color="var(--brand-primary)" />
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>1. Track Scores</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Log your last 5 Stableford scores. Focus on improving your game with an intuitive tracking experience.</p>
          </div>

          <div className="glass-panel" style={{ padding: '40px 32px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(236, 72, 153, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <Trophy size={32} color="var(--brand-secondary)" />
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>2. Enter Monthly Draws</h3>
            <p style={{ color: 'var(--text-secondary)' }}>Win spectacular prizes. A generous portion of all subscriptions fuels our monthly jackpot pool.</p>
          </div>

          <div className="glass-panel" style={{ padding: '40px 32px' }}>
            <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(16, 185, 129, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
              <HeartHandshake size={32} color="var(--brand-tertiary)" />
            </div>
            <h3 style={{ fontSize: '24px', marginBottom: '16px' }}>3. Make an Impact</h3>
            <p style={{ color: 'var(--text-secondary)' }}>At least 10% of your subscription goes directly to your chosen charity. You play, they win.</p>
          </div>

        </div>
      </section>
    </div>
  );
};

export default Home;
