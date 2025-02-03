"use client";
import React from "react";
import { DatePickerWithRange } from "./DateRangePicker";
import { Input } from "@/components/ui/input"
import { SelectCategory } from "./SelectCategory";
import { SelectType } from "./SelectType";
import TagForm from "./TagForm";
import { Query } from "../Home/HomeTypes";

function FilterForm({query, setQuery}:{query:Query, setQuery:React.Dispatch<React.SetStateAction<Query>>}) {
  const handleLocationChange = (e:React.ChangeEvent<HTMLInputElement>)=>setQuery({...query,location:e.target.value});
  return (
    <div className="flex flex-col gap-2 max-w-[856px] mx-auto py-16 px-5">
        <TagForm query={query} setQuery={setQuery} />
        <div className="flex flex-col md:flex-row gap-2">
            <Input value={query.location} onChange={handleLocationChange} type="text" placeholder="Location" />
            <SelectCategory query={query} setQuery={setQuery} />
            <SelectType query={query} setQuery={setQuery} />
            <DatePickerWithRange query={query} setQuery={setQuery} className="w-full" />
        </div>
    </div>
  );
}

export default FilterForm;
