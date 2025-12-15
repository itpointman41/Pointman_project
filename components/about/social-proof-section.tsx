import React from 'react';

export default function SocialProofSection() {
  const testimonials = [
    {
      name: 'Jennifer Lee',
      role: 'Software Engineer',
      company: 'Now working at DataFlow',
      testimonial: 'The platform is incredibly user-friendly. I found my dream job in just 2 weeks. The AI recommendations were spot-on!',
      rating: 5
    },
    {
      name: 'Sarah Chen',
      role: 'Career Changer',
      company: 'Recently hired at StartupXYZ',
      testimonial: 'As someone changing careers, I appreciated how the platform matches you based on skills, not just job titles. Highly recommend!',
      rating: 5
    },
    {
      name: 'Michael Torres',
      role: 'Product Manager',
      company: 'Now at InnovateTech',
      testimonial: 'RecrutePlatform simplified my job search. The personalized matches saved me hours of browsing unsuitable positions.',
      rating: 5
    },
    {
      name: 'Emma Watson',
      role: 'Marketing Specialist',
      company: 'Recently hired at BrandCo',
      testimonial: 'Best job search experience I&apos;ve had. The platform understood what I was looking for better than any recruiter.',
      rating: 5
    }
  ];

  const partners = [
    { name: 'TechCorp', industry: 'Technology' },
    { name: 'Global Finance', industry: 'Finance' },
    { name: 'Creative Studios', industry: 'Design' },
    { name: 'HealthCare Plus', industry: 'Healthcare' },
    { name: 'RetailMax', industry: 'Retail' },
    { name: 'EduLearn', industry: 'Education' }
  ];

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        {/* Testimonials */}
        <div className="mb-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              What People Say About Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Trusted by thousands of companies and job seekers worldwide
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-50 rounded-lg p-8 border-l-4 border-blue-600 shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 rounded-full bg-linear-to-br from-green-400 to-emerald-600 text-white flex items-center justify-center font-bold text-lg mr-4">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900">{testimonial.name}</h3>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <svg key={i} className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>

                <p className="text-gray-700 italic">&quot;{testimonial.testimonial}&quot;</p>
                <p className="text-sm text-gray-500 mt-3">{testimonial.company}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Where Our Members Work */}
        <div className="bg-linear-to-r from-white to-green-50 rounded-lg p-12">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-12">
            Where Our Members Find Jobs
          </h3>
          <div className="grid md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-lg bg-white shadow-md flex items-center justify-center mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
                  </svg>
                </div>
                <p className="font-semibold text-gray-900">{partner.name}</p>
                <p className="text-sm text-gray-600">{partner.industry}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Stats */}
        <div className="mt-12 grid md:grid-cols-3 gap-8">
          <div className="text-center">
            <p className="text-5xl font-bold text-green-600 mb-2">4.9/5</p>
            <p className="text-gray-600 font-semibold">Average Rating</p>
            <p className="text-sm text-gray-500">From 50,000+ job seekers</p>
          </div>
          <div className="text-center border-l border-r border-gray-200">
            <p className="text-5xl font-bold text-green-600 mb-2">100K+</p>
            <p className="text-gray-600 font-semibold">Success Stories</p>
            <p className="text-sm text-gray-500">Jobs successfully filled</p>
          </div>
          <div className="text-center">
            <p className="text-5xl font-bold text-green-600 mb-2">2 Weeks</p>
            <p className="text-gray-600 font-semibold">Avg. Time to Job</p>
            <p className="text-sm text-gray-500">From first application to offer</p>
          </div>
        </div>
      </div>
    </section>
  );
}
