import React from "react"
import { Link, PageProps } from "gatsby"

import useLinkedData from "@hooks/useLinkedData"
import useContactPageData from "@hooks/pageData/useContactPageData"

import Layout from "../components/layout/Layout"
import Seo from "../components/layout/Seo"
import ContactUs from "../titles/contact-us.inline.svg"
import SocialMediaLink from "@components/UI/SocialMediaLink"
import FacebookIcon from "@icons/fa/Facebook.inline.svg"
import InstagramIcon from "@icons/fa/Instagram.inline.svg"
import TwitterIcon from "@icons/fa/Twitter.inline.svg"
import EmailIcon from "@icons/fa/Envelope.inline.svg"
import PhoneIcon from "@icons/fa/Phone.inline.svg"

import {
  contactContent,
  contactDetails,
  pageTitle,
  divider,
  socialMediaLinks,
  socialMediaLink,
  contactsContainer,
  contacts,
  contact,
  icon,
  addressStyles,
  companyName,
} from "../scss/pages/contact.module.scss"
import useContactData from "@hooks/useContactData"

interface DataProps {}

const ContactPage: React.FC<PageProps<DataProps>> = ({ path }) => {
  const { breadcrumb, page } = useLinkedData(["page", "breadcrumb"], {})
  const { metaDescription } = useContactPageData()
  const { email, mobile, landline, address, facebook, instagram, twitter } =
    useContactData()

  return (
    <Layout>
      <Seo
        title="Products"
        path={path}
        description={metaDescription}
        reverse
        linkedData={[page, breadcrumb]}
      />
      <main className={contactContent}>
        <ContactUs className={pageTitle} />
        <div className={divider} />
        <div className={contactDetails}>
          <ul className={socialMediaLinks}>
            {facebook && (
              <li key={facebook} className={socialMediaLink}>
                <SocialMediaLink href={facebook} Icon={FacebookIcon} />
              </li>
            )}
            {instagram && (
              <li key={instagram} className={socialMediaLink}>
                <SocialMediaLink href={instagram} Icon={InstagramIcon} />
              </li>
            )}
            {twitter && (
              <li key={twitter} className={socialMediaLink}>
                <SocialMediaLink href={twitter} Icon={TwitterIcon} />
              </li>
            )}
          </ul>
          <div className={contactsContainer}>
            <ul className={contacts}>
              {email && (
                <li key={email} className={contact}>
                  <a href={`mailto:${email}`}>
                    <EmailIcon className={icon} />
                    {email}
                  </a>
                </li>
              )}
              {mobile && (
                <li key={mobile} className={contact}>
                  <a href={`tel:+44${mobile.slice(1)}`}>
                    <PhoneIcon className={icon} />
                    {mobile}
                  </a>
                </li>
              )}
              {landline && (
                <li key={landline} className={contact}>
                  <a href={`tel:+44${landline.slice(1)}`}>
                    <PhoneIcon className={icon} />
                    {landline}
                  </a>
                </li>
              )}
            </ul>
            {address && (
              <div className={addressStyles}>
                <div className={companyName}>{address.companyName}</div>
                <div>{address.line1}</div>
                <div>{address.line2}</div>
                <div>{address.city}</div>
                <div>{address.postCounty}</div>
                <div>{address.postCode}</div>
              </div>
            )}
          </div>
        </div>

        <div className={divider} />
      </main>
    </Layout>
  )
}

export default ContactPage
