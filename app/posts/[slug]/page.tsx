import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import Mdx from "@/app/components/mdx-components";
import { format, parseISO } from "date-fns";

interface PostPageProps {
  params: {
    slug: string;
  };
}

export default function PostPage({ params }: PostPageProps) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug);

  if (!post?.body.code) {
    return (
      <div className="h-screen text-center flex flex-col justify-center gap-6 font-semibold items-center">
        <span className="text-4xl text-red-500">Post not found !</span>
        <Link
          href="/"
          className="border-2 border-black p-2 rounded-md px-3 text-white bg-black hover:bg-white hover:text-black transition-all duration-200 ease-in-out"
        >
          ← Home Page
        </Link>
      </div>
    );
  }

  return (
    <article className="max-w-xl mx-auto flex flex-col gap-5 my-7 items-start">
      <div className="flex items-center flex-row-reverse gap-6 justify-center">
        <div className="flex gap-1 flex-col">
          <h1 className="text-3xl font-bold text-center text-blue-500">
            {post.title}
          </h1>
          <time
            dateTime={post.date}
            className="font-semibold text-center text-lg mb-4"
          >
            {format(parseISO(post.date), "MMMM dd, yyyy")}
          </time>
        </div>
        <Link href="/" className="text-4xl border-2 border-black bg-black inline-block rounded-full w-10 h-10 relative text-white cursor-pointer hover:text-black hover:bg-white transition-all ease-in-out duration-300">
          <span className="absolute bottom-[2.5px] left-1">&larr;</span>
        </Link>
      </div>
      <div>
        <Mdx code={post.body.code} />
      </div>
    </article>
  );
}
