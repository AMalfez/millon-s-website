import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";

const POSTS_QUERY = `*[
  _type == "blogPost"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, description, mainImage{asset->{url}}, likes, comments, "author": author->name}`;

const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
    _id, title, publishedAt, "author": author->name, tags, mainImage{asset->{url}}, body, intro, likes,
    "comments": *[_type == "comment" && blogPost._ref == ^._id ] | order(publishedAt asc) {
      name,
      comment,
      publishedAt,
      likes,
      _id,
      "reply": *[_type == "reply" && comment._ref == ^._id] | order(publishedAt asc) {
        _id, 
        name,
        publishedAt,
        likes,
        reply
      }
    }
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

export const getPostsTest = async (start: number, end: number) => {
  const QUERY = `*[
  _type == "blogPost"
  && defined(slug.current)
]|order(publishedAt desc)[${start}...${end}]{_id, title, slug, publishedAt}`;
  const posts = await client.fetch<SanityDocument>(QUERY, {}, options);
  return posts;
};
