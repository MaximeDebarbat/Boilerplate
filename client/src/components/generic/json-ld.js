
import { locale_list, 
    website_url,
    default_title,
    default_description,
    organization_name,
    organization_logo } from "@/config";
import { urlify } from "@components/utils/string";
import { getTranslations } from 'next-intl/server';

export const generateJsonLd = async ({ locale, pathname }) => {

    const t = await getTranslations({locale, namespace: pathname});
    
    const jsonLdBase = {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "publisher": {
        "@type": "Organization",
        "name": organization_name,
        "logo": {
          "@type": "ImageObject",
          "url": organization_logo
        }
      },
      "mainEntity": {
        "@type": "Organization",
        "name": organization_name,
      }
    };
  
    // Enriching the base object with page-specific data and locales
    const enrichedJsonLd = {
      ...jsonLdBase,
      "name": t('metadata.title') || default_title, 
      "description": t('metadata.description') || default_description, // Should be in the locale-specific language
      "url": urlify(website_url, locale, pathname),
      "inLanguage": locale,
      "alternates": {
        "canonical": urlify(website_url, locale, pathname),
        "languages": locale_list.reduce((acc, locale) => {
          acc[locale] = urlify(website_url, locale, pathname);
          return acc;
        }, {})
      }
    };

    return enrichedJsonLd;
  }
  