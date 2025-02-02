"use client";
import React, { useState } from "react";
import Img from "@/public/assets/06/Balboa-funzone-300x150.jpg";
import Image from "next/image";
import { Heart, MessageSquareText, Search, Share2 } from "lucide-react";
import { Badge } from "../ui/badge";
import Link from "next/link";

const blogs = [
  // Sample blog data
  {
    id: 1,
    title: "First Blog",
    author: "Author 1",
    date: "2023-10-02",
    likes: 10,
    comments: 2,
    tags: ["React", "JavaScript"],
    description: "This is a short description of the first blog.",
  },
  {
    id: 2,
    title: "Second Blog",
    author: "Author 2",
    date: "2023-10-01",
    likes: 11,
    comments: 3,
    tags: ["Angular", "JavaScript"],
    description: "This is a short description of the first blog.",
  },
  // Add more blog objects here
];

const BlogsPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("recent");

  const filteredBlogs = blogs
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
    <div className="pb-5 max-w-[856px] mx-auto flex flex-col gap-5 text-[#2D2D2D]">
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
        {filteredBlogs.map((blog) => (
          <Link
            key={blog.id}
            href={`/blogs/${blog.id}`}
            className="flex flex-col w-full md:flex-row border rounded-md bg-white cursor-pointer p-2 no-underline text-inherit"
          >
            <Image
              src={Img}
              alt={blog.title}
              className="rounded-md w-full md:w-[250px] md:h-[150px] mr-5 object-cover"
            />
            <div className="w-full">
              <h2 className="text-[18px] font-semibold">{blog.title}</h2>
              <p className="text-[12px] text-[#b0b0b0]">
                By {blog.author} on {blog.date}
              </p>
              <p className="text-[15px] text-[#979797]">{blog.description}</p>
              <div className="flex flex-wrap justify-between mt-3">
                <div className="flex gap-2">
                  {blog.tags.map((tag) => (
                    <Badge key={tag} variant={"secondary"}>
                      {tag}
                    </Badge>
                  ))}
                </div>
                <div className="flex gap-2">
                  <p className="flex items-center text-[14px] text-[#979797] gap-1">
                    <Heart size={14} />
                    {blog.likes}
                  </p>
                  <p className="flex items-center text-[14px] text-[#979797] gap-1">
                    <MessageSquareText size={14} />
                    {blog.comments}
                  </p>
                  <button
                    onClick={(e) => {
                      e.preventDefault();
                      navigator.clipboard.writeText(
                        `https://yourwebsite.com/blog/${blog.id}`
                      );
                      alert(`Link to ${blog.title} copied to clipboard!`);
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
