import React from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';

interface Location {
  name: string;
  lat: number;
  long: number;
}

interface GlobeProps {
  geoJson: GeoJSON.FeatureCollection;
  size: number;
  locations?: Location[];
}

interface GlobeState {
  rotation: number;
}

class Globe extends React.Component<GlobeProps, GlobeState> {
  private animationFrameId: number | null = null;

  constructor(props: GlobeProps) {
    super(props);
    
    this.state = {
      rotation: 0
    };
  }

  componentDidMount() {
    this.animate();
  }

  componentWillUnmount() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  animate = () => {
    this.animationFrameId = requestAnimationFrame(() => {
      this.setState(prevState => ({
        rotation: prevState.rotation + 0.2
      }), this.animate);
    });
  };

  projectPoint(lat: number, long: number, projection: d3.GeoProjection): { x: number; y: number } {
    const [x = 0, y = 0] = projection([long, lat]) || [0, 0];
    return { x, y };
  }

  render() {
    const { geoJson, size, locations = [] } = this.props;
    const { rotation } = this.state;

    const projection = d3.geoOrthographic()
      .fitSize([size, size], geoJson)
      .rotate([rotation]);

    const geoGenerator = d3.geoPath()
      .projection(projection);

    const pathString = geoGenerator(geoJson) || '';

    return (
      <svg width={size} height={size}>
        {/* Globe outline */}
        <path 
          d={pathString} 
          fill="#1e3a8a" 
          stroke="#fff" 
          strokeWidth={0.5}
        />
        
        {/* Location markers */}
        {locations.map((location, i) => {
          const { x, y } = this.projectPoint(location.lat, location.long, projection);
          const isVisible = x !== 0 && y !== 0 && !isNaN(x) && !isNaN(y);

          return isVisible ? (
            <g key={`${location.name}-${i}`} transform={`translate(${x},${y})`}>
              <circle r={5} fill="#ef4444" stroke="#fff" strokeWidth={1} />
              <text 
                y={-10} 
                textAnchor="middle" 
                fill="#fff" 
                fontSize={12}
                fontWeight="bold"
                stroke="#000"
                strokeWidth={2}
                paintOrder="stroke"
              >
                {location.name}
              </text>
            </g>
          ) : null;
        })}
      </svg>
    );
  }
}

// Usage example:
const newGlobe: React.FC = () => {
  const [geoJson, setGeoJson] = React.useState<GeoJSON.FeatureCollection | null>(null);

//   React.useEffect(() => {
//     // In a real app, you would fetch this from your API or assets
//     d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json').then((data: any) => {
//       const worldJson = topojson.feature(data, data.objects.countries) as GeoJSON.FeatureCollection;
//       setGeoJson(worldJson);
//     });
//   }, []);

  const locations: Location[] = [
    { name: "New York", lat: 40.7128, long: -74.0060 },
    { name: "London", lat: 51.5074, long: -0.1278 },
    { name: "Tokyo", lat: 35.6762, long: 139.6503 },
    { name: "Sydney", lat: -33.8688, long: 151.2093 }
  ];

  if (!geoJson) return <div>Loading...</div>;

  return (
    <div className="globe-container">
      <Globe 
        geoJson={geoJson} 
        size={600} 
        locations={locations} 
      />
    </div>
  );
};

export default newGlobe;