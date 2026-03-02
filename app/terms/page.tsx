import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Terms of Service | Heena",
    description: "Terms of service for theheena.com — terms governing use of our website and services.",
};

export default function TermsPage() {
    return (
        <main className="section-light min-h-screen py-28 px-6 md:px-12">
            <div className="max-w-[720px] mx-auto">
                <Link href="/" className="font-sans text-sm text-terracotta hover:underline mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="font-display font-bold text-4xl text-charcoal mb-8">Terms of Service</h1>

                <div className="prose prose-lg font-sans text-charcoal/80 leading-relaxed space-y-6">
                    <p><strong>Last Updated:</strong> March 2026</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">1. Services</h2>
                    <p>Heena provides image consulting, personal styling, and professional presence training services. All consultations are subject to availability and scheduling confirmation.</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">2. Booking & Cancellation</h2>
                    <p>Consultations must be booked through our website or by direct contact. Cancellations made less than 24 hours before a scheduled session may be subject to a cancellation fee.</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">3. Intellectual Property</h2>
                    <p>All content on this website — including text, images, designs, and logos — is the property of Heena and may not be reproduced without written permission.</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">4. Limitation of Liability</h2>
                    <p>Heena provides image consulting advice in good faith. Results may vary based on individual circumstances. We are not liable for outcomes resulting from the application of our advice.</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">5. Governing Law</h2>
                    <p>These terms are governed by the laws of India. Any disputes shall be resolved in the courts of New Delhi.</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">6. Contact</h2>
                    <p>For questions about these terms, please email us at <a href="mailto:hello@theheena.com" className="text-terracotta hover:underline">hello@theheena.com</a>.</p>
                </div>
            </div>
        </main>
    );
}
