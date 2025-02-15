import { fetchEventBySlug } from "@/actions/event";
import EventItem from "@/components/Events/EventItem";
import type { Metadata } from 'next'
 
 
export async function generateMetadata(
  { params }: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  // read route params
  const event = await fetchEventBySlug(params);
 
 
  return {
    title: event.title,
    description: "Explore new adventures in Orange County, CA. Browse through various events and get to know about Orange County from our blogs.",
  }
}

export default async function page({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }){
    const event = await fetchEventBySlug(params);
    return(
        <div className="mt-16 p-3 md:p-10">
            <EventItem event={event} />
        </div>
    )
}