"use client";
import React, { useEffect, useState } from "react";
import HeroCarousel from "../Hero/Carousel";
import FilterForm from "../FilterForm/FilterForm";
import Events from "../Events/Events";
import { Query } from "./HomeTypes";
import { type SanityDocument } from "next-sanity";
import { fetchAllEvents } from "@/actions/event";

function Home() {
  const [query, setQuery] = React.useState<Query>({
    title: "",
    tags: [],
    location: "",
    date: undefined,
    type: "",
    category: "",
  });
  const [events, setEvents] = useState<SanityDocument[]>([]);

  useEffect(() => {
    const initialize = async () => {
      const eve = await fetchAllEvents();
      console.log(eve);
      filterEvents(eve);
    };
    initialize();
    
  }, [query]);

  const filterEvents = (events:SanityDocument[])=>{
    let filtered_events = events.filter((i: SanityDocument) =>
      i.title.toLowerCase().includes(query.title.toLowerCase())
    );
    filtered_events = filtered_events.filter((i: SanityDocument) =>
      i.location.toLowerCase().includes(query.location.toLowerCase())
    );
    filtered_events = filtered_events.filter((i: SanityDocument) =>
      i.type.some(
        (type: string) => type.toLowerCase().includes(query.type.toLowerCase())
      )
    );
    filtered_events = filtered_events.filter((i: SanityDocument) =>
      i.category.some(
        (category: string) =>
          category.toLowerCase().includes(query.category.toLowerCase())
      )
    );
    if (query.tags.length > 0) {
      filtered_events = filtered_events.filter((i: SanityDocument) =>
        query.tags.every((tag: string) => i.tags.includes(tag))
      );
    }
    if (query.date) {
      filtered_events = filtered_events.filter((i: SanityDocument) =>
        query.date?.from
          ? new Date(i.startDate) <= new Date(query.date.from) &&
            new Date(i.endDate) >= new Date(query.date.from)
          : true
      );
    }
    console.log(filtered_events);
    setEvents(filtered_events);
  }
  return (
    <>
      <HeroCarousel query={query} setQuery={setQuery} />
      <FilterForm query={query} setQuery={setQuery} />
      <Events events={events} />
    </>
  );
}

export default Home;
