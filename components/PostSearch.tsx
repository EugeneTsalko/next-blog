"use client";

import { usePosts } from "@/store";
import React, { FormEventHandler, useState } from "react";

const PostSearch = () => {
  const [search, setSearch] = useState("");
  const getPostsBySearch = usePosts((state) => state.getPostsBySearch);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    await getPostsBySearch(search);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="search"
        placeholder="Search..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button type="submit">Search</button>
    </form>
  );
};

export default PostSearch;
