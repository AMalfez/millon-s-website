'use server'
import { client } from "@/sanity/client";
import { cookies } from "next/headers";
import { getIsReplyLiked, setIsReplyLiked } from "./cookies";
interface Data{
    name:string;
    email:string;
    reply:string;
    commentId: string;
}

export const addReply = async({name,email,reply,commentId}:Data)=>{
    try {
        const date = new Date();
        const newReply = await client.create({
            _type: "reply",
            reply,
            name,
            email,
            likes:0,
            publishedAt:date.toISOString(),
            comment:{
                _type: "reference",
                _ref: commentId
            }
        });
        return newReply;
    } catch (error) {
        return error;
    }
}

export const likeReply = async(commentId:string)=>{
    const isAlreadyLiked = await getIsReplyLiked(commentId);
    await setIsReplyLiked(!isAlreadyLiked,commentId);
    if(!isAlreadyLiked) {
        const res = await client.patch(commentId).inc({likes:1}).commit();
        return res;
    }
    return await client.patch(commentId).dec({likes:1}).commit();
}