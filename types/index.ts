/** Type definitions for static data files.
 *  Each interface maps directly to its corresponding JSON file in /data/.
 */

export interface ClientLogo {
    name: string;
    logoSrc: string;   // path under /public/images/clients/
    url?: string;
}

export interface ClientRegion {
    region: "Abu Dhabi" | "India" | "Singapore";
    clients: ClientLogo[];
}

export interface StatItem {
    value: string;   // e.g. "8391+"
    label: string;   // e.g. "GROUP SESSION MEMBERS"
}

export interface InfluencerPost {
    brand: string;
    description: string;
    hashtags: string[];
    likeCount: number;
    imageSrc: string;            // path under /public/images/influencer/
    instagramPostId?: string;    // Instagram shortcode for embed
    instagramType?: "reel" | "post";
}

export interface VideoTestimonial {
    name: string;
    role: string;
    label: string;       // "Testimonial" | "Demo" etc.
    videoId: string;       // YouTube video ID
}

export interface ServiceItem {
    title: string;
    descriptor: string;
    iconName: string;    // maps to a component in /components/icons/
    order: number;
}
