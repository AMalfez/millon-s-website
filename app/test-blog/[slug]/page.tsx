import { PortableText, type SanityDocument } from "next-sanity";
import Link from "next/link";
import Image from "next/image";
import ImageCustomComponent from "./ImageComponent";
import { client } from "@/sanity/client";

const options = { next: { revalidate: 30 } };
const POST_QUERY = `*[_type == "blogPost" && slug.current == $slug][0]{
      _id, title, publishedAt, "author": author->name, categories, types, mainImage{asset->{url}}, body
    }`;

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const post = await client.fetch<SanityDocument>(
    POST_QUERY,
    await params,
    options
  );

  return (
    <main className="container mx-auto min-h-screen max-w-3xl p-8 flex mt-20 prose flex-col gap-4">
      <Link href="/test-blog" className="hover:underline">
        ← Back to posts
      </Link>
      {post.mainImage && (
        <Image
          src={post.mainImage.asset.url}
          width={800}
          height={500}
          alt={post.title}
          className="rounded-lg my-4"
        />
      )}
      <div>
        <h1 className="text-4xl font-bold mb-0">{post.title}</h1>
        <p className="mt-0">Published: {new Date(post.publishedAt).toLocaleDateString()}</p>
      </div>
      <p>Orange County, California, is often associated with sunny beaches, family-friendly attractions like Disneyland, and upscale living. However, beneath its bright exterior lies a darker side—one filled with eerie legends, ghost stories, and haunted locations. From historic buildings to local landmarks, the county has a number of spots said to be home to restless spirits and unexplained phenomena. Let’s take a look at some of the most haunted places in Orange County and the stories that surround them.</p>
      <div className="prose">
        {Array.isArray(post.body) && (
          <PortableText value={post.body} components={ImageCustomComponent} />
        )}
      </div>
    </main>
  );
}
