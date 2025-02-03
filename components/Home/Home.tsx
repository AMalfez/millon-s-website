"use client";
import { initialState, Event } from "@/reducers/EventReducer";
import React, { useEffect } from "react";
import HeroCarousel from "../Hero/Carousel";
import FilterForm from "../FilterForm/FilterForm";
import Events from "../Events/Events";
import { Query } from "./HomeTypes";

function Home() {
  const [events, setEvents] = React.useState(initialState);
  const [query, setQuery] = React.useState<Query>({
    title: "",
    tags: [],
    location: "",
    date: undefined,
    type: "",
    category: "",
  });
  useEffect(()=>{
    let filtered_events = initialState.filter((i:Event)=>i.title.toLowerCase().includes(query.title.toLowerCase()))
    filtered_events = filtered_events.filter((i:Event)=>i.location.toLowerCase().includes(query.location.toLowerCase()))
    filtered_events = filtered_events.filter((i:Event)=>i.type.toLowerCase().includes(query.type.toLowerCase()))
    filtered_events = filtered_events.filter((i:Event)=>i.category.toLowerCase().includes(query.category.toLowerCase()))
    if(query.tags.length > 0){
      filtered_events = filtered_events.filter((i:Event)=>query.tags.every((tag:string)=>i.tags.includes(tag)));
    }
    if(query.date){
      filtered_events = filtered_events.filter((i:Event)=> query.date?.from ? new Date(i.date_from) >= new Date(query.date.from) : true)
    }
    setEvents(filtered_events)
  },[query])
  return (
    <>
        <HeroCarousel query={query} setQuery={setQuery} />
        <FilterForm query={query} setQuery={setQuery} />
        <Events events={events} />
    </>
      
  );
}

export default Home;
