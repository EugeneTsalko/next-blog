import { Metadata } from "next";
import Link from "next/link";
import React from "react";

async function getData() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 60,
    },
  });

  if (!response.ok) {
    throw Error("Unable to fetch posts");
  }

  return response.json();
}

export const metadata: Metadata = {
  title: "Blog | Next App",
};

const BlogPage = async () => {
  const posts = await getData();
  return (
    <>
      <h1>Blog Page</h1>
      <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
};

export default BlogPage;
