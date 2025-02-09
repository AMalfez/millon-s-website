'use server'
import { client } from "@/sanity/client";

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



