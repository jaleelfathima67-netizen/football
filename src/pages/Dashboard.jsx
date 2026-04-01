import React, { useState, useEffect } from 'react';
import { CheckCircle, Clock, Trophy, Heart } from 'lucide-react';
import { supabase } from '../lib/supabase';

const Dashboard = () => {
  const [scores, setScores] = useState([]);
  const [newScore, setNewScore] = useState('');

  // 1. Fetching Scores from Supabase Backend
  useEffect(() => {
    const fetchScores = async () => {
      try {
        const { data, error } = await supabase
          .from('scores')
          .select('score')
          .order('created_at', { ascending: false })
          .limit(5);

        if (error) throw error;
        if (data && data.length > 0) {
          setScores(data.map(d => d.score));
        } else {
          // Fallback initial state if no data
          setScores([38, 36, 42, 34, 40]); 
        }
      } catch (err) {
        console.error("Error fetching scores", err);
        setScores([38, 36, 42, 34, 40]); // Fallback
      }
    };
    fetchScores();
  }, []);

  // 2. Score Entry Logic & Supabase Insertion
  const handleScoreSubmit = async (e) => {
    e.preventDefault();
    if (!newScore || newScore < 1 || newScore > 45) return;
    
    const submittedScore = parseInt(newScore);
    setNewScore('');

    // Optimistic UI Update - rolling 5 scores
    setScores(prev => [submittedScore, ...prev.slice(0, 4)]);

    // Backend Submission
    try {
      // In a real authenticated session, RLS identifies user context. 
      // We pass date_played manually per schema.
      await supabase.from('scores').insert([
        { score: submittedScore, date_played: new Date().toISOString() }
      ]);
    } catch (err) {
      console.error("Failed to insert score into Supabase", err);
    }
  };

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 0' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '40px' }}>
        <div>
          <h1 style={{ fontSize: '42px', marginBottom: '8px' }}>Your Dashboard</h1>
          <p style={{ color: 'var(--text-secondary)', fontSize: '18px' }}>Welcome back. Ready to make an impact today?</p>
        </div>
        <div style={{ display: 'flex', gap: '8px', alignItems: 'center', background: 'rgba(16, 185, 129, 0.1)', padding: '12px 24px', borderRadius: 'var(--radius-md)', border: '1px solid rgba(16, 185, 129, 0.2)' }}>
          <CheckCircle color="var(--brand-tertiary)" size={20} />
          <span style={{ color: '#fff', fontWeight: '500' }}>Active Subscription</span>
        </div>
      </div>

      <div style={{ display: 'grid', gap: '24px', gridTemplateColumns: 'minmax(0, 2fr) minmax(0, 1fr)' }}>
        
        {/* Left Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Score Entry System */}
          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Trophy size={24} color="var(--brand-primary)" /> Latest Scores (Stableford)
            </h3>
            
            <form onSubmit={handleScoreSubmit} style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
              <input 
                type="number" 
                min="1" max="45"
                placeholder="Enter new score (1-45)" 
                value={newScore}
                onChange={e => setNewScore(e.target.value)}
                style={{
                  flex: 1,
                  padding: '16px 20px',
                  borderRadius: 'var(--radius-md)',
                  background: 'rgba(0,0,0,0.2)',
                  border: '1px solid var(--glass-border)',
                  color: '#fff',
                  fontSize: '16px'
                }}
              />
              <button type="submit" className="btn btn-primary">Log Score</button>
            </form>

            <div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '16px', fontSize: '14px', textTransform: 'uppercase', letterSpacing: '1px' }}>Recent Performance</p>
              <div style={{ display: 'flex', gap: '12px' }}>
                {scores.map((score, index) => (
                  <div key={index} style={{
                    flex: 1,
                    background: index === 0 ? 'rgba(139, 92, 246, 0.1)' : 'rgba(255,255,255,0.02)',
                    border: `1px solid ${index === 0 ? 'rgba(139, 92, 246, 0.3)' : 'var(--glass-border)'}`,
                    borderRadius: 'var(--radius-md)',
                    padding: '24px 0',
                    textAlign: 'center',
                    fontSize: '28px',
                    fontWeight: '700',
                    color: index === 0 ? 'var(--brand-primary)' : '#fff'
                  }}>
                    {score}
                    {index === 0 && <div style={{ fontSize: '12px', fontWeight: '500', marginTop: '4px', textTransform: 'uppercase' }}>Latest</div>}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Charity Contribution */}
          <div className="glass-panel" style={{ padding: '32px' }}>
             <h3 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <Heart size={24} color="var(--brand-secondary)" fill="var(--brand-secondary)" /> Your Active Charity
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
              <div style={{ width: '80px', height: '80px', background: '#fff', borderRadius: '50%', flexShrink: 0 }}></div>
              <div>
                <h4 style={{ fontSize: '20px', marginBottom: '8px' }}>Global Children's Fund</h4>
                <p style={{ color: 'var(--text-secondary)' }}>You are donating <strong style={{ color: '#fff' }}>15%</strong> of your monthly subscription to this cause.</p>
              </div>
              <button className="btn btn-outline" style={{ marginLeft: 'auto' }}>Change</button>
            </div>
          </div>

        </div>

        {/* Right Column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
          
          {/* Draw Summary */}
          <div className="glass-panel" style={{ padding: '32px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.1) 0%, rgba(236, 72, 153, 0.1) 100%)' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Next Monthly Draw</h3>
            
            <div style={{ textAlign: 'center', marginBottom: '24px' }}>
              <div style={{ fontSize: '48px', fontWeight: '700', fontFamily: 'var(--font-heading)', background: 'linear-gradient(to right, #ffd700, #ff8c00)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>$1,250,500</div>
              <p style={{ color: 'var(--text-secondary)' }}>Current Jackpot</p>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', background: 'rgba(0,0,0,0.3)', padding: '16px', borderRadius: 'var(--radius-md)' }}>
              <Clock size={20} color="var(--brand-primary)" />
              <span>Draws in <strong>14 Days</strong></span>
            </div>
          </div>

          <div className="glass-panel" style={{ padding: '32px' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '16px' }}>Winnings Overview</h3>
            <div style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--glass-border)', paddingBottom: '12px', marginBottom: '12px' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Total Won</span>
              <span style={{ fontWeight: '600', color: 'var(--brand-tertiary)' }}>$450.00</span>
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ color: 'var(--text-secondary)' }}>Pending Verification</span>
              <span style={{ fontWeight: '600' }}>$1,200.00</span>
            </div>
          </div>

          {/* User Verification Module (Section 09 PRD) */}
          <div className="glass-panel" style={{ padding: '32px', border: '1px solid rgba(236, 72, 153, 0.4)' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '16px', color: 'var(--brand-secondary)' }}>Winner Verification Action Required</h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '16px' }}>
              Congratulations on matching 4 numbers! To receive your payout, upload a screenshot of your scoring app to prove your entered score.
            </p>
            <input type="file" style={{ display: 'block', width: '100%', marginBottom: '16px', padding: '12px', background: 'rgba(0,0,0,0.2)', border: '1px dashed var(--glass-border)', borderRadius: 'var(--radius-md)', color: 'var(--text-secondary)' }} />
            <button className="btn btn-outline" style={{ width: '100%', borderColor: 'var(--brand-secondary)', color: 'white' }}>Submit Proof for Admin Review</button>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;
