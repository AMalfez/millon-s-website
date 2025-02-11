'use server'
import { cookies } from "next/headers";
export const setCookies = async({name,email}:{name:string, email:string}) => {
    const CookieStore = await cookies();
    
    if(CookieStore.has("user_name")) CookieStore.delete("user_name");
    if(CookieStore.has("user_email")) CookieStore.delete("user_email");
    CookieStore.set({
        name:"user_name",
        value:name,
        maxAge:10000
    });
    CookieStore.set({
        name:"user_email",
        value:email,
        maxAge:10000
    });
}
export const getUserData = async()=>{
    const CookieStore = await cookies();
    if(CookieStore.has("user_name") && CookieStore.has("user_email")){
        return {
            name:CookieStore.get("user_name")?.value,
            email: CookieStore.get("user_email")?.value
        };
    }
    return undefined;
}

export const getLiked = async(id:string)=>{
    const CookieStore = await cookies();
    const likedCookie = CookieStore.get(`liked_${id}`);
    if (likedCookie && likedCookie.value === "yes") return true;
    return false;
}

export const setLiked = async(value:boolean, id:string)=>{
    const CookieStore = await cookies();
    if(CookieStore.has(`liked_${id}`)) CookieStore.delete(`liked_${id}`);
    CookieStore.set({
        name:`liked_${id}`,
        value: value ? "yes":"no",
        maxAge:100000
    })
}

export const getIsCommentLiked = async(commentId:string)=>{
    const CookieStore = await cookies();
    const liked_comment = CookieStore.get(`comment_liked_${commentId}`);
    if(liked_comment && liked_comment.value==="yes") return true;
    return false;
}
export const getIsReplyLiked = async(replyId:string)=>{
    const CookieStore = await cookies();
    const liked_reply = CookieStore.get(`reply_liked_${replyId}`);
    if(liked_reply && liked_reply.value==="yes") return true;
    return false;
}

export const setIsCommentLiked = async(value:boolean, commentId:string)=>{
    const CookieStore = await cookies();
    if(CookieStore.has(`comment_liked_${commentId}`)) CookieStore.delete(`comment_liked_${commentId}`);
    CookieStore.set({
        name:`comment_liked_${commentId}`,
        value: value ? "yes":"no",
        maxAge:100000
    })
}

export const setIsReplyLiked = async(value:boolean, replyId:string)=>{
    const CookieStore = await cookies();
    if(CookieStore.has(`reply_liked_${replyId}`)) CookieStore.delete(`reply_liked_${replyId}`);
    CookieStore.set({
        name:`reply_liked_${replyId}`,
        value: value ? "yes":"no",
        maxAge:100000
    })
}