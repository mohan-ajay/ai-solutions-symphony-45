import React from "react";

const ThirdWebinar = () => {
    return (
        <div>
            <div className="pb-0 pt-0" id="content">
  <div id="top"></div>

  <section className="mt-16">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-5 items-center">
        <div className="w-full lg:w-6/12 px-5">
          <div className="text-sm font-medium text-blue-500 mb-3 animate-fade-in-up">Latest News</div>
          <h2 className="text-3xl md:text-4xl font-bold mb-5 animate-fade-in-up" style={{animationDelay: '0.2s'}}>
            Invitation for 3rd Edition of MetricTalks
          </h2>
          <ul className="flex space-x-2 text-sm mb-4">
            <li>
              <a href="../index.html" className="text-gray-600 hover:text-blue-500">Home</a>
            </li>
            <li className="text-gray-400">/</li>
            <li className="text-blue-500">Reflect</li>
          </ul>
          <div className="h-8"></div>
        </div>

        <div className="w-full lg:w-6/12 px-5">
          <img 
            src="../news/metrictalks_webinar3.jpg" 
            className="w-full rounded-3xl shadow-md" 
            alt="MetricTalks 3rd Edition"
          />
        </div>
      </div>
    </div>
  </section>

  <section className="pt-0">
    <div className="container mx-auto px-4">
      <div className="flex flex-wrap -mx-5">
        <div className="w-full lg:w-8/12 px-5">
          <div className="blog-read">
            <div className="post-text mb-8">
              <h3 className="text-2xl font-bold mb-4">Welcome</h3>
              <p className="mb-4">Mark your calendars because we bring to you the 3rd edition of MetricTalks on</p>
              <h5 className="text-lg font-bold my-3">Local AI Assistants: Integrating Multi-AI Locally</h5>
              <p className="mb-4">
                <i className="fa fa-calendar mr-2" aria-hidden="true"></i> 8 March, 2025 at<br />
                <i className="fa fa-clock-o mr-2" aria-hidden="true"></i> 10:00AM IST/ 8:30PM PST.
              </p>
              <p className="mb-4">Join our innovators & speakers Vivek & Rahul as they take you through the
                challenges of AI on cloud like data privacy, internet dependency, and
                inaccessibility of multiple AI.</p>
              <p className="mb-4">We'll discuss:<br />
                - How to integrate AI models on your own machine <br />
                and<br />
                - Why local AI is the key to privacy, efficiency, and independence</p>
              <p className="mb-4">We invite all developers, industry veterans & entrepreneurs to join us as we
                explore this aspect of taking AI into your own hands. Use the link given to
                register & confirm your presence.</p>
              <p className="mb-6">RSVP and book your slot now!!</p>
              <p className="text-right">- Satish A G, CoFounder <a
                  href="https://www.linkedin.com/in/satish-ag/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-500 hover:underline ml-2"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </p>
              <iframe
                src="https://docs.google.com/forms/d/e/1FAIpQLSdXr3Ppf5pusTO1f_Vf3RyxGbgcxcKRDP37ZBTdrNwbMy5RBQ/viewform?embedded=true"
                width="100%" 
                height="1380" 
                className="border-0"
                title="Registration Form"
              >
                Loading…
              </iframe>
            </div>
          </div>

          <div className="h-8"></div>
        </div>

        <div className="w-full lg:w-4/12 px-5">
          <div className="widget widget-post mb-8">
            <h4 className="text-xl font-bold mb-4">Recent Posts</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <a href="aiml_deepfake_attacks.html">
                    <img
                      src="../news/aiml_deefake_attacks.jpg" 
                      alt="Role of AIML in Deepfake Attacks"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </a>
                </div>
                <div className="flex-grow">
                  <a href="aiml_deepfake_attacks.html" className="hover:text-blue-500">
                    <h4 className="font-medium text-base">Role of AIML in Deepfake Attacks</h4>
                  </a>
                  <div className="text-sm text-gray-500 mt-1">Oct 22, 2024</div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <a href="metrictalks-2nd_webinar.html">
                    <img
                      src="../news/metrictalks_webinar2.jpg" 
                      alt="2nd Edition of MetricTalks"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </a>
                </div>
                <div className="flex-grow">
                  <a href="metrictalks-2nd_webinar.html" className="hover:text-blue-500">
                    <h4 className="font-medium text-base">Watch 2nd Edition of MetricTalks</h4>
                  </a>
                  <div className="text-sm text-gray-500 mt-1">Sep 30, 2024</div>
                </div>
              </li>
              <li className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <a href="sampada-magazine-feature.html">
                    <img
                      src="../news/sampada_magazine_feature.jpg" 
                      alt="Featured in Sampada Magazine"
                      className="w-20 h-20 object-cover rounded-lg"
                    />
                  </a>
                </div>
                <div className="flex-grow">
                  <a href="sampada-magazine-feature.html" className="hover:text-blue-500">
                    <h4 className="font-medium text-base">Featured in Sampada Magazine</h4>
                  </a>
                  <div className="text-sm text-gray-500 mt-1">Aug 20, 2024</div>
                </div>
              </li>
            </ul>
          </div>

          <div className="widget widget_tags">
            <h4 className="text-xl font-bold mb-4">Popular Tags</h4>
            <ul className="flex flex-wrap gap-2">
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=ai" className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">AI</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=artificial intelligence" className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Artificial Intelligence Agents</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=genai" className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">GenAI</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=ai & fmcg" className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">FMCG</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=ai & bfsi" className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">BFSI</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=webinar on ai" className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Webinar on AI</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=ai & banking" className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Banking</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=ai & branding" className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Branding and Marketing Analytics</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=ai & healthcare" className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Healthcare</a></li>
              <li><a target="_blank" rel="noopener noreferrer" href="https://www.google.com/search?q=machine learning" className="inline-block px-3 py-1 bg-gray-100 hover:bg-gray-200 rounded-full text-sm">Machine Learning (ML)</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</div>
        </div>
    )
}   

export default ThirdWebinar