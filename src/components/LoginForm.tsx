"use client";

import { useState, type FormEvent } from "react";
import { siteEmail } from "@/lib/site";

type Role = "employee" | "employer" | "client";

const roles: { id: Role; label: string }[] = [
  { id: "employee", label: "Employee" },
  { id: "employer", label: "Employer" },
  { id: "client", label: "Client" },
];

const fieldClass =
  "mt-1.5 w-full border border-line bg-surface px-4 py-2.5 text-[15px] tracking-tight text-foreground outline-none transition placeholder:text-muted/70 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]";

function PersonIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="11" cy="7" r="3" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M4.5 18c.6-3.2 3.1-5 6.5-5s5.9 1.8 6.5 5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M4.5 19V6.5L11 3.5l6.5 3V19"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M4.5 19h13" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M9 19v-4h4v4"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
      <path d="M8 9h.01M11 9h.01M14 9h.01M8 12h.01M11 12h.01M14 12h.01" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

function ClientIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      aria-hidden="true"
    >
      <circle cx="7.5" cy="7" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="14.5" cy="7.5" r="2.5" stroke="currentColor" strokeWidth="1.3" />
      <path
        d="M3.5 18c.5-2.6 2.4-4.2 5-4.2 1.1 0 2.1.3 2.9.9"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <path
        d="M11.2 14.8c.8-.5 1.8-.8 2.9-.8 2.6 0 4.5 1.6 5 4.2"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function RoleIcon({ id }: { id: Role }) {
  if (id === "employee") return <PersonIcon />;
  if (id === "employer") return <BuildingIcon />;
  return <ClientIcon />;
}

export function LoginForm() {
  const [role, setRole] = useState<Role>("employee");
  const [submitted, setSubmitted] = useState(false);
  const selected = roles.find((item) => item.id === role)!;

  const onSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <form onSubmit={onSubmit} className="mt-6 max-w-[52rem] lg:max-w-[56rem]">
      <div
        role="group"
        aria-label="Who is signing in"
        className="grid gap-3 sm:grid-cols-3"
      >
        {roles.map((option) => {
          const active = role === option.id;
          return (
            <button
              key={option.id}
              type="button"
              aria-pressed={active}
              onClick={() => {
                setRole(option.id);
                setSubmitted(false);
              }}
              className={
                active
                  ? "flex min-h-[4.75rem] items-center justify-between gap-3 border border-[var(--brand)] bg-white px-5 py-4 text-left text-foreground transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
                  : "flex min-h-[4.75rem] items-center justify-between gap-3 border border-line bg-white px-5 py-4 text-left text-muted transition hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
              }
            >
              <span className="flex items-center gap-2.5">
                <RoleIcon id={option.id} />
                <span className="font-display text-[1.35rem] leading-none tracking-tight text-foreground">
                  {option.label}
                </span>
              </span>
              {active ? (
                <span className="text-[11px] tracking-[0.14em] text-brand uppercase">
                  Selected
                </span>
              ) : null}
            </button>
          );
        })}
      </div>

      <label className="mt-6 block text-[13px] tracking-tight text-muted">
        Email
        <input
          name="email"
          type="email"
          autoComplete="username"
          required
          className={fieldClass}
        />
      </label>
      <label className="mt-4 block text-[13px] tracking-tight text-muted">
        Password
        <input
          name="password"
          type="password"
          autoComplete="current-password"
          required
          className={fieldClass}
        />
      </label>
      <input type="hidden" name="role" value={role} />

      <button type="submit" className="hero-cta-primary mt-6">
        Sign in as {selected.label.toLowerCase()}
      </button>

      {submitted ? (
        <p className="mt-4 text-[15px] leading-7 text-brand" role="alert">
          Something went wrong. Write to us at{" "}
          <a
            href={`mailto:${siteEmail}`}
            className="underline underline-offset-[5px] hover:text-foreground focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-[3px] focus-visible:outline-[var(--brand)]"
          >
            {siteEmail}
          </a>
          .
        </p>
      ) : null}
    </form>
  );
}
