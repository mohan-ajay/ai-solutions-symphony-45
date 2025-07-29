import React from 'react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';
import inception_1 from '/about-us/inception_1.jpg'
import inception_2 from '/about-us/inception_2.jpg'
import inception_3 from '/about-us/inception_3.jpg'
import lohith_img from '/about-us/Lohith_img.png'
import satish_img from '/about-us/Satish_img.png'
import lakshmi_img from '/about-us/Lakshmi_img.png'
import bhragv_img from '/about-us/bhargav_image.png'
import your_dream_img from '/about-us/Your_dream_img.webp'
import {useNavigate} from 'react-router-dom'


const team = [
  {
    name: 'Lohith Ravi',
    location: 'Seattle, USA',
    img: lohith_img,
  },
  {
    name: 'Satish A G',
    location: 'Bengaluru, India',
    img: satish_img,
  },
  {
    name: 'Lakshmi',
    location: 'United Kingdom',
    img: lakshmi_img,
  },
  {
    name: 'Bhargav',
    location: 'Seattle, USA',
    img: bhragv_img,
  },
];

const timeline = [
  {
    year: '2020',
    title: 'Company Inception',
    desc: 'In the year 2020, a group of like-minded tech enthusiasts founded MetricDust. With a shared passion for technology, we embarked on a journey to establish a firm that would provide innovative solutions to the ever-evolving world of information technology.',
    img: inception_1,
  },
  {
    year: '2022',
    title: 'InHouse Product Development',
    desc: 'The services provided to various clients were being widely appreciated. Simultaneously, we decided to launch a proprietary software product that would compete with the big tech company offerings in the real estate market.',
    img: inception_2,
  },
  {
    year: '2023',
    title: 'Team Expansion',
    desc: 'In 2023, we celebrated our 3rd year in the industry. The expansion of the company was necessary to accommodate the project requirements. We are now joined by 10 of our ever-growing roster of talented professionals.',
    img: inception_3,
  },
];

