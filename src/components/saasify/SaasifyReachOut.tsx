"use client";

import { useState, type FormEvent } from "react";
import { siteEmail, sitePhoneDisplay, sitePhoneHref } from "@/lib/site";

export function SaasifyReachOut() {
  const [email, setEmail] = useState("");
  const [opened, setOpened] = useState(false);

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const address = email.trim();
    if (!address) return;
    const subject = "SaaSify — please reach out";
    const body = `Please reach out to me about SaaSify.\n\nMy email: ${address}\n`;
    window.location.href = `mailto:${siteEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    setOpened(true);
  }

  return (
    <form onSubmit={submit} className="sf-reach">
      <div className="sf-reach-field">
        <label className="sr-only" htmlFor="saasify-email">
          Email
        </label>
        <input
          id="saasify-email"
          name="email"
          type="email"
          required
          autoComplete="email"
          inputMode="email"
          placeholder="you@company.com"
          value={email}
          onChange={(event) => {
            setEmail(event.target.value);
            setOpened(false);
          }}
        />
        <button type="submit" className="sf-btn">
          Reach out
        </button>
      </div>
      <p className="sf-reach-alt">
        or call <a href={sitePhoneHref}>{sitePhoneDisplay}</a>
      </p>
      {opened ? <p className="sf-reach-note">Send the email that opened. We’ll reply in under 59 minutes.</p> : null}
    </form>
  );
}
