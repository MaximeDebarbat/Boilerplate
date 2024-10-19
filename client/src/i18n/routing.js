import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
import { locale_list, default_locale } from '@/config';

export const routing = defineRouting({
  locales: locale_list,
  defaultLocale: default_locale
});
 
// Lightweight wrappers around Next.js' navigation APIs
// that will consider the routing configuration
export const {Link, getPathname, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);