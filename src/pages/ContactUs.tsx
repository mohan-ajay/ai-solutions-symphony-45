import React, { lazy, Suspense } from "react";
import ModernHeader from "@/components/ModernHeader";
import ModernFooter from "@/components/ModernFooter";
import WorldMapDemo from "@/components/WorldMapDemo";
// const DemoOne = lazy(() => import("@/components/ContactDemo"));

export default function ContactUs() {
  // Remove useInView and inView logic

  return (
    <section className="">
      
      <div className="mt-8">
        <ModernHeader />
      </div>
      <div className="p-32 bg-[#d3d3d3]">
        <WorldMapDemo showLines={true} />
      </div>
      <div className="p-8 bg-[#000000]  grid grid-cols-1 md:grid-cols-2 gap-12">
        {/* Right: Contact Form */}
        <form className="bg-[#d3d3d3] rounded-xl shadow-lg p-6 space-y-6 border border-black">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block font-semibold mb-1 text-[#000000]">First Name</label>
              <input type="text" placeholder="First Name" className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
            <div>
              <label className="block font-semibold mb-1 text-[#000000]">Last Name</label>
              <input type="text" placeholder="Last Name" className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500" />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#000000]">Email</label>
            <input type="email" placeholder="Email" className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500" />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#000000]">Subject</label>
            <input type="text" placeholder="Subject" className="w-full border rounded-md p-3 focus:outline-none focus:ring focus:ring-blue-500" />
          </div>
          <div>
            <label className="block font-semibold mb-1 text-[#000000]">Message</label>
            <textarea placeholder="Type your message here." className="w-full border rounded-md p-3 h-32 focus:outline-none focus:ring focus:ring-blue-500"></textarea>
          </div>
          <button type="submit" className="w-full text-white py-3 bg-[#4961e1] rounded-md hover:bg-gray-900 transition">
            Send Message
          </button>
        </form>
        {/* Contact Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-start">
          {/* Real contact details with highlighted locations */}
          <div className="border border-black rounded-xl p-6 mt-16 shadow-sm hover:shadow-md transition duration-300">
            <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">Seattle</span>
            <h4 className="font-semibold text-lg mb-1 text-[#000000]">Lohith</h4>
            <p className="text-base text-[#000000]">+1 425-900-9663</p>
            <p className="text-base text-[#000000] mt-1">lohith@metricdust.com</p>
          </div>
          <div className="border border-black rounded-xl p-6 mt-16 shadow-base hover:shadow-md transition duration-300">
            <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">London</span>
            <h4 className="font-semibold text-lg mb-1 text-[#000000]">Lakshmi</h4>
            <p className="text-base text-[#000000]">+44 7748 204830</p>
            <p className="text-base text-[#000000] mt-1">lakshmi.gb@metricdust.com</p>
          </div>
          <div className="border border-black rounded-xl p-6 mb-16 shadow-base hover:shadow-md transition duration-300">
            <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">Bangalore</span>
            <h4 className="font-semibold text-lg mb-1 text-[#000000]">Satish</h4>
            <p className="text-base text-[#000000]">+91 97401 11552</p>
            <p className="text-base text-[#000000] mt-1">satish@metricdust.com</p>
          </div>
          <div className="border border-black rounded-xl p-6 mb-16 shadow-base hover:shadow-md transition duration-300">
            <span className="inline-block bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full mb-2">Germany</span>
            <h4 className="font-semibold text-lg mb-1 text-[#000000]">Srinu</h4>
            <p className="text-base text-[#000000]">+91 99725 85919</p>
            <p className="text-base text-[#000000] mt-1">srinu@metricdust.com</p>
          </div>
        </div>
      </div>
      
      <ModernFooter />
    </section>
  );
} 