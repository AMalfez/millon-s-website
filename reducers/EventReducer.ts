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
  image: string;
}
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
    image:
      "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
    image:
      "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
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
    image:
      "https://images.pexels.com/photos/994605/pexels-photo-994605.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
  },
];

type Action = { type: "FILTER"; payload: any } | { type: "RESET" };

const eventReducer = (state = initialState, action: Action) => {
  switch (action.type) {
    case "RESET":
      return initialState;

    case "FILTER": {
      const ns = state
        .filter((event: any) =>
          event.title.toLowerCase().includes(action.payload.title.toLowerCase())
        )
        .filter((event: any) =>
          action.payload.tags.every((tag: any) => event.tags.includes(tag))
        )
        .filter((event: any) =>
          event.location.toLowerCase().includes(action.payload.location.toLowerCase())
        )
        .filter(
          (event: any) =>
            new Date(event.date_from) >= new Date(action.payload.date.from)
          // && new Date(event.date_to) <= new Date(action.payload.to)
        )
        .filter((event: any) =>
            event.type.toLowerCase().includes(action.payload.type.toLowerCase())
        )
        .filter((event: any) =>
            event.category.toLowerCase().includes(action.payload.category.toLowerCase())
        );
      console.log("ns", ns);
      
      return ns;
    }

    default:
      return state;
  }
};

export { initialState, eventReducer };
