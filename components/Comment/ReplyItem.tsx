"use client"

import formatDate from "@/lib/formatDate";
import { Reply } from "@/lib/types";
import { Heart } from "lucide-react";

interface ReplyItemProps {
    reply: Reply;
  }
  
  const ReplyItem: React.FC<ReplyItemProps> = ({ reply }) => {
    return (
      <div className="pl-5 border-l border-[#b0b0b0] pb-3">
        <p className="m-0">
          <strong className="text-md">{reply.name}</strong>{" "}
          <span className="text-sm text-[#b0b0b0]">
            {formatDate(reply.publishedAt)}
          </span>
        </p>
        <p className="m-0">{reply.reply}</p>
        <div className={`flex items-center gap-4 mt-2`}>
          <div className="text-[14px] text-[#979797] flex items-center gap-1">
            <Heart size={14} strokeWidth={3} /> <strong>{reply.likes}</strong>
          </div>
        </div>
      </div>
    );
  };

  export default ReplyItem;