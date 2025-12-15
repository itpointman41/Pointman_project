import CompanyOverview from '@/components/about/company-overview';
import MissionStatement from '@/components/about/mission-statement';
import VisionStatement from '@/components/about/vision-statement';
import CoreValues from '@/components/about/core-values';
import OurStory from '@/components/about/our-story';
import WhatMakesUsDifferent from '@/components/about/what-makes-us-different';
import AchievementsSection from '@/components/about/achievements-section';
import SocialProofSection from '@/components/about/social-proof-section';
import CallToActionSection from '@/components/about/call-to-action-section';
import ContactShortSection from '@/components/about/contact-short-section';

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-r from-green-600 to-emerald-700 text-white py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6">About RecrutePlatform</h1>
          <p className="text-xl opacity-90">
            Revolutionizing recruitment through innovation, integrity, and impact
          </p>
        </div>
      </section>

      {/* All Component Sections */}
      <CompanyOverview />
      <MissionStatement />
      <VisionStatement />
      <CoreValues />
      <OurStory />
      <WhatMakesUsDifferent />
      <AchievementsSection />
      <SocialProofSection />
      <CallToActionSection />
      <ContactShortSection />
    </main>
  );
}
