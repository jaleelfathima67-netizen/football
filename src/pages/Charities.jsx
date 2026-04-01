import React, { useState } from 'react';
import { Search, MapPin, Calendar, Heart, ArrowRight } from 'lucide-react';

const Charities = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filter, setFilter] = useState('all');

  const charities = [
    {
      id: 1,
      name: "Global Children's Fund",
      category: "children",
      location: "Worldwide",
      description: "Dedicated to providing education, health, and protection to children worldwide.",
      featured: true,
      upcomingEvent: "Annual Gala - Nov 15th"
    },
    {
      id: 2,
      name: "Ocean Cleanup Initiative",
      category: "environment",
      location: "Coastal Regions",
      description: "Working tirelessly to remove plastic pollution from our oceans and beaches.",
      featured: false,
      upcomingEvent: "Beach Cleanup Day - Oct 5th"
    },
    {
      id: 3,
      name: "Wildlife Conservation Trust",
      category: "wildlife",
      location: "Africa & Asia",
      description: "Protecting endangered species and their habitats through community-led projects.",
      featured: false,
      upcomingEvent: "Wildlife Photography Masterclass"
    },
    {
      id: 4,
      name: "Mines Advisory Group",
      category: "humanitarian",
      location: "Global",
      description: "Finding and destroying landmines and unexploded bombs in conflict-affected areas.",
      featured: true,
      upcomingEvent: "Walk for Peace"
    }
  ];

  const filteredCharities = charities.filter(c => {
    const matchesSearch = c.name.toLowerCase().includes(searchTerm.toLowerCase()) || c.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesFilter = filter === 'all' || c.category === filter;
    return matchesSearch && matchesFilter;
  });

  const featuredCharities = charities.filter(c => c.featured);

  return (
    <div className="container animate-fade-in" style={{ padding: '60px 0' }}>
      
      {/* Header Section */}
      <h1 style={{ fontSize: '48px', marginBottom: '16px' }}>Make An Impact</h1>
      <p style={{ fontSize: '20px', color: 'var(--text-secondary)', marginBottom: '48px', maxWidth: '700px' }}>
        Discover incredible causes. 10% of your subscription goes directly to your chosen charity, giving you the power to change lives while you play.
      </p>

      {/* Featured Charities Spotlight */}
      <div style={{ marginBottom: '64px' }}>
        <h2 style={{ fontSize: '24px', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Heart size={24} color="var(--brand-secondary)" fill="var(--brand-secondary)" /> Featured Spotlight
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '24px' }}>
          {featuredCharities.map(charity => (
            <div key={charity.id} className="glass-panel" style={{ padding: '40px', background: 'linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, rgba(236, 72, 153, 0.05) 100%)', border: '1px solid rgba(236, 72, 153, 0.2)' }}>
              <div style={{ display: 'flex', gap: '20px', marginBottom: '24px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', flexShrink: 0 }}></div>
                <div>
                  <h3 style={{ fontSize: '24px', marginBottom: '8px' }}>{charity.name}</h3>
                  <span style={{ display: 'inline-block', padding: '4px 12px', borderRadius: '12px', background: 'rgba(255,255,255,0.1)', fontSize: '12px', textTransform: 'uppercase', letterSpacing: '1px' }}>{charity.category}</span>
                </div>
              </div>
              <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '16px' }}>{charity.description}</p>
              
              <div style={{ padding: '16px', background: 'rgba(0,0,0,0.2)', borderRadius: 'var(--radius-md)', marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Calendar size={18} color="var(--brand-primary)" />
                <span style={{ fontSize: '14px' }}>Upcoming: <strong>{charity.upcomingEvent}</strong></span>
              </div>

              <button className="btn btn-primary" style={{ width: '100%' }}>Select This Charity</button>
            </div>
          ))}
        </div>
      </div>

      {/* Directory Search & Filter */}
      <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 300px', position: 'relative' }}>
          <Search size={20} color="var(--text-secondary)" style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)' }} />
          <input 
            type="text" 
            placeholder="Search charities or causes..." 
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{
              width: '100%',
              padding: '16px 20px 16px 48px',
              borderRadius: 'var(--radius-md)',
              background: 'rgba(0,0,0,0.3)',
              border: '1px solid var(--glass-border)',
              color: '#fff',
              fontSize: '16px'
            }}
          />
        </div>
        <select 
          value={filter} 
          onChange={(e) => setFilter(e.target.value)}
          style={{
            padding: '16px 20px',
            borderRadius: 'var(--radius-md)',
            background: 'rgba(0,0,0,0.3)',
            border: '1px solid var(--glass-border)',
            color: '#fff',
            fontSize: '16px',
            outline: 'none',
            minWidth: '200px'
          }}
        >
          <option value="all">All Categories</option>
          <option value="children">Children & Youth</option>
          <option value="environment">Environment</option>
          <option value="wildlife">Wildlife</option>
          <option value="humanitarian">Humanitarian</option>
        </select>
      </div>

      {/* Charity Grid */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
        {filteredCharities.map(charity => (
           <div key={charity.id} className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
            <h3 style={{ fontSize: '20px', marginBottom: '12px' }}>{charity.name}</h3>
            
            <div style={{ display: 'flex', gap: '16px', marginBottom: '16px' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--text-secondary)' }}>
                <MapPin size={14} /> {charity.location}
              </span>
            </div>
            
            <p style={{ color: 'var(--text-secondary)', marginBottom: '24px', fontSize: '15px', flexGrow: 1 }}>{charity.description}</p>
            
            <button className="btn btn-outline" style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>View Profile <ArrowRight size={16} /></button>
          </div>
        ))}
      </div>
      
      {filteredCharities.length === 0 && (
        <div style={{ textAlign: 'center', padding: '64px 0', color: 'var(--text-secondary)' }}>
          <p>No charities found matching your criteria.</p>
        </div>
      )}

    </div>
  );
};

export default Charities;
