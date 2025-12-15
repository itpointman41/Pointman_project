import React from 'react'
import ContactHeader from '@/components/contact/contact-header'
import ContactInformation from '@/components/contact/contact-information'
import ContactForm from '@/components/contact/contact-form'
import MapSection from '@/components/contact/map-section'
import FAQSection from '@/components/contact/faq-section'
import SupportOptions from '@/components/contact/support-options'
import SocialMediaSection from '@/components/contact/social-media-section'
import ContactCallToAction from '@/components/contact/call-to-action-section'

export default function ContactPage() {
	return (
		<main className="min-h-screen bg-gray-50">
			<ContactHeader />
			<ContactInformation />
			<div className="max-w-6xl mx-auto px-6">
				<ContactForm />
			</div>
			<MapSection />
			<FAQSection />
			<SupportOptions />
			<SocialMediaSection />
			<ContactCallToAction />
		</main>
	)
}
