import { allPosts, Post } from "@/.contentlayer/generated";
import { parseISO } from "date-fns";
import { format } from "date-fns";
import Link from "next/link";

const PostCard = (post: Post) => (
  <div className="flex flex-col gap-2 w-full">
    <Link href={post.url}>
      <div className="font-semibold text-lg text-blue-500 relative inline-block w-auto group">
        {post.title}
        <span className="absolute top-7 left-0 w-full h-[3px] bg-blue-500 scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-300 ease-in-out"></span>
      </div>
    </Link>

    <time dateTime={post.date} className="font-semibold text-base">
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
    <div className="max-w-xl mx-auto flex flex-col gap-8 my-6">
      <h1 className="text-4xl font-bold text-center">📝 My Blog</h1>
      <ul className="flex flex-col gap-4 h-[82vh] overflow-y-scroll">
        {posts.map((post) => (
          <li key={post._id}>
            <PostCard {...post} />
          </li>
        ))}
      </ul>
    </div>
  );
}
