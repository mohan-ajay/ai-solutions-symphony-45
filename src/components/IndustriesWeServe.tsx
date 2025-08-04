import React from 'react';
import {
  FaBuilding, FaUserTie, FaNetworkWired, FaHeadset, FaBookOpen, 
  FaHeartbeat, FaBullhorn, FaCloud, FaShieldAlt
} from 'react-icons/fa';
import './IndustriesWeServe.css';

const iconColors: Record<string, string> = {
  white: "#FFFFFF",
};

const industries = [
  { name: 'Property Tech', icon: <FaBuilding />, color: 'white' },
  { name: 'HR', icon: <FaUserTie />, color: 'white' },
  { name: 'Open Network', icon: <FaNetworkWired />, color: 'white' },
  { name: 'Customer Support', icon: <FaHeadset />, color: 'white' },
  { name: 'Edu Tech', icon: <FaBookOpen />, color: 'white' },
  { name: 'Health Care', icon: <FaHeartbeat />, color: 'white' },
  { name: 'Digital Marketing', icon: <FaBullhorn />, color: 'white' },
  { name: 'Cloud Transformation', icon: <FaCloud />, color: 'white' },
  { name: 'Cyber Security', icon: <FaShieldAlt />, color: 'white' },
];

const IndustriesWeServe: React.FC = () => {
  return (
    <div className="industries-container">
      <div className="industries-wrapper">
        {/* Mobile layout: 2 columns grid */}
        <div className="mobile-grid">
          {industries.map((industry, index) => (
            <HexagonItem 
              key={index} 
              industry={industry}
            />
          ))}
        </div>
        
        {/* Desktop layout: hexagon pattern */}
        <div className="desktop-layout">
          {/* First row */}
          <div className="first-row">
            {industries.slice(0, 5).map((industry, index) => (
              <HexagonItem 
                key={index} 
                industry={industry}
              />
            ))}
          </div>
          
          {/* Second row (offset) */}
          <div className="second-row">
            {industries.slice(5, 9).map((industry, index) => (
              <HexagonItem 
                key={index + 4} 
                industry={industry}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const HexagonItem: React.FC<{
  industry: { name: string; icon: React.ReactElement; color: string };
}> = ({ industry }) => {
  return (
    <div className="hexagon-item">
      <div className="glassmorphic-wrapper">
      <button
        type="button"
        aria-label={industry.name}
        className="glassmorphic-button"
      >
        <span className="icon-container">
          {React.cloneElement(industry.icon, { 
            style: { color: iconColors[industry.color] }
          })}
        </span>
        <span className="hexagon-text">
          {industry.name}
        </span>
      </button>
      </div>
    </div>
  );
};

export default IndustriesWeServe;