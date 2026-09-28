export const siteUrl = "https://sayge.in";
export const siteName = "Sayge";
export const siteVersion = "0.3.0";
export const siteEmail = "humans@sayge.in";
export const sitePhoneDisplay = "+91 87886 81499";
export const sitePhoneHref = "tel:+918788681499";
export const siteLogo = `${siteUrl}/sayge-mark.png`;

export const homepageTitle =
  "Sayge | Technology Partner for Software, Products & Teams";

export const homepageDescription =
  "Sayge helps businesses make better technology decisions and build digital products, software and technology teams across India, the UAE and Germany.";

export const aboutTitle = "About Sayge | Technology Partner";
export const aboutDescription =
  "Sayge is a technology partner helping businesses make better technology decisions, build digital products and extend their engineering capabilities.";

export const contactTitle = "Contact Sayge | Start a Conversation";
export const contactDescription =
  "Talk to Sayge about your next digital product, software project, technology challenge or engineering team.";

export const customSoftwarePath = "/services/custom-software-development";
export const customSoftwareTitle = "Custom Software Development | Sayge";
export const customSoftwareDescription =
  "Sayge designs and builds custom software around your business processes, products and goals—from architecture through production.";

export const privacyPath = "/privacy";
export const privacyTitle = "Privacy Policy | Sayge";
export const privacyDescription =
  "Read Sayge's privacy policy to understand how information may be handled when using the Sayge website or contacting our team.";

export const legalNoticePath = "/legal-notice";
export const legalNoticeTitle = "Legal Notice | Sayge";
export const legalNoticeDescription =
  "Legal information and website notices for Sayge.";

export const loginPath = "/login";
export const loginTitle = "Sign in | Sayge";
export const loginDescription =
  "Sign in to Sayge as an employee, employer or client.";

export const blogPath = "/blog";
export const blogTitle = "Blog | Sayge";
export const blogDescription =
  "Notes from Sayge on software, products and the work of building well.";

export function absoluteUrl(path: string) {
  return new URL(path, `${siteUrl}/`).href;
}

export const organizationJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${siteUrl}/#organization`,
  name: siteName,
  url: `${siteUrl}/`,
  logo: siteLogo,
  email: siteEmail,
};

export const ogImage = {
  url: `${siteUrl}/og.png`,
  width: 1200,
  height: 630,
  alt: "Sayge — Technology, thoughtfully engineered.",
  type: "image/png",
};

export const websiteJsonLd: Record<string, unknown> = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${siteUrl}/#website`,
  name: siteName,
  url: `${siteUrl}/`,
  publisher: {
    "@id": `${siteUrl}/#organization`,
  },
};

export function breadcrumbJsonLd(
  items: { name: string; path: string }[],
): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: absoluteUrl(item.path),
    })),
  };
}

export function aboutPageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "AboutPage",
    name: aboutTitle,
    description: aboutDescription,
    url: absoluteUrl("/about"),
    isPartOf: { "@id": `${siteUrl}/#website` },
    about: { "@id": `${siteUrl}/#organization` },
  };
}

export function contactPageJsonLd(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: contactTitle,
    description: contactDescription,
    url: absoluteUrl("/contact"),
    isPartOf: { "@id": `${siteUrl}/#website` },
  };
}

export function webPageJsonLd({
  name,
  description,
  path,
}: {
  name: string;
  description: string;
  path: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name,
    description,
    url: absoluteUrl(path),
    isPartOf: { "@id": `${siteUrl}/#website` },
  };
}

export function customSoftwareJsonLd(): Record<string, unknown> {
  const url = absoluteUrl(customSoftwarePath);
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#webpage`,
        name: customSoftwareTitle,
        description: customSoftwareDescription,
        url,
        isPartOf: { "@id": `${siteUrl}/#website` },
        about: { "@id": `${url}#service` },
      },
      {
        "@type": "Service",
        "@id": `${url}#service`,
        name: "Custom software development",
        serviceType: "Custom software development",
        description: customSoftwareDescription,
        url,
        provider: { "@id": `${siteUrl}/#organization` },
        areaServed: ["India", "United Arab Emirates", "Germany"],
      },
    ],
  };
}
