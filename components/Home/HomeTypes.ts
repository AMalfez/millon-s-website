interface DateRange {
    from: string;
    to: string;
  }
 export interface Query {
    title: string;
    tags: string[];
    location: string;
    date: DateRange|undefined;
    type: string;
    category: string;
  }
