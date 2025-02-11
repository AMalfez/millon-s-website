import { fetchEventsByOrganizer, fetchOrganizer } from "@/actions/admin";
import Admin from "@/components/Admin/Admin";

export default async function page({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }) {
    const organizer = await fetchOrganizer(params);
    const events_by_org = await fetchEventsByOrganizer(params);
    
    return(
        <div className="mt-16 py-20 px-4">
            <Admin organizer={organizer} events={events_by_org} />
        </div>
    )
}