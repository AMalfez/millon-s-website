import { getPost } from "@/actions/blog";
import Blog from "@/components/Blog/Blog";
import type { Metadata } from 'next'
 
 
export async function generateMetadata(
  { params }: {
    params: Promise<{ slug: string }>;
  }
): Promise<Metadata> {
  // read route params
  const post = await getPost(params);
 
 
  return {
    title: post.title,
    description: "Explore new adventures in Orange County, CA. Browse through various events and get to know about Orange County from our blogs.",
  }
}

export default async function page({
    params,
  }: {
    params: Promise<{ slug: string }>;
  }){
    const resolvedParams = await params;
    const post = await getPost(params);
    return(
        <div className="mt-16 py-20 px-4">
            <Blog params={resolvedParams} post={post} />
        </div>
    )
}