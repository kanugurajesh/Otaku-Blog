import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post?.body.html) {
    return (
      <div className="h-screen text-center flex flex-col justify-center gap-6 font-semibold items-center">
        <span className="text-4xl text-red-500">Post not found !</span>
        <Link href="/" className="border-2 border-black p-2 rounded-md px-3 text-white bg-black hover:bg-white hover:text-black transition-all duration-200 ease-in-out">← Home Page</Link>
      </div>
    );
  }

  return (
    <article className="max-w-xl mx-auto flex flex-col gap-2 my-7">
      <h1 className="text-3xl font-bold text-center">{post.title}</h1>
      <time
        dateTime={post.date}
        className="text-2xl font-bold text-center mb-5"
      >
        {new Date(post.date).toLocaleDateString()}
      </time>
      <div
        className="text-sm [&>*]:mb-3 [&>*:last-child]:mb-0"
        dangerouslySetInnerHTML={{ __html: post.body.html }}
      />
    </article>
  );
}
