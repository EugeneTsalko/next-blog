"use client";

import { usePosts } from "@/store";
import Link from "next/link";
import { useEffect } from "react";

const Posts = () => {
  const { posts, loading, getAllPosts, getPostsBySearch } = usePosts();

  useEffect(() => {
    getAllPosts();
  }, [getAllPosts]);

  return loading ? (
    <h3>Loading...</h3>
  ) : (
    <ul>
      {posts.map((post: any) => (
        <li key={post.id}>
          <Link href={`/blog/${post.id}`}>{post.title}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Posts;
