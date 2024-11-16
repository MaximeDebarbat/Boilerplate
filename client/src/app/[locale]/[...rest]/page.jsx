
import { useTranslations } from 'next-intl';
import Link from 'next/link';

const CatchAllPage = () => {

    const t = useTranslations('not-found');

    return (
      <div className="h-[100vh] w-full flex flex-col justify-center items-center">
        <h2 className="text-4xl black">{t("title")}</h2>
        <p className="bold">{t("description")}</p>
        <Link href="/">
            <button className="btn btn-primary mt-4">{t("button")}</button>
        </Link>
      </div>
    )
  }

export default CatchAllPage;