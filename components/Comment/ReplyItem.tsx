"use client"

import { getIsReplyLiked } from "@/actions/cookies";
import { likeReply } from "@/actions/reply";
import formatDate from "@/lib/formatDate";
import { Reply } from "@/lib/types";
import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

interface ReplyItemProps {
    reply: Reply;
  }
  
  const ReplyItem: React.FC<ReplyItemProps> = ({ reply }) => {
    const [likes, setLikes] = useState(reply.likes);
    const [isLiked, setIsLiked] = useState(false);
    useEffect(() => {
      const fetchLiked = async(replyId:string)=>{
        const liked = await getIsReplyLiked(replyId);
        setIsLiked(liked);
      }
      fetchLiked(reply._id);
    }, [likes]);
    const handleLikes = async()=>{
      const res = await likeReply(reply._id);
      setLikes(res.likes);
    }
    
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
            <Heart onClick={handleLikes} color={isLiked ? "red":"#979797"} fill={isLiked ? "red":"transparent"} className="cursor-pointer" size={14} strokeWidth={3} /> <strong>{likes}</strong>
          </div>
        </div>
      </div>
    );
  };

  export default ReplyItem;