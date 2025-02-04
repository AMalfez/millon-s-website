export interface Event {
  id: number | Object | string;
  title: string;
  description: string;
  date_from: string;
  date_to: string;
  location: string;
  tags: string[];
  organizer: string;
  type: string;
  category: string;
  image: StaticImageData | string;
}

import img1 from "@/public/assets/09/History-of-OC-300x179.jpg";
import img2 from "@/public/assets/09/Space-mtn-300x225.jpg";
import img3 from "@/public/assets/09/Surfer-300x169.jpg"
import img4 from "@/public/assets/06/Balboa-funzone-300x150.jpg"
import img5 from "@/public/assets/06/NEW-Balboa-fun-zone.jpg";
import img6 from "@/public/assets/05/ckturistando-HTCQCvwV9XY-unsplash.jpg"
import img7 from "@/public/assets/04/NEW-Adventure-city-768x432.jpg"
import img8 from "@/public/assets/04/NEW-Boomers-300x225.jpg"
import { StaticImageData } from "next/image";

const initialState: Event[] = [
  {
    id: 1,
    title: "Event 1",
    description: "Event 1 Description",
    date_from: "2025-02-02",
    date_to: "2025-03-02",
    location: "Location 1",
    tags: ["tag1", "tag2"],
    organizer: "Organizer 1",
    type:"type1",
    category:"category1",
    image:img1
  },
  {
    id: 2,
    title: "Event 2",
    description: "Event 2 Description",
    date_from: "2021-05-01",
    date_to: "2021-05-02",
    location: "Location 2",
    tags: ["tag3", "tag4"],
    organizer: "Organizer 2",
    type:"type2",
    category:"category2",
    image:img2,
  },
  {
    id: 3,
    title: "Event 3",
    description: "Event 3 Description",
    date_from: "2021-05-01",
    date_to: "2021-05-02",
    location: "Location 3",
    tags: ["tag1", "tag2"],
    organizer: "Organizer 3",
    type:"type3",
    category:"category3",
    image:img3,
  },
  {
    id: 4,
    title: "Event 4",
    description: "Event 4 Description",
    date_from: "2021-05-01",
    date_to: "2021-05-02",
    location: "Location 4",
    tags: ["tag1", "tag2"],
    organizer: "Organizer 4",
    type:"type4",
    category:"category4",
    image:img4,
  },
  {
    id: 5,
    title: "Event 5",
    description: "Event 5 Description",
    date_from: "2021-05-01",
    date_to: "2021-05-02",
    location: "Location 5",
    tags: ["tag1", "tag2"],
    organizer: "Organizer 5",
    type:"type5",
    category:"category5",
    image:img5,
  },
  {
    id: 6,
    title: "Event 6",
    description: "Event 6 Description",
    date_from: "2021-05-01",
    date_to: "2021-05-02",
    location: "Location 6",
    tags: ["tag1", "tag2"],
    organizer: "Organizer 6",
    type:"type6",
    category:"category6",
    image:img6,
  },
  {
    id: 7,
    title: "Event 7",
    description: "Event 7 Description",
    date_from: "2021-05-01",
    date_to: "2021-05-02",
    location: "Location 7",
    tags: ["tag1", "tag2"],
    organizer: "Organizer 7",
    type:"type7",
    category:"category7",
    image:img7,
  },
  {
    id: 8,
    title: "Event 8",
    description: "Event 8 Description",
    date_from: "2021-05-01",
    date_to: "2021-05-02",
    location: "Location 8",
    tags: ["tag1", "tag2"],
    organizer: "Organizer 8",
    type:"type8",
    category:"category8",
    image:
      img8,
  },
  {
    id: 9,
    title: "Event 9",
    description: "Event 9 Description",
    date_from: "2021-05-01",
    date_to: "2021-05-02",
    location: "Location 9",
    tags: ["tag1", "tag2"],
    organizer: "Organizer 9",
    type:"type9",
    category:"category9",
    image:
      "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  }
];


export { initialState };
