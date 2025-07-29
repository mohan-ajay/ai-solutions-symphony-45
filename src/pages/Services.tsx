import React, { useState, useEffect, useRef } from 'react';
import ModernHeader from '@/components/ModernHeader';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faChevronRight, faChevronDown, faMobileAlt, faDesktop, faBrain, faDatabase, faFlask,
  faSearch, faUsers, faDraftingCompass, faPalette, faRulerCombined,
  faSyncAlt, faCheckCircle, faLightbulb, faMapSigns, faTasks,
  faCogs, faVials, faBullhorn, faUserPlus, faSync
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import ModernFooter from '@/components/ModernFooter';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/ui/button';

const expertiseData = [
  {
    id: 'technology',
    tabName: 'AI & Automation',
    title: 'AI & Automation',
    image: '/services/AI-services.jpeg',
    description: "We're not lying when we say AI is nothing without data.At MetricDust we leverage your data judiciously to forward the best solutions in which your data can serve your business interests and personalize customer experience.",
    services: [
      { name: 'Data & AI', icon: faMobileAlt, details: 'We build high-performance, cross-platform mobile applications that offer a seamless user experience.' },
      { name: 'ML Solutions', icon: faDesktop, details: 'Our web development team creates responsive, fast, and secure websites tailored to your business needs.' },
    ],
  },
  {
    id: 'design',
    tabName: 'Digital Solutions',
    title: 'Digital Solutions',
    image: '/services/digital-services.png',
    description: 'MetricDust acts as your technology arm to help you grow digitally, across the internet to reach more people & gain an edge over your competitors leveraging user-centric development.',
    services: [
        { name: 'Web Development', icon: faSearch, details: 'We help you validate your ideas and define a product strategy that meets market needs.' },
        { name: 'Mobile App Development', icon: faUsers, details: 'Gain deep insights into your users\' behaviors and motivations to build products they love.' },
        { name: 'Digital Marketing', icon: faDraftingCompass, details: 'We craft intuitive and engaging user journeys that are both functional and delightful.' },
    ],
  },
  {
    id: 'strategy',
    tabName: 'Cloud-Native& Quantum:',
    title: 'Cloud-Native& Quantum:',
    image: '/services/cloud-services.jpeg',
    description: 'Build and migrate to cloud-native ecosystem for better agility, cost-cutting and scalability. At MetricDust we integrate Quantum Computing power to AI/ML plus quantum enabled cloud services.',
    services: [
        { name: 'Cloud-Native Technology ', icon: faSyncAlt, details: 'We guide your business through the process of adopting new digital technologies to improve processes and value.' },
        { name: 'Quantum Computing ', icon: faCheckCircle, details: 'Before you invest heavily, we help you validate that your product idea is viable and has a market.' },
    ],
  },
  {
    id: 'growth',
    tabName: 'Security & Trust',
    title: 'Security & Trust',
    image: '/services/cybersecurity.png',
    description: "Ours is a world driven and governed by data but it's important to keep your data safe to promote brand integrity and customer retention.We help you build security and trust with our blockchain & Cybersecurity services that help you feel secure.",
    services: [
        { name: 'Cybersecurity', icon: faCogs, details: 'We provide continuous product management to ensure your product evolves with user needs.' },
        { name: 'Blockchain Development', icon: faVials, details: 'We use data-driven insights and A/B testing to optimize your product for growth.' },
        
    ],
  },
];

