"use client";
import React, { useEffect, useState } from "react";
import HeroCarousel from "../Hero/Carousel";
import FilterForm from "../FilterForm/FilterForm";
import Events from "../Events/Events";
import { Query } from "./HomeTypes";
import { type SanityDocument } from "next-sanity";
import { fetchAllEvents9by9 } from "@/actions/event";

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
  const [allEvents, setAllEvents] = useState<SanityDocument[]>([]);
  const [disabled, setDisabled] = React.useState(true);
  const [times,setTimes] = useState(0);
  useEffect(() => {
    const initialize = async () => {
      const eve = await fetchAllEvents9by9(times);
      console.log(eve);
      if(eve.length < 9) setDisabled(true);
      else setDisabled(false);
      setAllEvents([...allEvents,...eve]);
    };
    initialize();
  }, [times]);

  useEffect(()=>{
    filterEvents(allEvents);
  },[query, allEvents])

  const filterEvents = (events:SanityDocument[])=>{
    if(events.length===0) return;
    console.log(events)
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
      <HeroCarousel />
      <FilterForm query={query} setQuery={setQuery} />
      <Events events={events} setTimes={setTimes} prev={times} disabled={disabled} />
    </>
  );
}

export default Home;
