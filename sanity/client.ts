import { createClient } from "next-sanity";

export const client = createClient({
  projectId: "b5l69m3z",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: false,
  token: process.env.NEXT_PUBLIC_TOKEN
});