const Services = () => {
  const [activeSection, setActiveSection] = useState('technology');
  const [openAccordion, setOpenAccordion] = useState<string | null>(null);
  const sectionRefs = useRef<Record<string, HTMLElement | null>>({});
  const navigate = useNavigate();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -60% 0px' } 
    );

    Object.values(sectionRefs.current).forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 120;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
         top: offsetPosition,
         behavior: "smooth"
      });
    }
  };
  
  const toggleAccordion = (id: string) => {
    setOpenAccordion(openAccordion === id ? null : id);
  };

  return (
    <>

      <ModernHeader alwaysHideOnScroll={true} />
      <div 
  className="h-[100vh] bg-black text-white bg-cover bg-center flex items-center justify-center relative" 
>
  {/* Background with opacity */}
  <div 
    className="absolute inset-0 bg-cover bg-center opacity-60"
    style={{ backgroundImage: 'url(/NSlider2.webp)' }}
  />
  
  {/* Content container (unchanged) */}
  <div className="relative z-10 text-center p-4 sm:p-8 rounded-lg">
    <div className="max-w-4xl mx-auto text-center">
      <div>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-5">
    We help you build an AI-first,
  </h1>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-5">
    customer-centric ecosystem
  </h1>
  <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-5">
    that is scalable and future-proof
  </h1>
</div>

    </div>
  </div>
</div>

      <div className="bg-gray-50">
        <div className="sticky top-[0px] bg-gray-50 z-10 shadow-sm overflow-x-auto">
            <div className="px-2 sm:px-4 lg:px-8">
                <div className="flex border-b border-gray-200 w-full justify-evenly">
                    {expertiseData.map((tab, index) => (
                    <button
                        key={tab.id}
                        onClick={() => scrollToSection(tab.id)}
                        className={`flex-shrink-0 py-3 sm:py-2 px-3 sm:px-2 text-sm sm:text-base md:text-xl font-medium text-center transition-colors duration-300 relative whitespace-nowrap ${activeSection === tab.id ? 'text-black' : 'text-gray-400 hover:text-black'}`}
                    >
                        <span className="text-gray-400 mr-1 sm:mr-2">0{index + 1}</span> {tab.tabName}
                        {activeSection === tab.id && <motion.div className="absolute bottom-[-1px] left-0 right-0 h-0.5 bg-black" layoutId="underline" />}
                    </button>
                    ))}
                </div>
            </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 md:py-24">
            <div className="space-y-16 sm:space-y-24 md:space-y-32">
                {expertiseData.map((expertise, index) => (
                <section 
                    key={expertise.id} 
                    id={expertise.id}
                    ref={el => (sectionRefs.current[expertise.id] = el)}
                    className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
                >
                    {index % 2 === 0 ? (
                      <>
                        <div>
                          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                            <span className="text-gray-400 mr-2 sm:mr-4">0{index + 1}</span>
                            {expertise.title}
                          </h2>
                          <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src={expertise.image} alt={expertise.title} className="w-full h-auto object-cover" />
                          </div>
                        </div>
                        <div className='mt-8 sm:mt-14'>
                          <p className="text-black text-xl font-medium mb-8">{expertise.description}</p>
                          <div className="mb-8">
                            <h4 className="text-base font-semibold text-gray-500 mb-4">Services</h4>
                            <ul>
                            {expertise.services.map((service, serviceIndex) => {
                                const accordionId = `${expertise.id}-${serviceIndex}`;
                                const isOpen = openAccordion === accordionId;
                                return (
                                <li key={service.name} className="border-b border-gray-200">
                                    <button
                                        onClick={() => toggleAccordion(accordionId)}
                                        className="w-full flex items-center justify-between py-4 cursor-pointer"
                                    >
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={service.icon} className="text-gray-400 w-5 mr-4" />
                                            <span className="text-gray-800 text-xl">{service.name}</span>
                                        </div>
                                        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} className="text-gray-400 transition-transform" />
                                    </button>
                                    {isOpen && (
                                      <div className="overflow-visible">
                                        <p className="pt-2 pb-4 text-base px-4 text-black">
                                          {service.details}
                                        </p>
                                      </div>
                                    )}
                                </li>
                                )
                            })}
                            </ul>
                          </div>
                        </div>
                      </>
                    ) : (
                      <>
                        <div>
                          <p className="text-black text-xl font-medium mb-8">{expertise.description}</p>
                          <div className="mb-8">
                            <h4 className="text-base font-semibold text-gray-500 mb-4">Services</h4>
                            <ul>
                            {expertise.services.map((service, serviceIndex) => {
                                const accordionId = `${expertise.id}-${serviceIndex}`;
                                const isOpen = openAccordion === accordionId;
                                return (
                                <li key={service.name} className="border-b border-gray-200">
                                    <button
                                        onClick={() => toggleAccordion(accordionId)}
                                        className="w-full flex items-center justify-between py-4 cursor-pointer"
                                    >
                                        <div className="flex items-center">
                                            <FontAwesomeIcon icon={service.icon} className="text-gray-400 w-5 mr-4" />
                                            <span className="text-gray-800 text-xl">{service.name}</span>
                                        </div>
                                        <FontAwesomeIcon icon={isOpen ? faChevronDown : faChevronRight} className="text-gray-400 transition-transform" />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial="collapsed"
                                                animate="open"
                                                exit="collapsed"
                                                variants={{
                                                    open: { opacity: 1, height: 'auto' },
                                                    collapsed: { opacity: 0, height: 0 }
                                                }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden"
                                            >
                                                <p className="pt-2 pb-4 text-base px-4 text-black">
                                                    {service.details}
                                                </p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </li>
                                )
                            })}
                            </ul>
                          </div>
                        </div>
                        <div>
                          <h2 className="text-3xl font-bold text-gray-900 mb-6">
                            <span className="text-gray-400 mr-4">0{index + 1}</span>
                            {expertise.title}
                          </h2>
                          <div className="rounded-lg overflow-hidden shadow-lg">
                            <img src={expertise.image} alt={expertise.title} className="w-full h-auto object-cover" />
                          </div>
                        </div>
                      </>
                    )}
                </section>
                ))}
            </div>
        </div>
      </div>
      
      <div className="bg-gray-200 py-12 sm:py-16 md:py-20 text-center px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-black mb-3 sm:mb-4">Your tech partners for AI-first Digital Transformation —</h2>
        <p className="text-lg sm:text-xl md:text-2xl text-gray-600 mb-6 sm:mb-8">We'd love to hear about your project</p>
        <button type="button" className="text-black mb-6 sm:mb-8 font-medium bg-gray-800 hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-base sm:text-lg md:text-xl px-4 sm:px-5 py-2 sm:py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700" style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }} onClick={() => {navigate('/contact-us')
           
          }}>Contact Us</button>
      </div>
      <ModernFooter />
    </>
  );
};

export default Services;