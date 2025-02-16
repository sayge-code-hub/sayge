import { createClient } from '@sanity/client';
import imageUrlBuilder from '@sanity/image-url';

export const client = createClient({
  projectId: 'uwk57dcd',
  dataset: 'production',
  apiVersion: '2024-02-16',
  useCdn: true,
  withCredentials: true,
});

export const builder = imageUrlBuilder(client);

export function urlFor(source: SanityImageSource) {
  return builder.image(source);
}

export interface BlogPost {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  mainImage: {
    asset: {
      _ref: string;
    };
  };
  publishedAt: string;
  author: {
    name: string;
    image: {
      asset: {
        _ref: string;
      };
    };
  };
  excerpt: string;
  body: any[];
  categories: Array<{
    title: string;
  }>;
  seo: {
    metaTitle: string;
    metaDescription: string;
    keywords: string[];
  };
}
