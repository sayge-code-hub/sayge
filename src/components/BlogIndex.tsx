"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { blockSearchText, type BlogPost } from "@/lib/blog";

function escapeRegExp(value: string) {
  return value.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function matchesQuery(post: BlogPost, query: string) {
  const haystack = [
    post.title,
    post.dek,
    post.dateLabel,
    ...post.body.map((block) => blockSearchText(block)),
  ]
    .join(" ")
    .toLowerCase();

  const terms = query.split(/\s+/).filter(Boolean);

  return terms.every((term) => {
    if (term.length <= 2) {
      return new RegExp(`\\b${escapeRegExp(term)}\\b`, "i").test(haystack);
    }
    return haystack.includes(term);
  });
}

export function BlogIndex({ posts }: { posts: BlogPost[] }) {
  const [query, setQuery] = useState("");
  const normalised = query.trim().toLowerCase();

  const results = useMemo(() => {
    if (!normalised) return posts;
    return posts.filter((post) => matchesQuery(post, normalised));
  }, [posts, normalised]);

  return (
    <>
      <div className="mt-8 flex flex-col gap-8 md:flex-row md:items-end md:justify-between md:gap-16">
        <div>
          <h1 className="font-display text-[clamp(2rem,4.5vw,2.85rem)] leading-[1.08] tracking-tight text-foreground">
            Blog
          </h1>
          <p className="mt-4 max-w-[36ch] text-[16px] leading-7 text-muted md:text-[17px] md:leading-8">
            Short notes on software, products and the work of building well.
          </p>
        </div>
        <div className="w-full md:max-w-[22rem]">
          <label htmlFor="blog-search" className="sr-only">
            Search notes
          </label>
          <input
            id="blog-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Search notes"
            autoComplete="off"
            spellCheck={false}
            className="page-control"
          />
        </div>
      </div>

      {results.length === 0 ? (
        <p className="mt-12 text-[16px] leading-7 text-muted">
          No notes match that search.
        </p>
      ) : (
        <ol className="mt-12 grid border-t border-line md:grid-cols-2">
          {results.map((post, index) => (
            <li
              key={post.slug}
              className="border-b border-line md:odd:border-r md:odd:pr-10 md:even:pl-10"
            >
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-[2.25rem_minmax(0,1fr)] gap-x-3 py-7 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[6px] focus-visible:outline-[var(--brand)] md:grid-cols-[2.5rem_minmax(0,1fr)] md:gap-x-4 md:py-8"
              >
                <span className="pt-[5px] text-[11px] tracking-[0.14em] text-brand">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <p className="text-[13px] leading-5 text-muted">
                    {post.dateLabel}
                    <span aria-hidden="true"> · </span>
                    {post.readingTime}
                  </p>
                  <h2 className="mt-1.5 text-[1.2rem] leading-snug tracking-tight text-foreground transition-colors group-hover:text-brand md:text-[1.3rem] md:leading-[1.35]">
                    {post.title}
                  </h2>
                  <p className="mt-2 text-[15px] leading-6 text-muted md:leading-7">
                    {post.dek}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ol>
      )}
    </>
  );
}
