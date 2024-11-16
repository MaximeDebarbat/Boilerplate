import React from "react";
import { useTranslations } from 'next-intl';
import { organization_name, website_name, website_url } from "@/config";

const PrivacyPolicy = () => {
  const t = useTranslations("/legal.privacy-policy.messages");

  return (
    <div className="mx-auto max-w-3xl p-6 m-6 bg-white shadow-md rounded-lg space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">{t.rich("title", {
        organization_name: organization_name,
        website_name: website_name,
        website_url: website_url
      })}</h1>
      <p className="text-gray-600">{t.rich("introduction", {
        organization_name: organization_name,
        website_name: website_name,
        website_url: website_url
      })}</p>
      <p className="text-gray-600">{t.rich("intro_paragraph", {
        organization_name: organization_name,
        website_name: website_name,
        website_url: website_url
      })}</p>
      <p className="text-gray-600">{t("consent_paragraph")}</p>
      <p className="text-gray-600">{t.rich("terms_reference", {
        organization_name: organization_name,
        website_name: website_name,
        website_url: website_url
      })}</p>

      <div className="space-y-8">
        {/* Information Collection and Use Section */}
        <Section title={t("sections.information_collection_use.title")}>
          <p>{t("sections.information_collection_use.content")}</p>
        </Section>

        {/* Log Data Section */}
        <Section title={t("sections.log_data.title")}>
          <p>{t("sections.log_data.content")}</p>
        </Section>

        {/* Cookies Section */}
        <Section title={t("sections.cookies.title")}>
          <p>{t("sections.cookies.content")}</p>
          <p>{t("sections.cookies.usage")}</p>
        </Section>

        {/* Service Providers Section */}
        <Section title={t("sections.service_providers.title")}>
          <p>{t("sections.service_providers.content")}</p>
          <ul className="list-disc pl-6 text-gray-600">
            <li>{t("sections.service_providers.reasons.p1")}</li>
            <li>{t("sections.service_providers.reasons.p2")}</li>
            <li>{t("sections.service_providers.reasons.p3")}</li>
            <li>{t("sections.service_providers.reasons.p4")}</li>
          </ul>
          <p>{t("sections.service_providers.disclosure")}</p>
        </Section>

        {/* Security Section */}
        <Section title={t("sections.security.title")}>
          <p>{t("sections.security.content")}</p>
        </Section>

        {/* Links to Other Sites Section */}
        <Section title={t("sections.links_to_other_sites.title")}>
          <p>{t("sections.links_to_other_sites.content")}</p>
        </Section>

        {/* Children's Privacy Section */}
        <Section title={t("sections.children_privacy.title")}>
          <p>{t("sections.children_privacy.content")}</p>
        </Section>

        {/* Changes to Privacy Policy Section */}
        <Section title={t("sections.changes_to_privacy_policy.title")}>
          <p>{t("sections.changes_to_privacy_policy.content")}</p>
        </Section>

        {/* Contact Us Section */}
        <Section title={t("sections.contact_us.title")}>
          <p>{t("sections.contact_us.content")}</p>
        </Section>
      </div>
    </div>
  );
};

// Helper component for each section
const Section = ({ title, children }) => (
  <div className="section mb-6">
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
    <div className="text-gray-600 space-y-2">{children}</div>
  </div>
);

export default PrivacyPolicy;
