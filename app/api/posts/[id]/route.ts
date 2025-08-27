import { NextResponse } from "next/server";
import { headers, cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params.id;

  const headerList = await headers();
  const type = headerList.get("Content-type");

  const cookiesList = await cookies();
  const cookieName = cookiesList.get("cookieName")?.value;

  //logic delete post in DB

  //   redirect('/blog') instead of return for example

  return NextResponse.json({ id });
  //work on DELETE localhost/api/posts/{id}
}
