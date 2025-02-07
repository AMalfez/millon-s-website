import { getPost } from "@/actions/blog";
import Blog from "@/components/Blog/Blog";

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