'use server'

import { client } from "@/sanity/client";
const options = { next: { revalidate: 30 } };

export async function fetchAllEvents() {
    try {
        const query = `*[_type == "event"]{
            ...,
            organizer-> {
            name,
            slug,
            bio,
            image
            }
        }`;
        const events = await client.fetch(query);
        return events;
    } catch (error) {
        console.error('Error fetching events:', error);
        throw new Error('Could not fetch events');
    }
}

export async function fetchEventBySlug(params: Promise<{ slug: string }>) {
    try {
        const par = await params;
        console.log(par);
        
        const query = `*[_type == "event" && slug.current == $slug][0]{
            ...,
            mainImage{asset->{url}},
            organizer-> {
            name,
            slug,
            bio,
            image
            }
        }`;
        const event = await client.fetch(query, { slug: par.slug }, options);
        return event;
    } catch (error) {
        console.error('Error fetching event by slug:', error);
        throw new Error('Could not fetch event');
    }
}