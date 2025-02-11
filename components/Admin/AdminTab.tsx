"use client";
import { EventsOfOrganizer } from "@/actions/admin";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardElement, CardElementHorizontal } from "../Events/Card";
import { type SanityDocument } from "next-sanity";

function AdminTab({ events }: { events: EventsOfOrganizer }) {
  return (
    <Tabs defaultValue="current_events" className="w-full">
      <TabsList>
        <TabsTrigger value="current_events">Current Events</TabsTrigger>
        <TabsTrigger value="upcoming_events">Upcoming Events</TabsTrigger>
        <TabsTrigger value="past_events">Past Events</TabsTrigger>
      </TabsList>
      {events.current.length > 0 ? (
        <>
          <TabsContent
            value="current_events"
            className="flex-col hidden md:flex gap-2"
          >
            {events.current.map((e: SanityDocument, index: number) => (
              <CardElementHorizontal key={index} event={e} />
            ))}
          </TabsContent>
          <TabsContent
            value="current_events"
            className="grid grid-cols-1 md:hidden gap-2"
          >
            {events.current.map((e: SanityDocument, index: number) => (
              <CardElement key={index} event={e} />
            ))}
          </TabsContent>
        </>
      ) : (
        <TabsContent value="current_events" className="flex-col flex gap-2">
          <p className="text-center mt-20 text-[#b0b0b0]">
            There are currently no Current Events
          </p>
        </TabsContent>
      )}
      {events.upcoming.length > 0 ? (
        <>
          <TabsContent
            value="upcoming_events"
            className="flex-col hidden md:flex gap-2"
          >
            {events.upcoming.map((e: SanityDocument, index: number) => (
              <CardElementHorizontal key={index} event={e} />
            ))}
          </TabsContent>
          <TabsContent
            value="upcoming_events"
            className="grid grid-cols-1 md:hidden gap-2"
          >
            {events.upcoming.map((e: SanityDocument, index: number) => (
              <CardElement key={index} event={e} />
            ))}
          </TabsContent>
        </>
      ) : (
        <TabsContent value="upcoming_events" className="flex-col flex gap-2">
          <p className="text-center mt-20 text-[#b0b0b0]">
            There are currently no Upcoming Events
          </p>
        </TabsContent>
      )}
      {events.past.length > 0 ? (
        <>
          <TabsContent
            value="past_events"
            className="flex-col hidden md:flex gap-2"
          >
            {events.past.map((e: SanityDocument, index: number) => (
              <CardElementHorizontal key={index} event={e} />
            ))}
          </TabsContent>
          <TabsContent
            value="past_events"
            className="grid grid-cols-1 md:hidden gap-2"
          >
            {events.past.map((e: SanityDocument, index: number) => (
              <CardElement key={index} event={e} />
            ))}
          </TabsContent>
        </>
      ) : (
        <TabsContent value="past_events" className="flex-col flex gap-2">
          <p className="text-center mt-20 text-[#b0b0b0]">
            There are currently no Past Events
          </p>
        </TabsContent>
      )}
    </Tabs>
  );
}

export default AdminTab;
