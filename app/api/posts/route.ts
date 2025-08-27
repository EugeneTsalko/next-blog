import { NextResponse } from "next/server";
import { posts } from "./posts";

export async function GET(req: Request) {
  // here you can go to DB
  const { searchParams } = new URL(req.url);
  const query = searchParams.get("q");
  let currentPosts = posts;

  if (query) {
    currentPosts = posts.filter((post) =>
      post.title.toLowerCase().includes(query.toLowerCase())
    );
  }
  // work on http://localhost:3000/api/posts?q=napoli
  return NextResponse.json(currentPosts);
}

export async function POST(req: Request) {
  const body = await req.json();

  console.log(body);

  return NextResponse.json({ body });
}
