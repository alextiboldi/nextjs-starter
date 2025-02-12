import * as m from '@/paraglide/messages';

export const siteConfig = {
  title: m.meta_title,
  description: m.meta_description,
  keywords: () => [
    m.meta_keyword_nextjs(),
    m.meta_keyword_react(),
    m.meta_keyword_nextjs_starter(),
    m.meta_keyword_nextjs_boilerplate(),
    m.meta_keyword_starter_template(),
    m.meta_keyword_tailwindcss(),
    m.meta_keyword_typescript(),
    m.meta_keyword_shadcn_ui(),
    m.meta_keyword_next_auth(),
    m.meta_keyword_prisma(),
  ],
  url: () => process.env.APP_URL,
  googleSiteVerificationId: () => process.env.GOOGLE_SITE_VERIFICATION_ID || '',
};
