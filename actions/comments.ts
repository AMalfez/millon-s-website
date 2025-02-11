'use server'
import { client } from "@/sanity/client";
import { getIsCommentLiked, setIsCommentLiked } from "./cookies";

interface Data{
    name:string;
    email: string;
    comment: string;
    postId:string;
}

export const addComments = async({name,email,comment,postId}:Data)=>{
    try {
        const date = new Date();
        const newComments = await client.create({
            _type: "comment",
            name,
            email,
            comment,
            likes:0,
            publishedAt:date.toISOString(),
            blogPost: {
                _type: "reference",
                _ref: postId
            }
        })
        return newComments;
    } catch (error) {
        return error;
    }
}

export const likeComment = async(commentId:string)=>{
    const isAlreadyLiked = await getIsCommentLiked(commentId);
    await setIsCommentLiked(!isAlreadyLiked,commentId);
    if(!isAlreadyLiked) {
        const res = await client.patch(commentId).inc({likes:1}).commit();
        return res;
    }
    return await client.patch(commentId).dec({likes:1}).commit();
}