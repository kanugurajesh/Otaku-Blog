import { allPosts, Post } from "@/.contentlayer/generated";
import { parseISO } from "date-fns";
import { format } from "date-fns";
import Link from "next/link";

const PostCard = (post: Post) => (
  <div className="flex flex-col gap-1 w-full">
    <Link href={post.url}>
      <div className="font-semibold text-lg border-b-4 text-blue-500 border-white hover:border-blue-500 transition-all duration-300 ease-in-out inline-block w-auto">
        {post.title}
      </div>
    </Link>
    <time dateTime={post.date}>
      {format(parseISO(post.date), "MMMM dd, yyyy")}
    </time>
    <p>{post.summary}</p>
  </div>
);

export default function Home() {
  const posts = allPosts.sort((a, b) => {
    return parseISO(b.date).getTime() - parseISO(a.date).getTime();
  });

  return (
    <div className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-center">Hello World</h1>
      <ul className="flex flex-col gap-4 mt-4">
        {posts.map((post) => (
          <li key={post._id}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
