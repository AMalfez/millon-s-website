'use server'
import { type SanityDocument } from "next-sanity";

import { client } from "@/sanity/client";
import { getLiked, setLiked } from "./cookies";

const POSTS_QUERY = `*[
  _type == "blogPost"
  && defined(slug.current)
]|order(publishedAt desc)[0...12]{_id, title, slug, publishedAt, description, mainImage{asset->{url}}, likes, "comments": *[_type == "comment" && blogPost._ref == ^._id ] {
      _id}, "author": author->name}`;

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


export const likePost = async(_id:string)=>{
  try{
    const liked = await getLiked(_id);
    await setLiked(!liked,_id);
    if(!liked) {
      const res = await client.patch(_id).inc({likes:1}).commit();
      console.log(res);
      
      return res;
    }
    const res = await client.patch(_id).dec({likes:1}).commit();
    console.log(res);
    return res;
  }catch(err){
    return err;
  }
}