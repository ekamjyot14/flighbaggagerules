export interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  ogImage?: string;
  ogType?: string;
  noindex?: boolean;
  schema?: object | object[];
  hreflangAlternates?: Array<{ hreflang: string; href: string }>;
  locale?: string;
}

export function buildTitle(title: string, suffix = 'FlightBaggageRules.com'): string {
  if (title.includes('FlightBaggageRules')) return title;
  return `${title} — ${suffix}`;
}

export function buildOgImageUrl(title: string, description: string): string {
  // Static OG image; replace with dynamic generation if needed
  return '/og-default.png';
}

export function buildWebsiteSchema(site: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: 'FlightBaggageRules.com',
    url: site,
    description: 'Check flight baggage rules, international flight baggage weight limits, carry-on sizes, and checked baggage allowances for 50+ airlines worldwide.',
    potentialAction: {
      '@type': 'SearchAction',
      target: {
        '@type': 'EntryPoint',
        urlTemplate: `${site}/check?airline={airline}&item={item}`,
      },
      'query-input': 'required name=airline required name=item',
    },
  };
}

export function buildOrganizationSchema(name: string, url: string): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name,
    url,
    logo: url + '/favicon.svg',
  };
}

export function buildBreadcrumbSchema(items: Array<{ name: string; url: string }>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

export function buildFAQSchema(faqs: Array<{ question: string; answer: string }>): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((faq) => ({
      '@type': 'Question',
      name: faq.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: faq.answer,
      },
    })),
  };
}

export function buildArticleSchema(params: {
  title: string;
  description: string;
  url: string;
  publishDate: string;
  author: string;
  image?: string;
}): object {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: params.title,
    description: params.description,
    url: params.url,
    datePublished: params.publishDate,
    author: {
      '@type': 'Person',
      name: params.author,
    },
    publisher: {
      '@type': 'Organization',
      name: 'FlightBaggageRules.com',
      logo: {
        '@type': 'ImageObject',
        url: 'https://flightbaggagerules.com/favicon.svg',
      },
    },
    ...(params.image ? { image: params.image } : {}),
  };
}
