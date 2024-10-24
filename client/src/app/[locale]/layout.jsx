import Script from 'next/script'
import { headers } from "next/headers";
import {NextIntlClientProvider} from 'next-intl';
import {getTranslations} from 'next-intl/server';

import "../globals.css";

import { locale_list, 
         author,
         website_url,
         default_title,
         default_description,
         default_keywords } from "@/config";
import {cleanPath} from "@/components/utils/string";
import {generateJsonLd} from "@/components/generic/json-ld";


export const generateMetadata = async ({ params: { locale } }) => {

  const pathname = cleanPath(headers().get('x-pathname'), locale_list);
  const t = await getTranslations({locale, namespace: pathname});

  const title = t('metadata.title') || default_title;
  const description = t('metadata.description') || default_description;
  const keywords = t('metadata.keywords') || default_keywords;

  return {
    title: title,
    description: description,
    keywords: keywords,
    authors: [{ name: author }],
    alternates: {
      canonical: website_url + pathname,
      languages: locale_list.reduce((acc, locale) => {
        acc[locale] = website_url + `/${locale}${pathname}`;
        return acc;
      }, {})
    }
  };
}

const RootLayout = async ({ children, params: {locale} }) => {

  const pathname = cleanPath(headers().get('x-pathname'), locale_list);
  const jsonLd = await generateJsonLd({ locale, pathname });

  return (
    <html lang={locale} className="scroll-smooth" data-theme="emerald">
      <body
        className="antialiased"
      >
        <Script type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <NextIntlClientProvider locale={locale}>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

export default RootLayout;