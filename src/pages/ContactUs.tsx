import React, { lazy, Suspense } from "react";
import ModernHeader from "@/components/ModernHeader";
import ModernFooter from "@/components/ModernFooter";
import worldMap from '/map.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';


export default function ContactUs() {
  // Remove useInView and inView logic

  return (
    <>
     
    <ModernHeader />
    <div 
        className="h-[80vh] bg-black text-white bg-cover bg-center flex items-center justify-center" 
        
      >
       <div className="flex flex-col items-center justify-center mt-20 pb-10 bg-black">
        <h2 className="text-white text-3xl font-bold mb-2 text-center">We are spread across the globe!</h2>
        <p className="text-white mb-6 text-xl text-center">Let's connect to help you build Along Intelligence.</p>
        <img src={worldMap} alt="World Map" className="w-[80%] h-[20%] object-contain" />
      </div> 
      </div>

      
      {/* <div className="p-8 bg-[#d3d3d3] mt-16 flex flex-col justify-center items-center">
        <h2 className="text-black text-3xl font-bold mb-2">We are spread across the globe!</h2>
        <p className="text-black mb-6 text-xl">Let's connect to help you build Along Intelligence.</p>
        <img src={worldMap} alt="World Map" className="max-w-full h-auto rounded-lg shadow" style={{ width: '50%', maxWidth: '900px' }} />
      </div> */}
      <div className="p-8 bg-[#d3d3d3]  grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Right: Contact Form */}
        <form className="bg-black rounded-xl shadow-lg p-6 space-y-6 border border-gray-200">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1 text-[#d3d3d3]">First Name</label>
              <input type="text" placeholder="First Name" className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#d3d3d3]">Last Name</label>
              <input type="text" placeholder="Last Name" className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#d3d3d3]">Email</label>
            <input type="email" placeholder="Email" className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500" />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#d3d3d3]">Message</label>
            <textarea placeholder="Type your message here." className="w-full border rounded-md p-3 h-32 focus:outline-none focus:ring focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full text-white py-3 bg-[#4961e1] rounded-md hover:bg-gray-900 transition">
            Send Message
          </button>
        </form>
        {/* Single Contact Card */}
        <div className="border border-gray-300 rounded-xl p-3 my-32 shadow-[0_2px_24px_0_rgba(255,255,255,0.15)] transition-transform transition-shadow duration-100 bg-[#000000] flex flex-col gap-2 justify-center items-start max-w-md mx-auto cursor-pointer transform-gpu hover:rotate-2 hover:shadow-[0_4px_32px_0_rgba(255,255,255,0.35)]" style={{ minHeight: 'unset' }}>
          <div className="flex items-center gap-3 mb-1">
            <FontAwesomeIcon icon={faEnvelope} className="text-blue-400 w-5 h-5" />
            <span className="text-white text-xl">lohith@metricdust.com</span>
          </div>
          <div className="flex items-center gap-3 mb-1">
            <FontAwesomeIcon icon={faPhone} className="text-blue-400 w-5 h-5" />
            <span className="text-white text-xl">+1 (425) 900-9663</span>
          </div>
          <div className="flex items-center gap-3">
            <FontAwesomeIcon icon={faMapMarkerAlt} className="text-blue-400 w-5 h-5" />
            <span className="text-white text-xl">2519 Baker Ave. Unit 3 Everett, WA 98201</span>
          </div>
        </div>
      </div>
      
      <ModernFooter />
    </>
  );
} 