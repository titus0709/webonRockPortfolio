export function LocalBusinessSchema() {
  const schema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "WebOnRock",
    "description": "Web development agency specializing in websites, mobile apps, SEO, and branding for local businesses",
    "url": "https://webonrock.com",
    "telephone": "+1-234-567-890",
    "email": "hello@webonrock.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "123 Business St, Suite 100",
      "addressLocality": "Your City",
      "addressRegion": "ST",
      "postalCode": "12345",
      "addressCountry": "US"
    },
    "priceRange": "$$",
    "openingHours": "Mo-Fr 09:00-18:00"
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function ServiceSchema({ 
  name, 
  description, 
  url 
}: { 
  name: string; 
  description: string; 
  url: string; 
}) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": name,
    "provider": {
      "@type": "Organization",
      "name": "WebOnRock"
    },
    "description": description,
    "url": url
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function BreadcrumbSchema({ items }: { items: { name: string; url: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": items.map((item, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": item.name,
      "item": item.url
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}

export function FAQSchema({ faqs }: { faqs: { question: string; answer: string }[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}