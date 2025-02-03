interface DateRange {
    from: string | Date | undefined;
    to: string | Date | undefined;
  }
 export interface Query {
    title: string;
    tags: string[];
    location: string;
    date: DateRange|undefined;
    type: string;
    category: string;
  }
