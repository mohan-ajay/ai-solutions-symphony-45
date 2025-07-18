import React from 'react';
import image_1 from '/reflects/image_1.jpg'
import image_2 from '/reflects/image_2.jpg'
import image_3 from '/reflects/image_3.jpg'
import image_4 from '/reflects/image_4.jpg'
import image_5 from '/reflects/image_5.jpeg'
import image_6 from '/reflects/image_6.jpg'
import image_7 from '/reflects/image_7.jpg'
import image_8 from '/reflects/image_8.jpg'
import image_9 from '/reflects/image_9.jpg'
import image_10 from '/reflects/image_10.jpg'
import image_11 from '/reflects/image_11.jpg'
import image_12 from '/reflects/image_12.png'
import ModernHeader from '@/components/ModernHeader';
import ModernFooter from '@/components/ModernFooter';


const cards = [
  {
    image: image_1,
    title: 'Invitation for 4th Edition of MetricTalks - RSVP Now',
    desc: 'Mark your calendars because we bring to you the 4th edition of MetricTalks on The Yield Crisis: Can AI Improve Soil Health Management for Farmers? on 24 May, 2025 at 4:00 P.M. IST',
    date: 'May 16, 2025',
    author: 'Satish A G',
    tag: 'Announcement',
  },
  {
    image: image_2,
    title: 'How Can AI enable AgriTech & Revolutionize Soil Health Management?',
    desc: 'The global population shows no sign of stopping or slowing down and this intensifies the pressure on farmers to produce more crops and level up.',
    date: 'May 12, 2025',
    author: 'Anjali Burman',
    tag: 'Blog',
  },
  {
    image: image_3,
    title: 'Watch 3rd Edition of MetricTalks',
    desc: 'MetricDust hosted the third edition of MetricTalks on Local AI Assistants: A workshop on Integrating Multi AI Locally. It was successfully concluded on 8th March, 2025. In case you missed it, you can watch it now',
    date: 'Mar 15, 2025',
    author: 'Satish A G',
    tag: 'MetricTalks',
  },
  {
    image: image_4,
    title: 'Invitation for 3rd Edition of MetricTalks - RSVP Now',
    desc: 'Mark your calendars because we bring to you the 3rd edition of MetricTalks on Local AI Assistants: Integrating Multi-AI Locally on 8th March, 2025 at 10:00 A.M. IST/ 8:30 PST',
    date: 'Feb 25, 2025',
    author: 'Satish A G',
    tag: 'Announcement',
  },
  {
    image: image_5,
    title: 'Micro Frontends: The Perfect Solution for Building SaaS Platforms',
    desc: 'Micro Frontend architecture offers a modern solution to these challenges by adopting a “divide and develop” approach which is perfect for SaaS platforms development',
    date: 'Nov 12, 2024',
    author: 'Vivek V Pai',
    tag: 'Tech',
  },
  {
    image: image_6,
    title: 'Role of AIML in Deepfake Attacks',
    desc: 'With the growth and development of AI/ML, this article aims to delve deeper into the role of AI/ML in these cybercrimes and how can we amalgamate AI/ML with cybersecurity to counter & minimize falling prey to it.',
    date: 'Oct 22, 2024',
    author: 'Anjali Kumari',
    tag: 'Tech',
  },
  {
    image: image_7,
    title: 'Watch 2nd Edition of MetricTalks',
    desc: 'CX Enhancement through AI. Workshop on Integrating Multi AI Locally. It was successfully concluded on 30th Sep, 2024.',
    date: 'Sep 30, 2024',
    author: 'Satish A G',
    tag: 'Announcement',
  },
  {
    image: image_8,
    title: 'Featured in Sampada Magazine',
    desc: 'MetricDust was featured in Sampada Magazine for its innovative approach in the tech industry.',
    date: 'Aug 20, 2024',
    author: 'Anjali Kumari',
    tag: 'Blog',
  },
  {
    image: image_9,
    title: 'Rise of Quantum Computing and its use',
    desc: 'Quantum computing is revolutionizing the tech industry. Learn how it is being used in various sectors.',
    date: 'July 28, 2024',
    author: 'Anjali Kumari',
    tag: 'Tech',
  },
  {
    image: image_10,
    title: 'Watch 1st Edition of MetricTalks',
    desc: 'The first edition of MetricTalks by MetricDust successfully concluded on 6th July, 2024. With more than 50-60 participants listening to our esteemed speakers sharing their views and experiences on the AI impact',
    date: 'July 15, 2024',
    author: 'Satish A G',
    tag: 'Announcement',
  },
  {
    image: image_11,
    title: 'MetricTalks | Webinar on AI & Ethics: The Impact of GenAI across domains',
    desc: "The first edition of MetricTalks is here! We're organizing a special live webinar on GenAI & its impact across various domains, with some amazing speakers on 6th July, 2024",
    date: 'july 5, 2024',
    author: 'Bhagyalakshmi G',
    tag: 'Announcement',
  },
  {
    image: image_12,
    title: 'What is AI-powered Automation? Its Implementation and Benefits',
    desc: 'mpact of AI-powered automation on businesses and industries. Know how artificial intelligence is revolutionizing processes, improving efficiency, and driving innovation in the modern world.',
    date: 'June 12, 2024',
    author: 'Anjali Kumari',
    tag: 'Blog',
  },
];

const Reflects = () => {
  return (
    <>
    

      <ModernHeader />

      <div 
        className="h-[100vh]  bg-black text-white bg-cover bg-center flex items-center justify-center" 
        style={{ backgroundImage: 'url(/NSlider2.webp)' }}
      >
        <div className="text-center p-8 rounded-lg">
          <div className="max-w-4xl mx-auto text-center">
            {/* Place your hero content here, or keep existing content */}
            {/* Example: */}
            
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Tech News, industry insights, knowledge base & more...</h1>
            {/* Add any buttons or links as needed */}
          </div>
        </div>
      </div>
    <div className="min-h-screen bg-[#d3d3d3] py-12 px-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {cards.map((card, idx) => (
          <div key={idx} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col h-full">
            <img src={card.image} alt={card.title} className="w-full h-50 object-full" />
            <div className="p-5 flex flex-col flex-1">
              <div className="flex items-center gap-2 mb-2">
                <span className={`text-sm font-normal px-2 py-1 rounded ${card.tag === 'Announcement' ? 'bg-green-200 text-green-800' : card.tag === 'Tech' ? 'bg-blue-200 text-blue-800' : 'bg-gray-200 text-gray-800'}`}>{card.tag}</span>
                <span className="text-base text-gray-500 flex items-center gap-1"><span role="img" aria-label="calendar">📅</span> {card.date}</span>
                <span className="text-base text-gray-500 flex items-center gap-1"><span role="img" aria-label="author">👤</span> {card.author}</span>
              </div>
              <h2 className="text-2xl font-bold text-gray-900 mb-2 line-clamp-2">{card.title}</h2>
              <p className="text-black text-base mb-4 flex-1 line-clamp-3">{card.desc}</p>
              <button className="mt-auto bg-[#4961e1] text-white px-4 py-2 rounded hover:bg-gray-800 transition-colors w-fit self-start">Read More</button>
            </div>
          </div>
        ))}
      </div>
    </div>
    <ModernFooter />
    </>
  );
};

export default Reflects; 