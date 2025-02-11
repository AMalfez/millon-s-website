import { fetchEventBySlug } from "@/actions/event";
import EventItem from "@/components/Events/EventItem";

export default async function page({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }){
    const resolvedParams = await params;
    const event = await fetchEventBySlug(params);
    return(
        <div className="mt-16 p-3 md:p-10">
            <EventItem event={event} />
        </div>
    )
}