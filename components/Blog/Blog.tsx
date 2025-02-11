"use client";
import React, { useEffect, useState } from "react";
import { Heart, MessageSquareText, Share2 } from "lucide-react";
import BlogImage from "./BlogImage";
import { PortableText } from "next-sanity";
import ImageCustomComponent from "@/components/ImageComponent"

import CommentSection from "../Comment/Comment";
import { useToast } from "@/hooks/use-toast";
import { type SanityDocument } from "next-sanity";
import { likePost } from "@/actions/blog";
import { getLiked } from "@/actions/cookies";

export default function Blog({params, post}:{params:{ slug: string; }, post: SanityDocument}) {
  const { toast } = useToast();
  const [isLiked, setIsLiked] = useState(false);
  const [likes, setLikes] = useState(post.likes);
  function formatDate(dateString: string): string {
    const date = new Date(dateString);
    const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
  }
  useEffect(()=>{
    const getIsLiked = async()=>{
      const liked = await getLiked(post._id);
      setIsLiked(liked);
    }
    getIsLiked();
  },[likes])
  const handleLike = async()=>{
    const res = await likePost(post._id) as SanityDocument;
    setLikes(res.likes);
    console.log(res,"likes");
  }
  return (
    <div className="max-w-[856px] mx-auto prose">
      <div className="max-w-[836px] mt-5 mx-auto border-b-2 border-[#b0b0b0] pb-5">
        <h1 className="text-3xl font-semibold mb-0 pb-0">
          {post.title}
        </h1>
        <p className="text-sm mt-0 pt-0 text-[#979797]">By {post.author} on {formatDate(post.publishedAt)}</p>
        <div className="flex justify-between mt-4">
          <div className="flex gap-3">
            <div className="flex items-center gap-1 text-[#979797] text-[14px]">
              <Heart size={14} onClick={handleLike} className="cursor-pointer" fill={isLiked ? "red":"transparent"} color={isLiked? "red":"#979797"} /> {likes}
            </div>
            <div className="flex items-center gap-1 text-[#979797] text-[14px]">
              <MessageSquareText size={14} color="#979797" /> {post.comments.length}
            </div>
          </div>
          <div className="flex">
            <button
              onClick={(e) => {
                e.preventDefault();
                navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}/blog/${params.slug}`);
                toast({
                  description: `Link copied to clipboard!`,
                });
              }}
            >
              <Share2 size={14} color="#979797" />
            </button>
          </div>
        </div>
        <BlogImage src={post.mainImage.asset.url} alt={"Balboa Funzone"} />
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={ImageCustomComponent} />
        )}
      </div>
      <div className="py-7 flex max-w-[836px] mx-auto gap-2">
        {post.tags.length > 0 && post.tags.map((t:string, ind:number)=>(
          <div key={ind} className="text-[#b0b0b0] border-2 rounded-md inline-block px-2 border-[#b0b0b0]">
          {t}
        </div>
        ))}
      </div>
      <div className="flex justify-between mx-auto max-w-[836px]">
        <div className="flex gap-3">
          <div className="flex items-center gap-1 text-[#979797] text-[16px]">
            <Heart onClick={handleLike} className="cursor-pointer" fill={isLiked ? "red":"transparent"} size={16} color={isLiked? "red":"#979797"} /> {likes}
          </div>
          <div className="flex items-center gap-1 text-[#979797] text-[16px]">
            <MessageSquareText size={16} color="#979797" /> {post.comments.length}
          </div>
        </div>
        <div className="flex">
          <button
            onClick={(e) => {
              e.preventDefault();
              navigator.clipboard.writeText(`${process.env.NEXT_PUBLIC_URL}/blog/${params.slug}`);
              toast({
                description: `Link copied to clipboard!`,
              });
            }}
          >
            <Share2 size={16} color="#979797" />
          </button>
        </div>
      </div>
      <CommentSection comment={post.comments} postId={post._id} />
    </div>
  );
}
