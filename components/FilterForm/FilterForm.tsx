"use client";
import React from "react";
import { DatePickerWithRange } from "./DateRangePicker";
import { Input } from "@/components/ui/input"
import { SelectCategory } from "./SelectCategory";
import { SelectType } from "./SelectType";
import TagForm from "./TagForm";

function FilterForm() {
  return (
    <div className="flex flex-col gap-2 px-28 py-16">
        <TagForm/>
        <div className="flex space-x-2">
            <Input type="text" placeholder="Location" />
            <SelectCategory/>
            <SelectType/>
            <DatePickerWithRange className="w-full" />
        </div>
    </div>
  );
}

export default FilterForm;
