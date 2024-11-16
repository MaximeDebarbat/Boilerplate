
import { locale_list, default_locale, website_url } from "@/config";

function generateSitemapPaths(json, excludeKeys = []) {
    const paths = [];

    function traverse(obj, currentPath) {

        for (const key in obj) {
            if (Object.prototype.hasOwnProperty.call(obj, key)) {
                if (excludeKeys.includes(key)) {
                    continue;
                }
                const value = obj[key];
                if (typeof value === 'object' && !Array.isArray(value)) {
                    if (Object.keys(value).some(subKey => subKey !== 'metadata' && subKey !== 'messages')) {
                        traverse(value, `${currentPath}/${key}`);
                    } else {
                        const path = `${currentPath.replace("//", "/")}/${key.replace("//", "/")}`
                        paths.push(path.replace("//", "/"));
                    }
                }
            }
        }
    }
    traverse(json, '');
    return paths;
}


export default async function sitemap() {
    const dictionnary = await import(`../../messages/${default_locale}.json`);
    const to_exclude = ['general', 'not-found', 'default'];
    const paths = generateSitemapPaths(dictionnary, to_exclude);
    const sitemap = [];

    for (const path of paths) {
        let elt = {
            'url': `${website_url}${path}`.replace("//", "/"),
            'lastModified': new Date(),
            'alternates': {
                'languages': {}
            }
        };

        for (const locale of locale_list) {
            elt['alternates']['languages'][locale] = `${website_url}/${locale}${path}`.replace("//", "/");
        }
        sitemap.push(elt);
    }

    return sitemap;
}
