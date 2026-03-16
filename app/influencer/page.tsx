import { Metadata } from 'next';
import InfluencerPageClient from './InfluencerPageClient';

export const metadata: Metadata = {
    title: 'Instagram Influencer & Brand Collaborations | The Heena',
    description: 'Discover Heena\'s digital influence, viral style reels, and premium brand collaborations as India\'s top personal styling influencer on Instagram.',
    alternates: {
        canonical: "https://theheena-redesign.vercel.app/influencer",
    },
};

export default function InfluencerPage() {
    return <InfluencerPageClient />;
}
