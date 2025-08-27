export const getAllPosts = async () => {
  const response = await fetch("/api/posts");

  if (!response.ok) throw new Error("Unable to get all posts.");

  return response.json();
};

export const getPostsBySearch = async (search: string) => {
  const response = await fetch(`/api/posts?q=${search}`);

  if (!response.ok) throw new Error("Unable to get posts by search.");

  return response.json();
};
