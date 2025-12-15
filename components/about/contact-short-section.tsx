import React from 'react';

export default function ContactShortSection() {
  return (
    <section className="py-12 px-4 sm:px-6 lg:px-8 bg-gray-50 border-t border-gray-200">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-4 gap-8">
          {/* General Inquiries */}
          <div className="text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Email Us</h3>
            <a href="mailto:hello@recruteplatform.com" className="text-green-600 hover:underline text-sm">
              hello@recruteplatform.com
            </a>
          </div>

          {/* Support */}
          <div className="text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.172l3.536 3.536c.195.195.45.293.707.293a1 1 0 001.414-1.414L9.172 9.172m0 5.656l-7.778 7.778a2 2 0 11-2.828-2.828l7.778-7.778m2.172-2.172l5.656-5.656a2 2 0 112.828 2.828l-5.656 5.656m2.172 2.172l7.778 7.778a2 2 0 01-2.828 2.828l-7.778-7.778" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Support</h3>
            <a href="#" className="text-green-600 hover:underline text-sm">
              support@recruteplatform.com
            </a>
          </div>

          {/* Phone */}
          <div className="text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 00.948.684l1.498 7.487a1 1 0 00.502.756l2.048 1.029c.393-.337.808-.63 1.238-.868l-2.048-1.029a1 1 0 00-.502-.756L9.117 5.684a1 1 0 00-.948-.684H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2h-3.28a1 1 0 00-.948.684l-1.498 7.487a1 1 0 00-.502.756l-2.048 1.029c.43.238.845.531 1.238.868l2.048-1.029a1 1 0 00.502-.756l1.498-7.487a1 1 0 00.948-.684H19a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Call Us</h3>
            <a href="tel:+1234567890" className="text-green-600 hover:underline text-sm">
              +1 (555) 123-4567
            </a>
          </div>

          {/* Social Media */}
          <div className="text-center">
            <div className="inline-block p-4 bg-green-100 rounded-full mb-4">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-bold text-gray-900 mb-2">Follow Us</h3>
            <div className="flex justify-center gap-3">
              <a href="#" className="text-green-600 hover:text-green-800" title="LinkedIn">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" /></svg>
              </a>
              <a href="#" className="text-green-600 hover:text-green-800" title="Twitter">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7s1.1 1.5 1.1 3.3" /></svg>
              </a>
              <a href="#" className="text-green-600 hover:text-green-800" title="Facebook">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18 2h-3a6 6 0 00-6 6v3H7v4h2v8h4v-8h3l1-4h-4V8a1 1 0 011-1h3z" /></svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-300 text-center text-gray-600 text-sm">
          <p>
            Response time: Usually within 24 hours during business hours (Monday-Friday, 9:30AM-6:30PM EST)
          </p>
        </div>
      </div>
    </section>
  );
}
