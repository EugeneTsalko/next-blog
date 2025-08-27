This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

# Next

## Handlers API

Для создания API-роутов внутри `/app` директории, как правило, создается вложенная директория `/api` со своими папками, внутри которых создается файл с названием `route.ts`.

Если файл находит по пути `/app/api/posts/`, то адрес запроса будет `/api/posts`.

Сам `route.ts` должен экспортировать объект с функциями по именам HTTP методов: `GET`, `POST`, `DELETE` и так далее.

Например:

```typescript
export async function GET(req: Request) {
  return NextResponse.json(currentPosts);
}
```

### Правила использования API хэндлеров и страниц

| Page               | Route            | Result      |
| ------------------ | ---------------- | ----------- |
| app/page.js        | app/route.js     | 💥 Conflict |
| app/page.js        | app/api/route.js | 👌 Valid    |
| app/[user]/page.js | app/api/route.js | 👌 Valid    |

### Извлечение данных

```typescript
// получение квери параметров

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);

  const query = searchParams.get("q");

  // some logic

  return NextResponse.json(currentPosts);
}
```

```typescript
// получение тела запроса

export async function POST(req: Request) {
  const body = await req.json();

  console.log(body);

  return NextResponse.json({ message: "done" });
}
```

```typescript
// получение параметров URL

export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = params?.id;

  // some logic for delete post by id

  return NextResponse.json({ id });
}
```

### Встроенные функции

```typescript
import { headers, cookies } from "next/headers";

export async function GET(req: Request) {
  const headersList = headers();
  const cookiesList = cookies();

  const type = headersList.get("Content-Type");
  const Cookie_1 = cookiesList.get("Cookie_1")?.value;

  return NextResponse.json({});
}
```

```typescript
import { redirect } from "next/navigation";

export async function GET(request: Request) {
  redirect("https://nextjs.org/");
}
```
