import React from "react"

import useContactData from "@hooks/useContactData"

import FacebookIcon from "@icons/fa/Facebook.inline.svg"
import InstagramIcon from "@icons/fa/Instagram.inline.svg"
import TwitterIcon from "@icons/fa/Twitter.inline.svg"
import SocialMediaLink from "@components/UI/SocialMediaLink"

import {
  footer,
  socialMediaLinks,
  contactInfo,
  copyrightNotice,
  contact,
} from "@scss/layout/footer.module.scss"

interface Props {}

const Footer = ({}: Props) => {
  const { email, mobile, instagram, facebook, twitter } = useContactData()

  return (
    <div className={footer}>
      <div className={socialMediaLinks}>
        <SocialMediaLink
          href={instagram}
          Icon={InstagramIcon}
          title="Instagram"
        />
        <SocialMediaLink href={facebook} Icon={FacebookIcon} title="Facebook" />
        <SocialMediaLink href={twitter} Icon={TwitterIcon} title="Twitter" />
      </div>
      <div className={contactInfo}>
        <a className={contact} href={`mailto:${email}`}>
          {email}
        </a>
        <a className={contact} href={`tel:+44${mobile.slice(1)}`}>
          {mobile}
        </a>
      </div>
      <small className={copyrightNotice}>
        {`Copyright © ${new Date().getFullYear()} Marches Mushrooms. All Rights
        Reserved`}
      </small>
    </div>
  )
}

export default Footer
