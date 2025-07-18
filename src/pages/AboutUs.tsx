import React from 'react';
import ModernHeader from '../components/ModernHeader';
import ModernFooter from '../components/ModernFooter';
import inception_1 from '/about-us/inception_1.jpg'
import inception_2 from '/about-us/inception_2.jpg'
import inception_3 from '/about-us/inception_3.jpg'
import lohith_img from '/about-us/Lohith_img.png'
import satish_img from '/about-us/Satish_img.png'
import lakshmi_img from '/about-us/Lakshmi_img.png'
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
    img: '/team/placeholder.png',
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
        className="h-[100vh] bg-black text-white bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: 'url(/NSlider2.webp)' }}
      >
        <div className=" text-center p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">With a customer-centric approach, we transform and amplify your digital presence.</h1>
            <p className="text-3xl text-gray-300 mb-8">Our products help you enhance ease of accessibility and streamline your operations. Our multi-domain expertise and purpose-driven technology drives your business growth.</p>
            <button className="bg-gradient-to-r from-[#4961e1] to-[#22232a] hover:from-[#4961e1] hover:to-[#000000] text-white px-8 py-3 text-lg font-semibold rounded shadow-md transition-all duration-200" onClick={() => navigate('/contact-us')}>Let's Connect</button>
          </div>
        </div>
      </div>


      {/* Hero Section */}
      

      {/* Vision/Mission Section */}
      

      {/* Timeline Section */}
      <section className="bg-[#d3d3d3] py-16 px-4">
        <div className="max-w-5xl mx-auto relative">
          {/* Vertical line */}
          <div className="hidden md:block absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-yellow-400 z-0" style={{ transform: 'translateX(-50%)' }} />
          <div className="flex flex-col gap-24 relative z-10">
            {timeline.map((item) => (
              <div key={item.year} className="flex flex-row items-center w-full relative">
                {/* Image left */}
                <div className="w-1/2 flex justify-end pr-8">
                  <img src={item.img} alt={item.title} className="w-full max-w-md h-48 object-cover rounded-lg shadow-lg border-4 border-white" />
                </div>
                {/* Timeline center */}
                <div className="flex flex-col items-center w-0 relative z-10">
                  {/* Vertical line (already present globally, but for mobile fallback) */}
                  <span className="absolute left-1/2 top-0 h-full w-1 bg-gradient-to-b from-blue-500 via-blue-400 to-yellow-400 z-0" style={{ transform: 'translateX(-50%)' }} />
                  {/* Year and dot */}
                  <div className="flex items-center justify-center h-20 z-10">
                    <span className={`px-6 py-2 rounded-full text-lg font-bold shadow ${item.year === '2022' ? 'bg-yellow-400 text-black' : 'bg-blue-700 text-white'}`}>{item.year}</span>
                    <span className={`-ml-3 w-6 h-6 rounded-full border-4 ${item.year === '2022' ? 'border-yellow-400 bg-white' : 'border-blue-500 bg-white'} flex items-center justify-center z-20`} />
                  </div>
                </div>
                {/* Content right */}
                <div className="w-1/2 flex flex-col justify-center items-start pl-8">
                  <h3 className="text-2xl font-bold text-black mb-2">{item.title}</h3>
                  <p className="text-black text-lg max-w-md">{item.desc}</p>
                </div>
              </div>
            ))}
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