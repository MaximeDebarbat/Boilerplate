import {defineRouting} from 'next-intl/routing';
import {createSharedPathnamesNavigation} from 'next-intl/navigation';
 
import { locale_list, default_locale } from '@/config';

export const routing = defineRouting({
  locales: locale_list,
  defaultLocale: default_locale
});
 
export const {Link, getPathname, redirect, usePathname, useRouter} =
  createSharedPathnamesNavigation(routing);