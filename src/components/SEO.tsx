import { Helmet } from 'react-helmet-async';

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  type?: string;
  schema?: any;
}

export default function SEO({ 
  title = 'Sayge - Your Technology Partner',
  description = 'Sayge is a leading technology company specializing in Flutter, Java, Python, AI, and cloud solutions. Partner with us for innovative digital solutions.',
  image = 'https://craftedbyaditya.github.io/sayge/logo.png',
  url = 'https://craftedbyaditya.github.io/sayge/',
  type = 'website',
  schema
}: SEOProps) {
  const baseSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Sayge",
    "url": "https://craftedbyaditya.github.io/sayge/",
    "logo": "https://craftedbyaditya.github.io/sayge/logo.png",
    "sameAs": [
      "https://www.linkedin.com/company/sayge-it/"
    ],
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-88585-06876",
      "contactType": "customer service",
      "email": "humans@sayge.com"
    },
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Nagpur, Pune, California, Frankfurt"
    }
  };

  return (
    <Helmet>
      {/* Basic meta tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      {/* Open Graph meta tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content={type} />

      {/* Twitter Card meta tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Structured data */}
      <script type="application/ld+json">
        {JSON.stringify(schema || baseSchema)}
      </script>
    </Helmet>
  );
}
