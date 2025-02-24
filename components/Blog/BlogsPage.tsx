"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Heart, MessageSquareText, Search, Share2 } from "lucide-react";
import Link from "next/link";
import { useToast } from "@/hooks/use-toast"
import { getPosts } from "@/actions/blog";
import { type SanityDocument } from "next-sanity";
import { trimString } from "@/lib/utils";

const BlogsPage: React.FC = () => {
  const { toast } = useToast()
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("recent");
  const [posts, setPosts] = useState<SanityDocument[]>([])
  const [loading, setLoading] = useState(true);
  useEffect(()=>{
      const fetchPosts = async () => {
        setLoading(true);
        const posts = await getPosts();
        console.log(posts);
        
        setPosts(posts);
        setLoading(false);
      };
      fetchPosts();
    },[filter]);
    function formatDate(dateString: string): string {
      const date = new Date(dateString);
      const options: Intl.DateTimeFormatOptions = { year: 'numeric', month: 'short', day: 'numeric' };
      return date.toLocaleDateString('en-US', options);
    }
  const filteredBlogs = posts
    .filter((blog) =>
      blog.title.toLowerCase().includes(searchTerm.toLowerCase())
    )
    .sort((a, b) => {
      if (filter === "likes") {
        return b.likes - a.likes;
      } else if (filter === "recent") {
        return new Date(b.date).getTime() - new Date(a.date).getTime();
      }
      return 0;
    });

  return (
    <div className="pb-5 w-10/12 mx-auto flex flex-col gap-5 text-[#2D2D2D]">
      <h1 className="text-[28px] font-semibold">Blogs</h1>
      <div className="flex justify-between">
        <div className="border flex bg-white w-1/2 items-center rounded-md px-2 py-1 gap-2">
          <Search color="#ADADAD" size={18} />
          <input
            type="text"
            placeholder="Search blogs..."
            className="border-none outline-none w-full"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <select
          className="w-1/3 md:w-1/5 rounded-md border outline-none px-2 py-1 text-[#979797]"
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        >
          <option className="text-black" value="recent">Recent</option>
          <option className="text-black" value="likes">Most Liked</option>
        </select>
      </div>
      <div className="w-full flex flex-wrap md:flex-col gap-3">
      {loading && (<div className="min-h-80 flex flex-col items-center justify-center w-10/12 mx-auto px-5 text-2xl text-[#979797]">Loading...</div>)}
        {!loading && filteredBlogs.map((blog) => (
          <Link
            key={blog._id}
            href={`/blogs/${blog.slug.current}`}
            className="flex flex-col w-full md:flex-row border rounded-md bg-white cursor-pointer p-2 no-underline text-inherit"
          >
            <Image
              src={blog.mainImage.asset.url}
              alt={blog.title}
              width={100}
              height={60}
              className="rounded-md md:aspect-video w-full md:w-[250px] md:h-[150px] mr-5 object-cover"
            />
            <div className="w-full">
              <h2 className="text-[18px] font-semibold">{blog.title}</h2>
              <p className="text-[12px] text-[#b0b0b0]">
                Posted on {formatDate(blog.publishedAt)}
              </p>
              <p className="text-[15px] text-[#979797] mt-2">{trimString(blog.description)}</p>
              <div className="flex flex-wrap justify-between mt-3">
                <div className="flex gap-2">
                  {/* {blog.tags.map((tag) => (
                    <Badge key={tag} variant={"secondary"}>
                      {tag}
                    </Badge>
                  ))} */}
                </div>
                <div className="flex gap-2">
                  <p className="flex items-center text-[14px] text-[#979797] gap-1">
                    <Heart size={14} />
                    {blog.likes}
                  </p>
                  <p className="flex items-center text-[14px] text-[#979797] gap-1">
                    <MessageSquareText size={14} />
                    {blog.comments.length}
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(
                        `${process.env.NEXT_PUBLIC_URL}/blogs/${blog.slug.current}`
                      );
                      toast({
                        description: `Link to ${blog.title} copied to clipboard!`,
                      })
                    }}
                  >
                    <Share2 size={14} color="#979797" />
                  </button>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default BlogsPage;
