import React from 'react';

interface SimpleCardProps {
  id: string;
  mainText: string;
  subMainText: string;
  progress?: number;
  progressValue?: string;
  accentColor?: string;
  onFilledButtonClick?: (id: string) => void;
  onOutlinedButtonClick?: (id: string) => void;
  filledButtonInscription?: string;
  outlinedButtonInscription?: string;
  [key: string]: any; // Accept any additional props
}

export function SimpleCard({ 
  id, 
  mainText, 
  subMainText, 
  progress = 0, 
  progressValue, 
  accentColor = "#156ef6",
  onFilledButtonClick,
  onOutlinedButtonClick,
  filledButtonInscription = "Share",
  outlinedButtonInscription = "Bookmark",
  ...props 
}: SimpleCardProps) {
  return (
    <div className="bg-white rounded-2xl p-6 shadow-lg border-2 max-w-sm w-full">
      <div className="text-sm text-gray-500 mb-2">Uploaded on 12/31/2024</div>
      <h3 className="font-semibold text-lg mb-1">{mainText}</h3>
      <p className="text-gray-600 text-sm mb-4">{subMainText}</p>
      
      {progress > 0 && (
        <div className="mb-4">
          <div className="flex justify-between text-xs text-gray-500 mb-1">
            <span>Progress:</span>
            <span>{progressValue}</span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div 
              className="h-2 rounded-full transition-all duration-300"
              style={{ 
                width: `${progress}%`,
                backgroundColor: accentColor 
              }}
            />
          </div>
        </div>
      )}
      
      <div className="flex gap-2">
        <button
          onClick={() => onFilledButtonClick?.(id)}
          className="px-4 py-2 rounded-lg text-white text-sm font-medium transition-colors"
          style={{ backgroundColor: accentColor }}
        >
          {filledButtonInscription}
        </button>
        <button
          onClick={() => onOutlinedButtonClick?.(id)}
          className="px-4 py-2 rounded-lg border text-sm font-medium transition-colors hover:bg-gray-50"
          style={{ borderColor: accentColor, color: accentColor }}
        >
          {outlinedButtonInscription}
        </button>
      </div>
    </div>
  );
}