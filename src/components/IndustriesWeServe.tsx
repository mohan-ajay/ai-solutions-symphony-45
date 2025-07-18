import React from 'react';
import {
  FaBuilding, FaUserTie, FaNetworkWired, FaHeadset, FaBookOpen, FaHeartbeat, FaBullhorn, FaCloud, FaShieldAlt
} from 'react-icons/fa';

const industries = [
  {name: 'Property Tech', icon: <FaBuilding /> },
  {name: 'HR', icon: <FaUserTie /> },
  { name: 'Open Network Service', icon: <FaNetworkWired /> },
  { name: 'Customer Support', icon: <FaHeadset /> },
  { name: 'Edu Tech', icon: <FaBookOpen /> },
  { name: 'Health Care', icon: <FaHeartbeat /> },
  { name: 'Digital Marketing', icon: <FaBullhorn /> },
  { name: 'Cloud Transformation', icon: <FaCloud /> },
  { name: 'Cyber Security', icon: <FaShieldAlt /> },
];

const IndustriesWeServe: React.FC = () => {
  return (
    <div style={{ padding: '4rem 2rem', textAlign: 'center', }}>
      

      <div style={{
        marginTop: '3rem',
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        gap: '1.5rem'
      }}>
        {industries.map((industry, index) => (
          <div
            key={index}
            style={{
              width: '13rem',
              height: '11rem',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              color: index % 2 === 0 ? 'black' : 'black',
              backgroundColor: index % 2 === 0 ? '#A9A9A9' : 'white',
              border: index % 2 !== 0 ? '1px solid #e5e7eb' : 'none',
              boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
              clipPath: 'polygon(50% 0%, 93% 25%, 93% 75%, 50% 100%, 7% 75%, 7% 25%)',
              transition: 'transform 0.3s ease-in-out'
            }}
            onMouseEnter={(e) => (e.currentTarget.style.transform = 'scale(1.05)')}
            onMouseLeave={(e) => (e.currentTarget.style.transform = 'scale(1)')}
          >
            <div style={{ fontSize: '1.5rem', marginBottom: '0.25rem' }}>{industry.icon}</div>
            <div style={{ fontSize: '1rem', fontWeight: 600, padding: '0 0.25rem', textAlign: 'center' }}>
              {industry.name}
            </div>
          </div>
        ))}
      </div>

      
    </div>
  );
};

export default IndustriesWeServe;
