import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "blogPost"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt}`;

const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
    _id, title, publishedAt, "author": author->name, categories, types, mainImage{asset->{url}}, body
  }`;

const options = { next: { revalidate: 30 } };
export const getPosts = async () => {
  const posts = await client.fetch<SanityDocument[]>(POSTS_QUERY, {}, options);
  return posts;
};

export const getPost = async (params: Promise<{ slug: string }>) => {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );
  return post;
};
