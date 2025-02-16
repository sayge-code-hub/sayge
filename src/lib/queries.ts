import { client } from './sanity';
import type { BlogPost } from './sanity';

export async function getAllPosts(): Promise<BlogPost[]> {
  return await client.fetch(
    `*[_type == "post"] | order(publishedAt desc) {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      author->{
        name,
        image
      },
      excerpt,
      categories[]->{
        title
      },
      seo
    }`
  );
}

export async function getPostBySlug(slug: string): Promise<BlogPost> {
  return await client.fetch(
    `*[_type == "post" && slug.current == $slug][0]{
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      author->{
        name,
        image
      },
      body,
      excerpt,
      categories[]->{
        title
      },
      seo
    }`,
    { slug }
  );
}

export async function getRelatedPosts(currentPostId: string, categoryTitles: string[]): Promise<BlogPost[]> {
  return await client.fetch(
    `*[_type == "post" && _id != $currentPostId && count((categories[]->title)[@ in $categories]) > 0] | order(publishedAt desc)[0...3] {
      _id,
      title,
      slug,
      mainImage,
      publishedAt,
      excerpt,
      categories[]->{
        title
      }
    }`,
    {
      currentPostId,
      categories: categoryTitles,
    }
  );
}
