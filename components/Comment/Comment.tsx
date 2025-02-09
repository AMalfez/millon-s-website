"use client";
import { Comment, Reply } from "@/lib/types";
import React, { useEffect, useState } from "react";
import CommentItem from "./CommentItem";
import { addComments } from "@/actions/comments";
import { setCookies, getUserData } from "@/actions/cookies";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { type SanityDocument } from "next-sanity";
import { addReply } from "@/actions/reply";

interface CommentSectionProps {
  comment: Comment[];
  postId: string;
}
interface DataState {
  name: string;
  email: string;
}

const CommentSection: React.FC<CommentSectionProps> = ({ comment, postId }) => {
  const [comments, setComments] = useState<Comment[]>([...comment]);
  const [newComment, setNewComment] = useState<string>("");
  const [isDataAvailable, setIsDataAvailable] = useState<boolean>(false);
  const [data, setData] = useState<DataState>({
    name: "",
    email: "",
  });
  const [isChecked, setIsChecked] = useState(true);

  useEffect(() => {
    const fetchCookieData = async () => {
      const data = await getUserData();
      if (data && data.name && data.email) {
        setData({
          name: data.name?.toString() || "",
          email: data.email?.toString() || "",
        });
        setIsDataAvailable(true);
      }
    };
    fetchCookieData();
  }, []);

  const handleCancelComment = () => {
    setNewComment("");
  };
  const handleAddComment = async () => {
    if (data.name === "" || data.email === "") {
      alert("Please fill your information.");
      return;
    }
    if (isChecked) setCookies(data);
    let dateToday: Date = new Date();
    if (newComment.trim()) {
      const addC = await addComments({
        postId,
        name: data.name,
        email: data.email,
        comment: newComment,
      });
      const newCommentObj: Comment = {
        _id: (addC as SanityDocument)._id,
        name: data.name, // Replace with actual user data
        comment: newComment,
        reply: [],
        publishedAt: dateToday.toDateString(),
        likes: 0,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  const handleReply = async (id: string, replyText: string, isAnonymous: boolean) => {
    const dateToday = new Date();
    const newreply = await addReply({
      name: !isAnonymous ? data.name:"Anonymous",
      email: !isAnonymous ? data.email:"",
      reply: replyText,
      commentId: id,
    });
    const updatedComments = comments.map((comment) => {
      if (comment._id === id) {
        const newReply: Reply = {
          _id: (newreply as SanityDocument)._id,
          name: !isAnonymous ? data.name:"Anonymous", // Replace with actual user data
          reply: replyText,
          publishedAt: dateToday.toDateString(),
          likes: 0,
        };
        return { ...comment, reply: [...comment.reply, newReply] };
      }
      return comment;
    });
    setComments(updatedComments);
  };

  const handleAnonymous = async () => {
    setData({ name: "Anonymous", email: "" });
    let dateToday: Date = new Date();
    if (newComment.trim()) {
      const addC = await addComments({
        postId,
        name: "Anonymous",
        email: "",
        comment: newComment,
      });
      const newCommentObj: Comment = {
        _id: (addC as SanityDocument)._id,
        name: "Anonymous", // Replace with actual user data
        comment: newComment,
        reply: [],
        publishedAt: dateToday.toDateString(),
        likes: 0,
      };
      setComments([...comments, newCommentObj]);
      setNewComment("");
    }
  };

  return (
    <div className="mt-7 max-w-[836px] mx-auto">
      <h2 className="text-center mb-3 leading-[32px] text-lg font-semibold">
        Leave a comment
      </h2>
      <div className="flex flex-col gap-2 justify-center">
        <input
          type="text"
          value={newComment}
          className="px-2 py-1 outline-none border-b border-[#b0b0b0] bg-transparent"
          onChange={(e) => setNewComment(e.target.value)}
          placeholder="Add a comment"
        />
        <div className="flex justify-end gap-4">
          <button onClick={handleCancelComment}>Cancel</button>
          {!isDataAvailable && (
            <Dialog>
              <DialogTrigger asChild>
                <button className="bg-[#b0b0b0] transition-all hover:bg-[#848383] rounded-md px-3 py-1 text-white">
                  Comment
                </button>
              </DialogTrigger>
              <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                  <DialogTitle>Leave a comment as</DialogTitle>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="name" className="text-right">
                      Name
                    </Label>
                    <Input
                      id="name"
                      placeholder="Pedro Duarte"
                      className="col-span-3"
                      value={data.name}
                      onChange={(e) =>
                        setData({ ...data, name: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label htmlFor="email" className="text-right">
                      Email
                    </Label>
                    <Input
                      id="email"
                      placeholder="test@gmail.com"
                      className="col-span-3"
                      value={data.email}
                      onChange={(e) =>
                        setData({ ...data, email: e.target.value })
                      }
                    />
                  </div>
                  <div className="flex items-center pl-12 space-x-2">
                    <Checkbox id="save_changes" />
                    <label
                      htmlFor="save_changes"
                      defaultChecked={isChecked}
                      onChange={() => setIsChecked(!isChecked)}
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    >
                      Save changes for later use.
                    </label>
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <button type="submit" onClick={handleAnonymous}>
                      Post Anonymously
                    </button>
                  </DialogClose>
                  <DialogClose asChild>
                    <button
                      className="bg-[#b0b0b0] transition-all hover:bg-[#848383] rounded-md px-3 py-1 text-white"
                      onClick={handleAddComment}
                      type="submit"
                    >
                      Done
                    </button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          )}
          {isDataAvailable && (
            <button
              onClick={handleAddComment}
              className="bg-[#b0b0b0] transition-all hover:bg-[#848383] rounded-md px-3 py-1 text-white"
            >
              Comment
            </button>
          )}
        </div>
      </div>
      <div className="mt-5">
        {comments.length > 0 &&
          comments.map((c: Comment) => (
            <CommentItem
              key={c._id}
              comment={c}
              onReply={handleReply}
              isDataAvailable={isDataAvailable}
              data={data}
              setData={setData}
            />
          ))}
      </div>
    </div>
  );
};

export default CommentSection;
