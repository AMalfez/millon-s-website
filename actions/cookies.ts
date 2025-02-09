'use server'
import { cookies } from "next/headers";

export const setCookies = async({name,email}:{name:string, email:string}) => {
    const CookieStore = await cookies();
    
    if(CookieStore.has("user_name")) CookieStore.delete("user_name");
    if(CookieStore.has("user_email")) CookieStore.delete("user_email");
    CookieStore.set({
        name:"user_name",
        value:name,
        maxAge:100
    });
    CookieStore.set({
        name:"user_email",
        value:email,
        maxAge:100
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