'use server'
import { client } from "@/sanity/client";
import { cookies } from "next/headers";
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