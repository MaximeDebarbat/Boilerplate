import React from "react";
import { useTranslations } from 'next-intl';
import { organization_name, jurisdiction, contact_email, website_url } from "@/config";

const TermsOfService = () => {
  const t = useTranslations("/legal.terms-of-service.messages");

  return (
    <div className="mx-auto max-w-3xl p-6 m-6 bg-white shadow-md rounded-lg space-y-6">
      <h1 className="text-4xl font-bold text-gray-800">{t("title")}</h1>
      <p className="text-gray-600">{t.rich("introduction", {
        organization_name: organization_name,
        website_url: website_url
      })}</p>

      <div className="space-y-8">
        <Section title={t("acceptance_of_terms.title")}>
          <p>{t("acceptance_of_terms.content")}</p>
        </Section>

        <Section title={t("modifications_to_terms.title")}>
          <p>{t("modifications_to_terms.content")}</p>
        </Section>

        <Section title={t("account_requirements.title")}>
          <p>{t("account_requirements.content")}</p>
        </Section>

        <Section title={t("user_conduct.title")}>
          <p>{t("user_conduct.content")}</p>
        </Section>

        <Section title={t("intellectual_property.title")}>
          <p>{t.rich("intellectual_property.content", {
            organization_name: organization_name
          })}</p>
        </Section>

        <Section title={t("termination.title")}>
          <p>{t("termination.content")}</p>
        </Section>

        <Section title={t("limitation_of_liability.title")}>
          <p>{t.rich("limitation_of_liability.content", {
            organization_name: organization_name
          })}</p>
        </Section>

        <Section title={t("warranty_disclaimer.title")}>
          <p>{t("warranty_disclaimer.content")}</p>
        </Section>

        <Section title={t("governing_law.title")}>
          <p>{t.rich("governing_law.content", {
            jurisdiction: jurisdiction
          })}</p>
        </Section>

        <Section title={t("contact_information.title")}>
          <p>{t.rich("contact_information.content", {
            contact_email: contact_email
          })}</p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }) => (
  <div className="section mb-6">
    <h2 className="text-2xl font-semibold text-gray-700 mb-4">{title}</h2>
    <div className="text-gray-600 space-y-2">{children}</div>
  </div>
);

export default TermsOfService;
