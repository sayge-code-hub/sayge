import Link from "next/link";
import type { BlogBlock } from "@/lib/blog";

const linkClass =
  "text-foreground underline decoration-foreground/25 underline-offset-[5px] transition hover:text-brand hover:decoration-brand focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]";

function RichText({ text }: { text: string }) {
  const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g);

  return (
    <>
      {parts.map((part, index) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/);
        if (!match) return <span key={index}>{part}</span>;
        const [, label, href] = match;
        if (href.startsWith("/")) {
          return (
            <Link key={index} href={href} className={linkClass}>
              {label}
            </Link>
          );
        }
        return (
          <a key={index} href={href} className={linkClass}>
            {label}
          </a>
        );
      })}
    </>
  );
}

export function BlogArticleBody({ body }: { body: BlogBlock[] }) {
  return (
    <>
      {body.map((block, index) => {
        if (block.type === "h2") {
          return (
            <h2 key={index} className="blog-article-h2">
              {block.text}
            </h2>
          );
        }
        if (block.type === "h3") {
          return (
            <h3 key={index} className="blog-article-h3">
              {block.text}
            </h3>
          );
        }
        if (block.type === "quote") {
          return (
            <blockquote key={index} className="blog-article-quote">
              {block.text}
            </blockquote>
          );
        }
        if (block.type === "ul" || block.type === "ol") {
          const Tag = block.type === "ul" ? "ul" : "ol";
          return (
            <Tag
              key={index}
              className={
                block.dense
                  ? "blog-article-list blog-article-list-dense"
                  : "blog-article-list"
              }
            >
              {block.items.map((item) => (
                <li key={item}>
                  <RichText text={item} />
                </li>
              ))}
            </Tag>
          );
        }
        if (block.type === "table") {
          return (
            <div key={index} className="blog-article-table-wrap">
              <table
                className={
                  block.wide
                    ? "blog-article-table blog-article-table-wide"
                    : "blog-article-table"
                }
              >
                <thead>
                  <tr>
                    {block.columns.map((column) => (
                      <th key={column} scope="col">
                        {column}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {block.rows.map((row) => (
                    <tr key={row.join("|")}>
                      {row.map((cell, cellIndex) => (
                        <td key={`${cell}-${cellIndex}`}>{cell}</td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          );
        }
        return (
          <p key={index} className="blog-article-p">
            <RichText text={block.text} />
          </p>
        );
      })}
    </>
  );
}
