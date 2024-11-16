import Link from "next/link";

import { useTranslations } from "next-intl";
import { FaLinkedin } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

import Logo from "@/components/common/logo";

import { organization_name,
    facebook_url,
    instagram_url,
    linkedin_url,
 } from "@/config";

const Footer = () => {

    const t = useTranslations("general.footer");

    return(
        <>
            <footer className="footer bg-base-200 text-base-content p-10">
                <nav>
                    <h6 className="footer-title">{
                        t("services.title")
                    }</h6>
                    <Link href="" className="link link-hover">{
                        t("services.items.branding")
                    }</Link>
                    <Link href="" className="link link-hover">{
                        t("services.items.design")
                    }</Link>
                    <Link href="" className="link link-hover">{
                        t("services.items.marketing")
                    }</Link>
                    <Link href="" className="link link-hover">{
                        t("services.items.development")
                    }</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">{
                        t("company.title")    
                    }</h6>
                    <Link href="/about" className="link link-hover">{
                        t("company.items.about")
                    }</Link>
                    <Link href="/contact" className="link link-hover">{
                        t("company.items.contact")
                    }</Link>
                </nav>
                <nav>
                    <h6 className="footer-title">{
                        t("legal.title")
                    }</h6>
                    <Link href="/legal/terms-of-service" className="link link-hover">{
                        t("legal.items.terms_of_service")
                    }</Link>
                    <Link href="/legal/privacy-policy" className="link link-hover">{
                        t("legal.items.privacy_policy")
                    }</Link>
                </nav>
                </footer>
                <footer className="footer bg-base-200 text-base-content border-base-300 border-t px-10 py-4">
                <aside className="grid-flow-col items-center">
                    <Logo />
                    <p>
                        {organization_name}
                    </p>
                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">
                    <Link href={linkedin_url}>
                        <FaLinkedin size={30}/>
                    </Link>
                    <Link href={facebook_url}>
                        <FaFacebookSquare size={30}/>
                    </Link>
                    <Link href={instagram_url}>
                        <FaInstagram size={30}/>
                    </Link>
                    </div>
                </nav>
            </footer>
        </>
    )
};

export default Footer;