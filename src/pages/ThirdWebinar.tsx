import React from "react";

const ThirdWebinar = () => {
    return (
        <div>
            <div className="content">
  <div id="top"></div>

  <section className="mt-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap items-center -mx-4">
        <div className="w-full lg:w-1/2 px-4">
          <div className="text-sm font-medium text-gray-500 mb-3 animate-fade-in-up">Latest News</div>
          <h2 className="text-3xl font-bold mb-5 animate-fade-in-up" style={{animationDelay: '0.2s'}}>Watch 3rd Edition of MetricTalks</h2>
          <div className="flex text-sm text-gray-600">
            <a href="../index.html" className="hover:text-blue-500">Home</a>
            <span className="mx-2">/</span>
            <span className="text-blue-500">Reflect</span>
          </div>
          <div className="h-8"></div>
        </div>

        <div className="w-full lg:w-1/2 px-4">
          <img src="../news/metrictalks_workshop3.jpg" className="w-full rounded-3xl shadow-md" alt="MetricTalks Workshop" />
        </div>
      </div>
    </div>
  </section>

  <section>
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-4">
        <div className="w-full lg:w-2/3 px-4">
          <div className="blog-read">
            <div className="post-text">
              <h3 className="text-2xl font-bold mb-4">Welcome</h3>
              <p className="mb-4">MetricDust hosted the third edition of MetricTalks on Local AI Assistants: A workshop on Integrating multi AI Locally. It was succesfully concluded on 8th March, 2025. We thank everyone who took out their time for this session.</p>
              <p className="mb-4">At the helm of this workshop were our innovators, Rahul & Vivek who took us through a step by step of building a local AI assistant of your own. This is what Vivek & Rahul had to say respectively.</p>
              <p className="italic mb-4">"We designed the Local AI Assistant's backend with Django as the core framework, integrating Ollama as the local AI engine to eliminate cloud dependencies. When a user submits a request, Django routes it to Ollama, which processes the input using a locally stored LLM and returns the response in real time. This architecture ensures fast, private, and fully controlled AI interactions without relying on external servers."</p>
              <p className="text-right mb-6">Rahul <a href="https://www.linkedin.com/in/rahulsamala/" target="_blank" className="ml-2 text-blue-500 hover:text-blue-700"><i className="fab fa-linkedin"></i></a></p>
              <p className="italic mb-4">"As a frontend developer, my goal with LocAi was simple—I wanted a single-page platform where I could seamlessly switch between multiple locally installed LLMs without juggling multiple tabs. Most online AI services come with frustrating limitations like usage caps, time restrictions, or paid subscriptions. By integrating Ollama, I built a solution that runs entirely on my system, giving me full control, unlimited access, and a smooth, uninterrupted AI experience—without extra costs."</p>
              <p className="text-right mb-6">Vivek <a href="https://www.linkedin.com/in/vivek-v-pai/" target="_blank" className="ml-2 text-blue-500 hover:text-blue-700"><i className="fab fa-linkedin"></i></a></p>
              <p className="mb-4">Any of you who missed being there, we've got you covered. Watch the complete session</p>
              <div className="aspect-w-16 aspect-h-9 mb-6">
                <iframe className="w-full h-96 rounded-lg" src="https://www.youtube.com/embed/Cb_7Jkgw2CY?si=T24Bkht-JYMACHvx" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
              </div>
              <p className="mb-4">You can access the our Git code to build your Local AI here:
                <a href="https://github.com/MetricDust/LocalAI" target="_blank" className="text-blue-500 hover:underline">https://github.com/MetricDust/LocalAI</a>
                Our key takeaway was that you need not be dependent on a stable internet connection or AI cloud servers to take AI into your own hands.
              </p>
              <p className="mb-4">We are immensely proud of our team whose dedication made this workshop a success, and we look forward to seeing you at future sessions that are equally interactive, informative, and engaging. Follow us on our <a href="https://www.linkedin.com/company/metricdust" target="_blank" className="text-blue-500 hover:underline">LinkedIn page</a> to get more updates regularly. Feel free to let us know on what would you like us to take up as the next topic for webinar</p>
              <p className="text-right">- Satish A G, CoFounder <a href="https://www.linkedin.com/in/satish-ag/" target="_blank" className="ml-2 text-blue-500 hover:text-blue-700"><i className="fab fa-linkedin"></i></a></p>
            </div>
          </div>

          <div className="h-8"></div>
        </div>

        <div className="w-full lg:w-1/3 px-4">
          <div className="widget mb-8">
            <h4 className="text-xl font-bold mb-4">Recent Posts</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <a href="microfrontends-perfect_for_saas.html"><img src="../news/microFrontend_1.JPG" alt="" className="w-20 h-20 object-cover rounded" /></a>
                </div>
                <div>
                  <a href="microfrontends-perfect_for_saas.html" className="hover:text-blue-500">
                    <h4 className="font-medium">Micro Frontends: The Perfect Solution for Building SaaS Platforms</h4>
                  </a>
                  <div className="text-sm text-gray-500">Nov 12, 2024</div>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <a href="aiml_deepfake_attacks.html"><img src="../news/aiml_deefake_attacks.jpg" alt="" className="w-20 h-20 object-cover rounded" /></a>
                </div>
                <div>
                  <a href="aiml_deepfake_attacks.html" className="hover:text-blue-500">
                    <h4 className="font-medium">The role of AI/ML in deepfake attacks</h4>
                  </a>
                  <div className="text-sm text-gray-500">Oct 22, 2024</div>
                </div>
              </li>

              <li className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <a href="metrictalks-2nd_webinar.html"><img src="../news/metrictalks_webinar2.jpg" alt="" className="w-20 h-20 object-cover rounded" /></a>
                </div>
                <div>
                  <a href="metrictalks-2nd_webinar.html" className="hover:text-blue-500">
                    <h4 className="font-medium">Watch 2nd Edition of MetricTalks</h4>
                  </a>
                  <div className="text-sm text-gray-500">Sep 30, 2024</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="widget">
            <h4 className="text-xl font-bold mb-4">Popular Tags</h4>
            <div className="flex flex-wrap gap-2">
              <a target="_blank" href="https://www.google.com/search?q=ai" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">AI</a>
              <a target="_blank" href="https://www.google.com/search?q=artificial intelligence" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">Artificial Intelligence Agents</a>
              <a target="_blank" href="https://www.google.com/search?q=genai" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">GenAI</a>
              <a target="_blank" href="https://www.google.com/search?q=local ai assistants" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">Local AI Assistants</a>
              <a target="_blank" href="https://www.google.com/search?q=ai & bfsi" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">BFSI</a>
              <a target="_blank" href="https://www.google.com/search?q=webinar on ai" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">Webinar on AI</a>
              <a target="_blank" href="https://www.google.com/search?q=ai & banking" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">Banking</a>
              <a target="_blank" href="https://www.google.com/search?q=ai & branding" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">Branding and Marketing Analytics</a>
              <a target="_blank" href="https://www.google.com/search?q=ai & healthcare" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">Healthcare</a>
              <a target="_blank" href="https://www.google.com/search?q=machine learning" className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm hover:bg-gray-200">Machine Learning (ML)</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
        </div>
    )
}

export default ThirdWebinar;