// components/ThreeDSphere.tsx
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface ThreeDSphereProps {
  color?: string;
  icon?: any;
  label?: string;
  size?: number;
  textColor?: string;
  isVisible?: boolean;
  rotation?: number;
}

const ThreeDSphere: React.FC<ThreeDSphereProps> = ({
  color = '#ffffff',
  icon,
  label,
  size = 100,
  textColor = '#ffffff',
  isVisible = true,
}) => {
  return (
    <div
      className={`relative flex flex-col items-center justify-center transition-all duration-700 ease-in-out`}
      style={{
        width: size,
        height: size,
        opacity: isVisible ? 1 : 0,
        transformStyle: 'preserve-3d',
      }}
    >
      {/* Planet Sphere */}
      <div
        className="rounded-full shadow-[inset_-10px_-10px_30px_rgba(0,0,0,0.4),inset_10px_10px_20px_rgba(255,255,255,0.2),0_0_10px_rgba(160,100,255,0.8)] border border-white/10"
        style={{
          width: size * 0.7,
          height: size * 0.7,
          background: `radial-gradient(circle at 30% 30%, ${color}, #1a1a1a)`,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'relative',
        }}
      >
        {/* Icon in Center */}
        {icon && (
          <FontAwesomeIcon
            icon={icon}
            className="text-white drop-shadow-xl"
            style={{ fontSize: size * 0.3 }}
          />
        )}
      </div>

      {/* Label below */}
      {label && (
        <div
          className="text-center font-medium mt-2"
          style={{ color: textColor, fontSize: size * 0.12 }}
        >
          {label}
        </div>
      )}
    </div>
  );
};

export default ThreeDSphere;
