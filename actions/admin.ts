'use server'

import { client } from "@/sanity/client";
import { type SanityDocument } from "next-sanity";
const options = { next: { revalidate: 30 } };
export interface EventsOfOrganizer{
    upcoming: SanityDocument[];
    current: SanityDocument[];
    past:SanityDocument[];
}
export async function fetchOrganizer(params: Promise<{ slug: string }>) {
    const query = `*[_type == "organizer" && slug.current == $slug][0]{..., image{asset->{url}}}`;
    const organizer = await client.fetch(query, await params, options);
    return organizer;
}

export async function fetchEventsByOrganizer(params: Promise<{ slug: string }>) {
    const query = `*[_type == "event" && references(*[_type == "organizer" && slug.current == $slug]._id)]`;
    const events = await client.fetch(query, await params, options);

    const now = new Date();
    const categorizedEvents:EventsOfOrganizer = {
        upcoming: [],
        current: [],
        past: []
    };

    events.forEach((event:SanityDocument) => {
        const startDate = new Date(event.startDate);
        const endDate = new Date(event.endDate);

        if (endDate < now) {
            categorizedEvents.past.push(event);
        } else if (startDate > now) {
            categorizedEvents.upcoming.push(event);
        } else {
            categorizedEvents.current.push(event);
        }
    });

    return categorizedEvents;
}