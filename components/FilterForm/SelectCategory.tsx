"use client"

import * as React from "react"
import { Check, ChevronDown } from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"

const categories = [
  {
    value: "date night",
    label: "Date Night",
  },
  {
    value: "family fun",
    label: "Family Fun",
  },
  {
    value: "flying solo",
    label: "Flying Solo",
  },
  {
    value: "group galivanting",
    label: "Group Galivanting",
  }
]

export function SelectCategory({query,setQuery}:any) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="bg-white w-full hover:bg-white" asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {query.category
            ? categories.find((c) => c.value === query.category)?.label
            : "Choose Event Category"}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search category..." className="h-9" />
          <CommandList>
            <CommandEmpty>No category found.</CommandEmpty>
            <CommandGroup>
              {categories.map((c) => (
                <CommandItem
                  key={c.value}
                  value={c.value}
                  onSelect={(currentValue) => {
                    setQuery(currentValue === query.category ? {...query,category:""} : {...query,category:currentValue})
                    setOpen(false)
                  }}
                >
                  {c.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      query.category === c.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}
