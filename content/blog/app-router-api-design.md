---
title: "Shipping Production-Ready APIs with the Next.js App Router"
date: "2024-09-12"
excerpt: "How I design resilient API layers directly inside the App Router using modern caching patterns and edge runtimes."
tags: ["Next.js", "API", "Edge"]
---

Next.js 15 finally makes the App Router feel like a first-class backend framework. My go-to stack now keeps public pages, authenticated dashboards, and API handlers all co-located under `src/app`.

## Plan contracts first

I still start each API by sketching the contract. A minimal zod schema and a TypeScript interface keep the handler honest.

```ts
const createPostSchema = z.object({
  title: z.string().min(4),
  body: z.string().min(32),
});
```

Once the request contract is set, I add response helpers so the handler never returns ad-hoc shapes.

## Embrace built-in caching

`revalidateTag` and `cache` deliver most of what I previously used Redis for. Each route handler declares what data it depends on, and React automatically revalidates the right fragments when mutations land.

## Ship from the edge when it matters

The fastest optimization I shipped this year simply moved one heavy analytics handler to the edge runtime. Cold starts vanished and the endpoint now consistently responds in <120ms worldwide.

If you have not revisited your API layer since the App Router matured, it is worth a weekend. The DX improvements alone pay for the migration.
