import React from "react"

import {
  socialMediaLink,
  icon,
} from "@scss/components/links/social-media-link.module.scss"

interface Props {
  href: string
  title: string
  Icon: React.FC<{ className?: string }>
}

const SocialMediaLink = ({ href, Icon, title }: Props) => {
  return (
    <a className={socialMediaLink} href={href} aria-label={title} title={title}>
      <Icon className={icon} />
    </a>
  )
}

export default SocialMediaLink
