"use client";

import { Comment, Reply } from "@/lib/types";
import ReplyItem from "./ReplyItem";
import { Heart } from "lucide-react";
import formatDate from "@/lib/formatDate";
import { useState } from "react";
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
import { setCookies } from "@/actions/cookies";
interface DataState {
  name: string;
  email: string;
}
interface CommentItemProps {
  comment: Comment;
  onReply: (id: string, replyText: string, isAnonymous:boolean) => void;
  isDataAvailable: boolean;
  data: DataState;
  setData: React.Dispatch<React.SetStateAction<DataState>>;
}

const CommentItem: React.FC<CommentItemProps> = ({
  comment,
  onReply,
  isDataAvailable,
  data,
  setData
}) => {
  const [replyText, setReplyText] = useState<string>("");
  const [showReply, setShowReply] = useState<boolean>(false);
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const handleReplySubmit = () => {
    if (replyText.trim()) {
      if (data.name === "" || data.email === "") {
        alert("Please fill your information.");
        return;
      }
      if (isChecked) setCookies(data);
      onReply(comment._id, replyText, false);
      setReplyText("");
      setShowReply(false);
    }
  };
  const handleAnonymous = async () => {
    setData({ name: "Anonymous", email: "" });
    onReply(comment._id, replyText, true);
    setReplyText("");
    setShowReply(false);
  };
  const handleReplyCancel = () => {
    setReplyText("");
    setShowReply(false);
  };

  return (
    <div className={`mt-5`}>
      <p className="m-0">
        <strong className="text-md">{comment.name}</strong>{" "}
        <span className="text-sm text-[#b0b0b0]">
          {formatDate(comment.publishedAt)}
        </span>
      </p>
      <p className="m-0">{comment.comment}</p>
      <div className={`flex items-center gap-4 mt-2 mb-3`}>
        <div className="text-[14px] text-[#979797] flex items-center gap-1">
          <Heart size={14} strokeWidth={3} /> <strong>{comment.likes}</strong>
        </div>
        <button
          className="text-[#979797] text-sm"
          onClick={() => setShowReply(!showReply)}
        >
          <strong>Reply</strong>
        </button>
      </div>
      {showReply && (
        <div className="mt-3 flex flex-col justify-end">
          <input
            type="text"
            className="bg-transparent border-b border-[#b0b0b0] outline-none px-2 py-1"
            value={replyText}
            onChange={(e) => setReplyText(e.target.value)}
            placeholder="Add a reply"
          />
          <div className="flex justify-end gap-4 mt-2">
            <button onClick={handleReplyCancel}>Cancel</button>
            {isDataAvailable && (<button
              onClick={handleReplySubmit}
              className="bg-[#b0b0b0] transition-all hover:bg-[#848383] rounded-md px-3 py-1 text-white"
            >
              Reply
            </button>)}
            {!isDataAvailable && (
              <Dialog>
                <DialogTrigger asChild>
                  <button className="bg-[#b0b0b0] transition-all hover:bg-[#848383] rounded-md px-3 py-1 text-white">
                    Reply
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-[425px]">
                  <DialogHeader>
                    <DialogTitle>Leave a reply as</DialogTitle>
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
                        onClick={handleReplySubmit}
                        type="submit"
                      >
                        Done
                      </button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            )}
          </div>
        </div>
      )}
      {comment.reply.length > 0 &&
        comment.reply.map((reply: Reply) => (
          <ReplyItem key={reply._id} reply={reply} />
        ))}
    </div>
  );
};
export default CommentItem;
