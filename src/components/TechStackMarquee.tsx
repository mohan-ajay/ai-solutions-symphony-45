import React from "react";
import "./TechStackMarquee.css";
import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaAngular, FaVuejs, FaSass, FaBootstrap, FaNodeJs, FaPython, FaJava, FaDatabase } from "react-icons/fa";
import { SiTypescript, SiTailwindcss, SiTensorflow, SiPytorch, SiOpenai, SiScikitlearn, SiKeras, SiSpacy, SiHuggingface, SiPandas, SiNumpy, SiJupyter, SiExpress, SiDjango, SiFlask, SiSpring, SiMongodb, SiPostgresql, SiMysql, SiRedis, SiGraphql } from "react-icons/si";
import { MdDeviceUnknown } from "react-icons/md";

const frontendTech = [
  { name: "HTML", icon: <FaHtml5 color="#e34c26" /> },
  { name: "CSS", icon: <FaCss3Alt color="#1572b6" /> },
  { name: "JavaScript", icon: <FaJs color="#f7df1e" /> },
  { name: "TypeScript", icon: <SiTypescript color="#3178c6" /> },
  { name: "React", icon: <FaReact color="#61dafb" /> },
  { name: "Angular", icon: <FaAngular color="#dd0031" /> },
  { name: "Vue", icon: <FaVuejs color="#42b883" /> },
  { name: "Sass", icon: <FaSass color="#cc6699" /> },
  { name: "Bootstrap", icon: <FaBootstrap color="#7952b3" /> },
  { name: "Tailwind", icon: <SiTailwindcss color="#38bdf8" /> },
];
const aiTech = [
  { name: "TensorFlow", icon: <SiTensorflow color="#ff6f00" /> },
  { name: "PyTorch", icon: <SiPytorch color="#ee4c2c" /> },
  { name: "OpenAI", icon: <SiOpenai color="#10a37f" /> },
  { name: "Scikit-learn", icon: <SiScikitlearn color="#f7931e" /> },
  { name: "Keras", icon: <SiKeras color="#d00000" /> },
  { name: "spaCy", icon: <SiSpacy color="#09a3d5" /> },
  { name: "HuggingFace", icon: <SiHuggingface color="#ffcc00" /> },
  { name: "Pandas", icon: <SiPandas color="#150458" /> },
  { name: "NumPy", icon: <SiNumpy color="#013243" /> },
  { name: "Jupyter", icon: <SiJupyter color="#f37626" /> },
];
const backendTech = [
  { name: "Node.js", icon: <FaNodeJs color="#339933" /> },
  { name: "Express", icon: <SiExpress color="#000" /> },
  { name: "Django", icon: <SiDjango color="#092e20" /> },
  { name: "Flask", icon: <SiFlask color="#000" /> },
  { name: "Spring", icon: <SiSpring color="#6db33f" /> },
  { name: "MongoDB", icon: <SiMongodb color="#47a248" /> },
  { name: "PostgreSQL", icon: <SiPostgresql color="#336791" /> },
  { name: "MySQL", icon: <SiMysql color="#4479a1" /> },
  { name: "Redis", icon: <SiRedis color="#dc382d" /> },
  { name: "GraphQL", icon: <SiGraphql color="#e10098" /> },
];

function MarqueeRow({ items, direction = "left" }) {
  return (
    <div className={`marquee-row marquee-${direction}`}>
      <div className="marquee-content">
        {items.map((tech, idx) => (
          <React.Fragment key={tech.name + idx}>
            <span className="tech-item tech-bordered">
              <span className="tech-icon">{tech.icon || <MdDeviceUnknown />}</span>
              <span className="tech-label">{tech.name}</span>
            </span>
            {/* Divider, except after last item */}
            {idx !== items.length - 1 && <span className="tech-divider" />}
          </React.Fragment>
        ))}
        {/* Duplicate for seamless loop */}
        {items.map((tech, idx) => (
          <React.Fragment key={tech.name + "-dup-" + idx}>
            <span className="tech-item tech-bordered">
              <span className="tech-icon">{tech.icon || <MdDeviceUnknown />}</span>
              <span className="tech-label">{tech.name}</span>
            </span>
            {idx !== items.length - 1 && <span className="tech-divider" />}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
}

const TechStackMarquee = () => (
  <div className="tech-stack-marquee">
    <MarqueeRow items={frontendTech} direction="left" />
    <MarqueeRow items={aiTech} direction="right" />
    <MarqueeRow items={backendTech} direction="left" />
  </div>
);

export default TechStackMarquee;

// CSS file (TechStackMarquee.css) should be created for animation styles. 