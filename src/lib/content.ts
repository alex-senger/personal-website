import { getCollection, type CollectionEntry } from 'astro:content';
import type { Locale } from '@/i18n/ui';

/** Strip the locale folder from a collection entry id: "en/my-post" -> "my-post" */
export function entrySlug(entry: { id: string }): string {
  return entry.id.split('/').slice(1).join('/');
}

export async function getBlogPosts(locale: Locale): Promise<CollectionEntry<'blog'>[]> {
  const posts = await getCollection(
    'blog',
    (entry) => entry.id.startsWith(`${locale}/`) && (!entry.data.draft || import.meta.env.DEV)
  );
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

export async function getProjects(locale: Locale): Promise<CollectionEntry<'projects'>[]> {
  const projects = await getCollection('projects', (entry) =>
    entry.id.startsWith(`${locale}/`)
  );
  return projects.sort((a, b) => a.data.order - b.data.order);
}

/** Rough reading time from Markdown source. */
export function readingMinutes(body: string | undefined): number {
  const words = (body ?? '').split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
