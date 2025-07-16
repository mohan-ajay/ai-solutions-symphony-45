import React, { Component } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import { FeatureCollection, Geometry } from 'geojson';

interface Location {
  name: string;
  coordinates: [number, number]; // [longitude, latitude]
}

interface GlobeProps {
  size?: number;
  locations?: Location[];
  rotationSpeed?: number;
}

interface GlobeState {
  rotation: number;
  geoJson?: FeatureCollection<Geometry>;
}

class GlobeNew extends Component<GlobeProps, GlobeState> {
  private animationFrameId: number | null = null;
  private defaultLocations: Location[] = [
    { name: 'NY', coordinates: [-74.006, 40.7128] },
    { name: 'LDN', coordinates: [-0.1278, 51.5074] },
    { name: 'TK', coordinates: [139.6917, 35.6895] }
  ];

  static defaultProps = {
    size: 300,
    rotationSpeed: 0.3
  };

  constructor(props: GlobeProps) {
    super(props);
    
    this.state = {
      rotation: 0,
      geoJson: undefined
    };
  }

  componentDidMount() {
    this.loadGeoData();
    this.animate();
  }

  componentWillUnmount() {
    if (this.animationFrameId) {
      cancelAnimationFrame(this.animationFrameId);
    }
  }

  loadGeoData = async () => {
    try {
      const response = await fetch('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
      const worldData = await response.json();
      const geoJson = topojson.feature(worldData, worldData.objects.countries);
      this.setState({ geoJson });
    } catch (error) {
      console.error('Error loading geography data:', error);
    }
  }

  animate = () => {
    this.animationFrameId = requestAnimationFrame(() => {
      this.setState(prevState => ({
        rotation: prevState.rotation + (this.props.rotationSpeed || 0.3)
      }), () => {
        this.animate();
      });
    });
  }

  renderLocationMarker(location: Location, projection: d3.GeoProjection) {
    const [x, y] = projection(location.coordinates) || [0, 0];
    if (x === undefined || y === undefined) return null;
    
    return (
      <g key={location.name} transform={`translate(${x}, ${y})`}>
        <circle r={3} fill="#FF5722" stroke="#FFF" strokeWidth={1} />
        <text 
          y={-8} 
          textAnchor="middle" 
          fill="#333" 
          fontSize={10}
          fontWeight="bold"
        >
          {location.name}
        </text>
      </g>
    );
  }

  render() {
    const { size = 300, locations = this.defaultLocations } = this.props;
    const { rotation, geoJson } = this.state;

    if (!geoJson) {
      return <div className="globe-loading">Loading globe...</div>;
    }

    const projection = d3.geoOrthographic()
      .fitSize([size, size], geoJson)
      .rotate([rotation, 0])
      .precision(10);
    
    const geoGenerator = d3.geoPath()
      .projection(projection);
    
    const pathString = geoGenerator(geoJson);

    return (
      <div className="globe-container" style={{ width: size, height: size }}>
        <svg width="100%" height="100%" viewBox={`0 0 ${size} ${size}`}>
          {/* Background circle for globe effect */}
          <circle cx={size/2} cy={size/2} r={size/2} fill="#e6f7ff" />
          
          {/* Countries */}
          <path 
            d={pathString || undefined} 
            fill="#a3d8ff" 
            stroke="#FFF" 
            strokeWidth={0.3} 
          />
          
          {/* Location markers - only render if visible on this side of the globe */}
          {locations.map(location => {
            const coords = projection(location.coordinates);
            return coords ? this.renderLocationMarker(location, projection) : null;
          })}
        </svg>
      </div>
    );
  }
}

export default GlobeNew;