const AboutUs = () => {
  const navigate = useNavigate();

  return (
    <>

      <ModernHeader />

      <div 
  className="h-[100vh] bg-black text-white flex items-center justify-center relative" 
>
  {/* Background with opacity */}
  <div 
    className="absolute inset-0 bg-cover bg-center opacity-60"
    style={{ backgroundImage: 'url(/NSlider2.webp)' }}
  />
  
  {/* Content container (unchanged) */}
  <div className="relative z-10 text-center p-8 rounded-lg">
    <div className="max-w-4xl mx-auto text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-5">Tailored software solutions.</h1>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-300 mb-5">Amplifying digital experiences</h1>
      <button className="bg-gradient-to-r from-[#4961e1] to-[#22232a] hover:from-[#4961e1] hover:to-[#000000] text-white px-8 py-3 text-lg font-semibold rounded shadow-md transition-all duration-200" style={{
                  background: 'rgba(255, 255, 255, 0.2)',
                  borderRadius: '10px',
                  boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                  backdropFilter: 'blur(5px)',
                  WebkitBackdropFilter: 'blur(5px)',
                  border: '1px solid rgba(255, 255, 255, 0.3)'
                }} onClick={() => navigate('/contact-us')}>Let's Connect</button>
    </div>
  </div>
</div>


      {/* Hero Section */}
      

      {/* Vision/Mission Section */}
      

      {/* Timeline Section */}
      <section className="py-16 bg-white">
  <div className="max-w-6xl mx-auto px-4">
    <div className="relative">
      {/* Vertical center line */}
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300 z-0"></div>

      <div className="flex flex-col gap-24 relative z-10">
        {/* === Timeline Item 1 === */}
        <div className="flex flex-col md:flex-row items-center md:items-start relative">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-end pr-8">
            <img src="/about-us/inception_1.jpg" alt="Start of Startup" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 pl-8 mt-8 md:mt-0">
            {/* Year */}
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <h4 className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">2020</h4>
            </div>
            {/* Text */}
            <h3 className="text-2xl font-bold mb-2">Company Inception</h3>
            <p className="text-gray-700">
              In the year 2020, a group of like-minded tech enthusiasts founded MetricDust. With a shared passion for
              technology, we embarked on a journey to establish a firm that would provide innovative solutions to the
              ever-evolving world of information technology.
            </p>
          </div>
        </div>

        {/* === Timeline Item 2 === */}
        <div className="flex flex-col md:flex-row-reverse items-center md:items-start relative">
          {/* Right Image */}
          <div className="w-full md:w-1/2 flex justify-start pl-8">
            <img src="/about-us/inception_2.jpg" alt="Product Launch" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
          </div>

          {/* Left Content */}
          <div className="w-full md:w-1/2 pr-8 mt-8 md:mt-0">
            {/* Year */}
            <div className="flex items-center mb-4 justify-end">
              <h4 className="bg-yellow-400 text-black px-4 py-1 rounded-full text-sm font-bold">2022</h4>
              <div className="w-3 h-3 bg-yellow-400 rounded-full ml-2"></div>
            </div>
            {/* Text */}
            <h3 className="text-2xl font-bold mb-2 text-right">InHouse Product Development</h3>
            <p className="text-gray-700 text-right">
              The services provided to various clients were being widely appreciated. Simultaneously, we decided to
              launch a proprietary software product that would compete with the big tech company offerings in the real
              estate market.
            </p>
          </div>
        </div>

        {/* === Timeline Item 3 === */}
        <div className="flex flex-col md:flex-row items-center md:items-start relative">
          {/* Left Image */}
          <div className="w-full md:w-1/2 flex justify-end pr-8">
            <img src="/about-us/inception_3.jpg" alt="Team Expansion" className="w-full max-w-md h-64 object-cover rounded-lg shadow-lg" />
          </div>

          {/* Right Content */}
          <div className="w-full md:w-1/2 pl-8 mt-8 md:mt-0">
            {/* Year */}
            <div className="flex items-center mb-4">
              <div className="w-3 h-3 bg-blue-500 rounded-full mr-2"></div>
              <h4 className="bg-blue-600 text-white px-4 py-1 rounded-full text-sm font-bold">2023</h4>
            </div>
            {/* Text */}
            <h3 className="text-2xl font-bold mb-2">Team Expansion</h3>
            <p className="text-gray-700">
              In 2023, we celebrated our 3rd year in the industry. The expansion of the company was necessary to
              accommodate the project requirements. We are now joined by 10 of our ever-growing roster of talented
              professionals.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>



      {/* Team Section */}
      <section className="bg-black py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-semibold text-white mb-10">Our Team</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, idx) => (
              <div key={member.name} className="flex flex-col items-center bg-[#181a20] rounded-lg p-6 shadow">
                <img src={member.img} alt={member.name} className="w-24 h-24 rounded-full object-cover mb-4 border-4 border-[#4961e1]" />
                <h4 className="text-lg font-bold text-white mb-1">{member.name}</h4>
                <p className="text-gray-400 text-lg mb-1">{member.location}</p>
                <span className="inline-block bg-[#22232a] text-white text-xs px-3 py-1 rounded-full">Team Member</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Dream Team Section */}
      <section className="bg-[#d3d3d3] py-16 px-4">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center md:space-x-12">
          <img src={your_dream_img} alt="Dream Team" className="w-full md:w-1/2 rounded-lg shadow mb-8 md:mb-0" />
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-black mb-4">Your Dream Team of Passionate Innovators</h3>
            <p className="text-black text-lg mb-2">Building a product transcends technology. It is a commitment to deliver smart experiences by comprehending your pain points. Drive your business growth with industry best practices & future-oriented technology. We deliver solutions, best suited to your business need. The importance of your digital transformation is reflected in our promise to deliver solutions through a user-friendly approach. Partner with us to make it a reality.</p>
          </div>
        </div>
      </section>

      <ModernFooter />

    </>
  );
};

export default AboutUs; 