"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardElement, CardElementHorizontal } from "../Events/Card";
import { Event, initialState } from "@/reducers/EventReducer";

function AdminTab() {
  return (
    <Tabs defaultValue="current_events" className="w-full">
      <TabsList>
        <TabsTrigger value="current_events">Current Events</TabsTrigger>
        <TabsTrigger value="upcoming_events">Upcoming Events</TabsTrigger>
        <TabsTrigger value="past_events">Past Events</TabsTrigger>
      </TabsList>
      <TabsContent value="current_events" className="flex-col hidden md:flex gap-2">
        {initialState.map((e:Event, index:number)=>(<CardElementHorizontal key={index} event={e} />))}
      </TabsContent>
      <TabsContent value="current_events" className="grid grid-cols-1 md:hidden gap-2">
        {initialState.map((e:Event, index:number)=>(<CardElement key={index} event={e} />))}
      </TabsContent>
      <TabsContent value="upcoming_events" className="flex-col flex gap-2">
        <p className="text-center mt-20 text-[#b0b0b0]">There are currently no Upcoming Events</p>
      </TabsContent>
      <TabsContent value="past_events" className="flex-col flex gap-2">
        <p className="text-center mt-20 text-[#b0b0b0]">There are currently no Upcoming Events</p>
      </TabsContent>
      <TabsContent value="password">Change your password here.</TabsContent>
    </Tabs>
  );
}

export default AdminTab;
