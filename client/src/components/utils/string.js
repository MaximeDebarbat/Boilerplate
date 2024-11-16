
export const urlify = (websiteUrl, locale, pathname) => {
    // Trim any leading or trailing slashes from the input parts
    const trimmedUrl = websiteUrl.replace(/\/+$/, ''); // Remove trailing slashes from website URL
    const trimmedLocale = locale.replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes from locale
    const trimmedPathname = pathname.replace(/^\/+|\/+$/g, ''); // Remove leading/trailing slashes from pathname

    // Combine the parts to form the final URL
    return `${trimmedUrl}/${trimmedLocale}/${trimmedPathname}`;
}

export const cleanPath = (path, locale_list) => {
    const segments = path.split('/').filter(segment => segment && !locale_list.includes(segment));
    const res = '/' + segments.join('.');
    return res;
}