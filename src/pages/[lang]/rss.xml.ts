import rss from '@astrojs/rss';
import type { APIRoute } from 'astro';
import { locales, type Locale } from '@/i18n/ui';
import { useTranslations, localePath } from '@/i18n/utils';
import { entrySlug, getBlogPosts } from '@/lib/content';

export function getStaticPaths() {
  return locales.map((lang) => ({ params: { lang } }));
}

export const GET: APIRoute = async (context) => {
  const lang = context.params.lang as Locale;
  const t = useTranslations(lang);
  const posts = await getBlogPosts(lang);

  return rss({
    title: t('site.title'),
    description: t('blog.description'),
    site: context.site!,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: localePath(lang, `/blog/${entrySlug(post)}`),
    })),
    customData: `<language>${lang}</language>`,
  });
};
