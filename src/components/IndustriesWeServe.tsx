import React from 'react';
import {
  FaBuilding, FaUserTie, FaNetworkWired, FaHeadset, FaBookOpen, 
  FaHeartbeat, FaBullhorn, FaCloud, FaShieldAlt
} from 'react-icons/fa';
import './IndustriesWeServe.css';

const gradientMapping: Record<string, string> = {
  blue: "linear-gradient(hsla(223, 10%, 87%, 1.00))",
  purple: "linear-gradient(hsla(285, 7%, 88%, 1.00), hsla(260, 2%, 61%, 1.00))",
  red: "linear-gradient(hsla(0, 16%, 89%, 1.00), hsla(340, 3%, 57%, 1.00))",
  indigo: "linear-gradient(hsla(255, 4%, 80%, 1.00), hsla(240, 1%, 56%, 1.00))",
  orange: "linear-gradient(hsla(40, 11%, 85%, 1.00), hsla(40, 1%, 57%, 1.00))",
  green: "linear-gradient(hsla(120, 7%, 83%, 1.00), hsla(110, 3%, 66%, 1.00))",
  teal: "linear-gradient(hsla(180, 10%, 89%, 1.00), hsl(168, 90%, 40%))",
  pink: "linear-gradient(hsla(330, 14%, 89%, 1.00), hsla(310, 3%, 58%, 1.00))",
  cyan: "linear-gradient(hsla(204, 6%, 85%, 1.00), hsla(180, 2%, 53%, 1.00))"
};

const industries = [
  { name: 'Property Tech', icon: <FaBuilding />, color: 'orange' },
  { name: 'HR', icon: <FaUserTie />, color: 'purple' },
  { name: 'Open Network', icon: <FaNetworkWired />, color: 'blue' },
  { name: 'Customer Support', icon: <FaHeadset />, color: 'indigo' },
  { name: 'Edu Tech', icon: <FaBookOpen />, color: 'green' },
  { name: 'Health Care', icon: <FaHeartbeat />, color: 'red' },
  { name: 'Digital Marketing', icon: <FaBullhorn />, color: 'pink' },
  { name: 'Cloud Transformation', icon: <FaCloud />, color: 'cyan' },
  { name: 'Cyber Security', icon: <FaShieldAlt />, color: 'teal' },
];

const IndustriesWeServe: React.FC = () => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  // Split industries into two rows: 5 in first row, 4 in second
  const firstRow = industries.slice(0, 5);
  const secondRow = industries.slice(5);

  return (
    <div className="flex w-full justify-center items-center py-12">
      <div className="hexagon-grid-container">
        {/* Mobile layout: 2 columns, 5 rows */}
        <div className="sm:hidden">
          {[0, 2, 4, 6, 8].map((startIndex) => (
            <div key={startIndex} className="hexagon-mobile-row">
              {industries.slice(startIndex, startIndex + 2).map((industry, index) => (
                <HexagonItem 
                  key={startIndex + index} 
                  industry={industry} 
                  getBackgroundStyle={getBackgroundStyle} 
                />
              ))}
            </div>
          ))}
        </div>
        
        {/* Desktop layout: two rows */}
        <div className="hidden sm:block">
          {/* First row with 5 hexagons */}
          <div className="hexagon-row">
            {firstRow.map((industry, index) => (
              <HexagonItem 
                key={index} 
                industry={industry} 
                getBackgroundStyle={getBackgroundStyle} 
              />
            ))}
          </div>
          
          {/* Second row with 4 hexagons, offset */}
          <div className="hexagon-row offset">
            {secondRow.map((industry, index) => (
              <HexagonItem 
                key={index + 5} 
                industry={industry} 
                getBackgroundStyle={getBackgroundStyle} 
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
  getBackgroundStyle: (color: string) => React.CSSProperties;
}> = ({ industry, getBackgroundStyle }) => {
  return (
    <div className="hexagon-item">
      <button
        type="button"
        aria-label={industry.name}
        className="hexagon-button group"
      >
        {/* Back layer */}
        <span
          className="hexagon-back"
          style={{
            ...getBackgroundStyle(industry.color),
          }}
        ></span>

        {/* Front layer */}
        <span className="hexagon-front">
          <span className="hexagon-icon" aria-hidden="true">
            {React.cloneElement(industry.icon, { size: 36 })}
          </span>
        </span>

        {/* Label */}
        <span className="hexagon-label">
          {industry.name}
        </span>
      </button>
    </div>
  );
};

export default IndustriesWeServe;