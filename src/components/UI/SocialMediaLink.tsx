import React from "react"

import {
  socialMediaLink,
  icon,
} from "@scss/components/links/social-media-link.module.scss"

interface Props {
  href: string
  Icon: React.FC<{ className?: string }>
}

const SocialMediaLink = ({ href, Icon }: Props) => {
  return (
    <a className={socialMediaLink} href={href}>
      <Icon className={icon} />
    </a>
  )
}

export default SocialMediaLink
