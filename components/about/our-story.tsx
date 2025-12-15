import React from 'react';

export default function OurStory() {
  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
          Our Story
        </h2>

        <div className="space-y-12">
          {/* Timeline Item 1 */}
          <div className="flex gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                2021
              </div>
              <div className="w-1 h-24 bg-green-200 mt-4"></div>
            </div>
            <div className="pt-1 pb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">The Beginning</h3>
            <p className="text-gray-600 mb-4">
              RecrutePlatform was founded by a team of experienced HR professionals and tech entrepreneurs 
              who recognized a critical gap in the job search market. Traditional job boards were inefficient, 
              time-consuming, and failed to connect the right people with the right opportunities.
            </p>
            <p className="text-gray-600">
              Our founding team spent months researching the pain points of job seekers, 
              ultimately building a vision to transform the entire industry and make job searching better for everyone.
              </p>
            </div>
          </div>

          {/* Timeline Item 2 */}
          <div className="flex gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                2022
              </div>
              <div className="w-1 h-24 bg-green-200 mt-4"></div>
            </div>
            <div className="pt-1 pb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Beta Launch & Early Success</h3>
            <p className="text-gray-600 mb-4">
              We launched our beta version to a select group of early adopters. Within just 6 months, 
              5,000 job seekers found their ideal roles through our platform. The feedback was overwhelmingly positive, 
              and we knew we were onto something transformative.
            </p>
            <p className="text-gray-600">
              Our AI-powered matching algorithm proved to reduce job search time by 60% compared to traditional methods.
              </p>
            </div>
          </div>

          {/* Timeline Item 3 */}
          <div className="flex gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                2023
              </div>
              <div className="w-1 h-24 bg-green-200 mt-4"></div>
            </div>
            <div className="pt-1 pb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Series A Funding & Expansion</h3>
            <p className="text-gray-600 mb-4">
              We secured $25M in Series A funding from leading venture capital firms. This enabled us to 
              expand our team, improve our platform, and launch in 15 new countries across Europe, Asia, 
              and South America.
            </p>
            <p className="text-gray-600">
              By the end of 2023, over 50,000 job seekers had successfully found new roles through our platform, 
              with thousands of new job applications processed daily.
              </p>
            </div>
          </div>

          {/* Timeline Item 4 */}
          <div className="flex gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                2024
              </div>
              <div className="w-1 h-24 bg-green-200 mt-4"></div>
            </div>
            <div className="pt-1 pb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">Industry Recognition</h3>
            <p className="text-gray-600 mb-4">
              RecrutePlatform was recognized as one of the top 10 most innovative HR-Tech companies 
              and received multiple industry awards for our platform design and AI capabilities.
            </p>
            <p className="text-gray-600">
              We introduced advanced features like video interviewing, skills assessment tools, and 
              career path planning, positioning ourselves as a comprehensive job search solution.
              </p>
            </div>
          </div>

          {/* Timeline Item 5 */}
          <div className="flex gap-6 md:gap-8">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-white font-bold">
                2025
              </div>
            </div>
            <div className="pt-1">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">The Present & Your Future</h3>
            <p className="text-gray-600 mb-4">
              Today, RecrutePlatform serves 50,000+ active job seekers across 150+ countries. 
              We&apos;ve changed the lives of over 100,000 professionals who found their dream jobs through our platform.
            </p>
            <p className="text-gray-600">
              We remain committed to our mission of making job searching fairer and more accessible 
              for everyone. Your next opportunity starts here.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
