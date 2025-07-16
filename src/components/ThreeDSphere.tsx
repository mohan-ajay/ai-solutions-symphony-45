// ThreeDSphere.tsx
import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { CSS2DRenderer, CSS2DObject } from 'three/addons/renderers/CSS2DRenderer.js';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOMServer from 'react-dom/server';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface ThreeDSphereProps {
  color: string;
  icon: IconDefinition;
  label: string;
  size: number;
  isVisible: boolean;
  textColor?: string;
}

const ThreeDSphere: React.FC<ThreeDSphereProps> = ({ 
  color, 
  icon, 
  label, 
  size, 
  isVisible,
  textColor = '#FFFFFF'
}) => {
  const mountRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = React.useState(false);

  useEffect(() => {
    if (!mountRef.current) return;

    // Setup Three.js scene
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true 
    });
    renderer.setClearColor(0x000000, 0);
    renderer.setSize(size, size);
    renderer.shadowMap.enabled = true;
    
    const currentRef = mountRef.current;
    currentRef.appendChild(renderer.domElement);

    // Create sphere with solid color
    const geometry = new THREE.SphereGeometry(size/2 - 10, 32, 32);
    const material = new THREE.MeshPhongMaterial({ 
      color: new THREE.Color(color),
      shininess: 200,
      specular: 0xffffff,
      transparent: true,
      opacity: 0.95
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    sphere.castShadow = true;
    scene.add(sphere);

    // Add shadow plane
    const shadowGeometry = new THREE.PlaneGeometry(size * 0.7, size * 0.2);
    const shadowMaterial = new THREE.ShadowMaterial({ opacity: 0.3 });
    const shadowPlane = new THREE.Mesh(shadowGeometry, shadowMaterial);
    shadowPlane.position.y = -(size/2 - 18);
    shadowPlane.rotation.x = -Math.PI / 2;
    shadowPlane.receiveShadow = true;
    scene.add(shadowPlane);

    // Setup CSS2D renderer for fixed text
    const labelRenderer = new CSS2DRenderer();
    labelRenderer.setSize(size, size);
    labelRenderer.domElement.style.position = 'absolute';
    labelRenderer.domElement.style.top = '0';
    labelRenderer.domElement.style.pointerEvents = 'none';
    currentRef.appendChild(labelRenderer.domElement);

    // Create label element
    const labelElement = document.createElement('div');
    labelElement.style.color = textColor;
    labelElement.style.display = 'flex';
    labelElement.style.flexDirection = 'column';
    labelElement.style.alignItems = 'center';
    labelElement.style.justifyContent = 'center';
    labelElement.style.width = `${size}px`;
    labelElement.style.height = `${size}px`;
    labelElement.style.fontWeight = 'bold';
    labelElement.style.textAlign = 'center';
    labelElement.style.textShadow = '0 0 5px rgba(0,0,0,0.5)';

    // Add icon
    const iconElement = document.createElement('div');
    iconElement.style.marginBottom = '8px';
    iconElement.style.fontSize = '24px';
    iconElement.style.display = 'flex';
    iconElement.style.flexDirection = 'column';
    iconElement.style.alignItems = 'center';
    iconElement.style.justifyContent = 'center';
    iconElement.style.marginTop = '3rem';

    labelElement.appendChild(iconElement);

    // Add text
    const textElement = document.createElement('div');
    textElement.textContent = label;
    textElement.style.fontSize = '14px';
    labelElement.appendChild(textElement);

    // Create CSS2D object
    const labelCSS = new CSS2DObject(labelElement);
    labelCSS.position.set(0, 0, 0); // Position at center of sphere
    scene.add(labelCSS);

    // Render FontAwesome icon
    const iconHTML = ReactDOMServer.renderToString(
      <FontAwesomeIcon icon={icon} style={{ color: textColor }} />
    );
    iconElement.innerHTML = iconHTML;

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    // const directionalLight = new THREE.DirectionalLight(0xffffff, 0.7);
    // directionalLight.position.set(1, 1, 1);
    // directionalLight.castShadow = true;
    // scene.add(directionalLight);

    // Add a point light for more dynamic lighting
    const pointLight = new THREE.PointLight(0xffffff, 0.7, 100);
    pointLight.position.set(0, size, size);
    pointLight.castShadow = true;
    scene.add(pointLight);

    camera.position.z = size * 0.8;

    // Animation
    let animationId: number;
    const animate = () => {
      animationId = requestAnimationFrame(animate);
      // Rotate only the sphere
      sphere.rotation.y += 0.01;
      // Scale on hover
      if (hovered) {
        sphere.scale.set(1.15, 1.15, 1.15);
      } else {
        sphere.scale.set(1, 1, 1);
      }
      // Make label always face camera without reversing
      labelCSS.quaternion.copy(camera.quaternion);
      renderer.render(scene, camera);
      labelRenderer.render(scene, camera);
    };
    animate();

    return () => {
      cancelAnimationFrame(animationId);
      if (currentRef.contains(renderer.domElement)) {
        currentRef.removeChild(renderer.domElement);
      }
      if (currentRef.contains(labelRenderer.domElement)) {
        currentRef.removeChild(labelRenderer.domElement);
      }
    };
  }, [color, icon, label, size, textColor, hovered]);

  return (
    <div 
      ref={mountRef}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        position: 'relative',
        transition: 'all 1s',
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'scale(1)' : 'scale(0.5)',
        cursor: 'pointer',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    />
  );
};

export default ThreeDSphere;