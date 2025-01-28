"use client";
import React from "react";
import { DatePickerWithRange } from "./DateRangePicker";
import { Input } from "@/components/ui/input"
import { SelectCategory } from "./SelectCategory";
import { SelectType } from "./SelectType";
import TagForm from "./TagForm";

function FilterForm() {
  return (
    <div className="flex flex-col gap-2 px-10 md:px-20 lg:px-28 py-16">
        <TagForm/>
        <div className="flex flex-col md:flex-row gap-2">
            <Input type="text" placeholder="Location" />
            <SelectCategory/>
            <SelectType/>
            <DatePickerWithRange className="w-full" />
        </div>
    </div>
  );
}

export default FilterForm;
