import Link from "next/link";

export function Breadcrumb({
  current,
  parents,
}: {
  current: string;
  parents?: { name: string; href: string }[];
}) {
  const trail = parents ?? [{ name: "Home", href: "/" }];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="crumb">
        {trail.map((item) => (
          <li key={item.href} className="contents">
            <Link href={item.href}>{item.name}</Link>
            <span aria-hidden="true">/</span>
          </li>
        ))}
        <li aria-current="page" className="text-foreground">
          {current}
        </li>
      </ol>
    </nav>
  );
}
