import { Metadata } from "next";
import BookPageClient from "./BookPageClient";

export const metadata: Metadata = {
    title: "Book a Styling Consultation | Image Consultant India | The Heena",
    description: "Ready for your style evolution? Schedule a one-on-one virtual or in-person styling consultation today and step into your best self.",
    alternates: {
        canonical: "https://theheena-redesign.vercel.app/book",
    },
}

export default function BookPage() {
    return <BookPageClient />
}
