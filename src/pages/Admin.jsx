import React, { useState } from 'react';
import { Users, Target, Activity, DollarSign, RefreshCw, CheckCircle, ShieldAlert } from 'lucide-react';

const Admin = () => {
  const [activeTab, setActiveTab] = useState('dashboard');

  const stats = [
    { title: "Total Subscribers", value: "12,450", icon: Users, color: "var(--brand-primary)" },
    { title: "Prize Pool (Current)", value: "$120,450", icon: DollarSign, color: "var(--brand-secondary)" },
    { title: "Charity Raised (All Time)", value: "$2.1M", icon: Target, color: "var(--brand-tertiary)" },
    { title: "Upcoming Draw", value: "5 Days", icon: Activity, color: "#f59e0b" },
  ];

  return (
    <div className="container animate-fade-in" style={{ padding: '40px 0', display: 'flex', gap: '32px' }}>
      
      {/* Admin Sidebar */}
      <div style={{ width: '260px', flexShrink: 0 }}>
        <div className="glass-panel" style={{ padding: '24px', position: 'sticky', top: '100px' }}>
          <h2 style={{ fontSize: '18px', marginBottom: '24px', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Admin Control</h2>
          <nav style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {[
              { id: 'dashboard', label: 'Overview' },
              { id: 'draws', label: 'Draw Engine' },
              { id: 'users', label: 'Subscribers' },
              { id: 'winners', label: 'Winner Validation' },
              { id: 'charities', label: 'Charity Management' }
            ].map(item => (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '12px 16px',
                  borderRadius: 'var(--radius-md)',
                  background: activeTab === item.id ? 'rgba(255,255,255,0.1)' : 'transparent',
                  color: activeTab === item.id ? '#fff' : 'var(--text-secondary)',
                  fontWeight: activeTab === item.id ? '600' : '400',
                  textAlign: 'left',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'background 0.2s',
                  width: '100%'
                }}
              >
                {item.label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Main Admin Content */}
      <div style={{ flex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <h1 style={{ fontSize: '32px', textTransform: 'capitalize' }}>
            {activeTab.replace('-', ' ')}
          </h1>
          <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
            <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'var(--brand-tertiary)' }}></span>
            <span style={{ color: 'var(--text-secondary)', fontSize: '14px' }}>System Operational</span>
          </div>
        </div>

        {/* Dashboard View */}
        {activeTab === 'dashboard' && (
          <>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '32px' }}>
              {stats.map((stat, i) => (
                <div key={i} className="glass-panel" style={{ padding: '24px', display: 'flex', alignItems: 'center', gap: '20px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: `rgba(255,255,255,0.05)`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <stat.icon size={30} color={stat.color} />
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-secondary)', fontSize: '14px', marginBottom: '4px' }}>{stat.title}</h4>
                    <span style={{ fontSize: '28px', fontWeight: '700' }}>{stat.value}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-panel" style={{ padding: '32px' }}>
              <h3 style={{ fontSize: '20px', marginBottom: '24px' }}>Recent Activity Stream</h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  "User ID #8929 verified their 4-Match proof.",
                  "Monthly subscription batch processed: +$45,200 pool added.",
                  "New charity 'Save The Waves' approved by admin.",
                  "System generated algorithmic draw simulation run."
                ].map((log, i) => (
                  <div key={i} style={{ padding: '16px', borderLeft: '3px solid var(--glass-border)', background: 'rgba(0,0,0,0.2)' }}>
                    <p style={{ fontSize: '15px' }}>{log}</p>
                    <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>Today, 10:{i+1} AM</span>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}

        {/* Draw Engine View */}
        {activeTab === 'draws' && (
          <div className="glass-panel" style={{ padding: '40px' }}>
             <h2 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <RefreshCw size={24} color="var(--brand-primary)" /> Monthly Draw Engine
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px', maxWidth: '600px' }}>
              Configure the execution logic for the upcoming draw. The algorithm can run completely randomly (lottery style) or employ weighted mechanics based on historical score inputs to engage active users.
            </p>

            <div style={{ display: 'flex', gap: '24px', marginBottom: '40px' }}>
              <button className="btn btn-outline" style={{ flex: 1, padding: '24px', flexDirection: 'column', gap: '12px', borderColor: 'var(--brand-primary)', background: 'rgba(139, 92, 246, 0.05)' }}>
                <span style={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>Algorithmic Draw</span>
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Weighted probability based on player frequency and score variances.</span>
              </button>
              <button className="btn btn-outline" style={{ flex: 1, padding: '24px', flexDirection: 'column', gap: '12px' }}>
                <span style={{ fontSize: '20px', fontWeight: '600', color: 'white' }}>True Random</span>
                <span style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>Standard RNG mechanics. Every player has pure equal probability.</span>
              </button>
            </div>

            <div style={{ display: 'flex', gap: '16px' }}>
              <button className="btn btn-outline"><RefreshCw size={18} /> Run Simulation</button>
              <button className="btn btn-primary" style={{ background: 'var(--brand-secondary)' }}><CheckCircle size={18} /> Publish Official Draw Results</button>
            </div>
          </div>
        )}

        {/* Winner Validation View */}
         {activeTab === 'winners' && (
          <div className="glass-panel" style={{ padding: '40px' }}>
             <h2 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
              <ShieldAlert size={24} color="#f59e0b" /> Pending Winner Verifications
            </h2>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '32px' }}>
              Winners are currently waiting manual review of their score proofs. Click 'Approve' to transition them to 'Paid' status.
            </p>

            <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr style={{ borderBottom: '1px solid var(--glass-border)', color: 'var(--text-secondary)' }}>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>User ID</th>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Match Tier</th>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Prize Share</th>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Proof Docs</th>
                  <th style={{ padding: '16px 8px', fontWeight: '500' }}>Action</th>
                </tr>
              </thead>
              <tbody>
                {[
                  { id: 'US-9912', match: '4-Match', prize: '$1,200', docs: 'Screenshot Attached' },
                  { id: 'US-3204', match: '4-Match', prize: '$1,200', docs: 'Screenshot Attached' },
                  { id: 'US-7718', match: '3-Match', prize: '$85', docs: 'Pending Upload' }
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                    <td style={{ padding: '20px 8px', fontWeight: '600' }}>{row.id}</td>
                    <td style={{ padding: '20px 8px' }}><span style={{ background: 'rgba(236,72,153,0.2)', color: 'var(--brand-secondary)', padding: '4px 8px', borderRadius: '4px', fontSize: '14px' }}>{row.match}</span></td>
                    <td style={{ padding: '20px 8px' }}>{row.prize}</td>
                    <td style={{ padding: '20px 8px', color: 'var(--text-secondary)' }}>{row.docs}</td>
                    <td style={{ padding: '20px 8px' }}>
                      <button className="btn btn-outline" style={{ padding: '8px 16px', fontSize: '13px', borderColor: 'var(--brand-tertiary)', color: 'var(--brand-tertiary)' }}>Approve</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}

        {/* Fallback for other tabs */}
        {['users', 'charities'].includes(activeTab) && (
          <div className="glass-panel" style={{ padding: '60px', textAlign: 'center', color: 'var(--text-secondary)' }}>
            <Target size={48} color="rgba(255,255,255,0.1)" style={{ margin: '0 auto 24px' }} />
            <p>Module loaded. Data syncing in progress...</p>
          </div>
        )}

      </div>

    </div>
  );
};

export default Admin;
