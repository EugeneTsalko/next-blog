"use client";

import Posts from "@/components/Posts";
import PostSearch from "@/components/PostSearch";
import { getAllPosts } from "@/services/getPosts";
import { useEffect, useState } from "react";

const BlogPage = () => {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    getAllPosts()
      .then(setPosts)
      .finally(() => setLoading(false));
  }, []);

  return (
    <>
      <h1>Blog Page</h1>
      <PostSearch onSearch={setPosts} />
      {loading ? <h3>Loading...</h3> : <Posts posts={posts} />}
    </>
  );
};

export default BlogPage;
