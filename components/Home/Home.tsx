"use client";
// import { EventContext, EventDispatchContext } from "@/context/EventContext";
import { eventReducer, initialState } from "@/reducers/EventReducer";
import React, { useEffect } from "react";
import HeroCarousel from "../Hero/Carousel";
import FilterForm from "../FilterForm/FilterForm";
import Events from "../Events/Events";

function Home() {
  // const [events, dispatch] = useReducer(eventReducer, initialState);
  const [events, setEvents] = React.useState(initialState);
  const [query, setQuery] = React.useState<any>({
    title: "",
    tags: [],
    location: "",
    date: undefined,
    type: "",
    category: "",
  });
  useEffect(()=>{
    let filtered_events = initialState.filter((i:any)=>i.title.toLowerCase().includes(query.title.toLowerCase()))
    filtered_events = filtered_events.filter((i:any)=>i.location.toLowerCase().includes(query.location.toLowerCase()))
    filtered_events = filtered_events.filter((i:any)=>i.type.toLowerCase().includes(query.type.toLowerCase()))
    filtered_events = filtered_events.filter((i:any)=>i.category.toLowerCase().includes(query.category.toLowerCase()))
    if(query.tags.length > 0){
      filtered_events = filtered_events.filter((i:any)=>query.tags.every((tag:string)=>i.tags.includes(tag)));
    }
    if(query.date){
      filtered_events = filtered_events.filter((i:any)=> new Date(i.date_from) >= new Date(query.date.from))
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
