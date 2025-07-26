import React, { useState, useEffect } from 'react';
import * as d3 from 'd3';
import * as topojson from 'topojson-client';
import NewGlobe from './NewGlobe'; // Adjust the path to where your Globe.tsx is located

const WorldMap: React.FC = () => {
  const [geoJson, setGeoJson] = useState<GeoJSON.FeatureCollection | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Define your locations
  const locations = [
    { name: "Seattle", lat: 47.6061, long: 122.3328 },
    { name: "London", lat: 51.5074, long: -0.1278 },
    { name: "Tokyo", lat: 35.6762, long: 139.6503 },
    { name: "Sydney", lat: -33.8688, long: 151.2093 }
  ];

  useEffect(() => {
    const fetchGeoData = async () => {
      try {
        const data = await d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json');
        const worldJson = topojson.feature(
          data as topojson.Topology,
          (data as any).objects.countries
        );
        
        if (worldJson.type === "FeatureCollection") {
          setGeoJson(worldJson as GeoJSON.FeatureCollection);
        } else {
          setError("Geo data is not a FeatureCollection");
        }
      } catch (err) {
        setError('Failed to load geographic data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchGeoData();
  }, []);

  if (loading) return <div>Loading world map...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!geoJson) return <div>No geographic data available</div>;

  return (
    <div className="world-map-container" style={{ width: '100%', maxWidth: '800px', margin: '0 auto' }}>
      <h2>Interactive World Globe</h2>
      <NewGlobe 
        geoJson={geoJson} 
        size={600} 
        locations={locations} 
      />
      <div className="map-legend" style={{ marginTop: '20px' }}>
        <p>Red markers show major world cities</p>
      </div>
    </div>
  );
};

export default WorldMap;