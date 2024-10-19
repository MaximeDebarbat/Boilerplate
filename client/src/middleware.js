import createMiddleware from 'next-intl/middleware';
import { locale_list, default_locale } from '@/config';


export default async function middleware(request) {

    const handleI18nRouting = createMiddleware({
        locales: locale_list,
        defaultLocale: default_locale,
    });
    request.headers.set("x-pathname", request.nextUrl.pathname);

    const response = await handleI18nRouting(request);

    return response;
}

export const config = {
    matcher: [
        '/',  // Match the root route

        // Match all routes except those starting with /api, /_next, /_vercel, and static files like favicon.ico
        '/((?!api|_next|_vercel|favicon.ico|.*\\..*).*)',
    ],
};