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
import { Query } from "../Home/HomeTypes"

const types = [
  {
    value: "amusement parks",
    label: "Amusement Parks",
  },
  {
    value: "animals & aquariums",
    label: "Animals & Aquariums",
  },
  {
    value: "beaches",
    label: "Beaches",
  },
  {
    value: "caves",
    label: "Caves",
  },
  {
    value: "chair champs",
    label: "Chair Champs",
  },
  {
    value: "fairs & festivals",
    label: "Fairs & Festivals",
  },
  {
    value: "food halls / courts",
    label: "Food Halls / Courts",
  },
  {
    value: "Free is for Me!",
    label: "Free is for Me!",
  },
  {
    value:"girls at night",
    label:"Girls at Night"
  },
  {
    value:"hiking",
    label:"Hiking"
  },
  {
    value:"lakes",
    label:"Lakes"
  },
  {
    value:"move your body",
    label:"Move Your Body"
  },
  {
    value:"museums",
    label:"Museums"
  },
  {
    value:"museums-art",
    label:"Museums-Art"
  },
  {
    value:"nature centers",
    label:"Nature Centers"
  },
  {
    value:"parks with perks",
    label:"Parks with Perks"
  },
  {
    value:"race & endurance events",
    label:"Race & Endurance Events"
  },
  {
    value:"rainy day (indoor activities)",
    label:"Rainy Day (Indoor Activities)"
  },
  {
    value:"rentals",
    label:"Rentals"
  },
  {
    value:"tours",
    label:"Tours"
  },
  {
    value:"scavenger hunts",
    label:"Scavenger Hunts"
  },
  {
    value:"splash pads",
    label:"Splash Pads"
  },
  {
    value: "unique food expereinces",
    label: "Unique Food Experiences",
  },
  {
    value: "wild & wacky",
    label: "Wild & Wacky",
  },
  {
    value:"zen out",
    label:"Zen Out"
  }
]

export function SelectType({query, setQuery}:{query:Query, setQuery:Function}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger className="bg-white hover:bg-white" asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {query.type
            ? types.find((type) => type.value === query.type)?.label
            : "Choose Event Type"}
          <ChevronDown className="opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search type..." className="h-9" />
          <CommandList>
            <CommandEmpty>No type found.</CommandEmpty>
            <CommandGroup>
              {types.map((type) => (
                <CommandItem
                  key={type.value}
                  value={type.value}
                  onSelect={(currentValue:string) => {
                    setQuery(currentValue === query.type ? {...query, type:""} : {...query, type:currentValue})
                    setOpen(false)
                  }}
                >
                  {type.label}
                  <Check
                    className={cn(
                      "ml-auto",
                      query.type === type.value ? "opacity-100" : "opacity-0"
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
