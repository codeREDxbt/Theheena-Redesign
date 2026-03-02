import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
    title: "Privacy Policy | Heena",
    description: "Privacy policy for theheena.com — how we collect, use, and protect your data.",
};

export default function PrivacyPage() {
    return (
        <main className="section-light min-h-screen py-28 px-6 md:px-12">
            <div className="max-w-[720px] mx-auto">
                <Link href="/" className="font-sans text-sm text-terracotta hover:underline mb-8 inline-block">
                    ← Back to Home
                </Link>

                <h1 className="font-display font-bold text-4xl text-charcoal mb-8">Privacy Policy</h1>

                <div className="prose prose-lg font-sans text-charcoal/80 leading-relaxed space-y-6">
                    <p><strong>Last Updated:</strong> March 2026</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">1. Information We Collect</h2>
                    <p>When you book a consultation or contact us, we may collect your name, email address, phone number, and any information you provide in your message. We do not collect data automatically unless you interact with our contact forms.</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">2. How We Use Your Information</h2>
                    <p>We use your information to respond to inquiries, schedule consultations, and provide our image consulting services. We do not sell, rent, or share your personal data with third parties for marketing purposes.</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">3. Data Security</h2>
                    <p>We implement appropriate security measures to protect your personal information against unauthorized access, alteration, or disclosure.</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">4. Cookies</h2>
                    <p>Our website may use essential cookies to ensure proper functionality. We do not use tracking or advertising cookies.</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">5. Your Rights</h2>
                    <p>You have the right to access, correct, or delete your personal data. To exercise these rights, contact us at hello@theheena.com.</p>

                    <h2 className="font-display text-2xl font-semibold text-charcoal mt-8">6. Contact</h2>
                    <p>If you have questions about this policy, please email us at <a href="mailto:hello@theheena.com" className="text-terracotta hover:underline">hello@theheena.com</a>.</p>
                </div>
            </div>
        </main>
    );
}
