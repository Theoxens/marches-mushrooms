import React from "react"
import { Helmet } from "react-helmet"
import useContactData from "../hooks/useContactData"
import useSiteMetadata from "../hooks/useSiteMetadata"

interface Props {
  path: string
  description?: string
  lang?: string
  meta?: ({ name: string; content: any } | { property: string; content: any })[]
  title: string
  type?: `article` | `website` | `music` | `video` | `book` | `profile`
  reverse?: boolean
  thumb?: string
  twitterAlt?: string
  linkedData?: {
    [x: string]: any
  }[]
}

function SEO(props: Props) {
  const {
    description = "",
    lang = "en",
    meta = [],
    title,
    type = `website`,
    reverse = false,
    thumb = "",
    twitterAlt = "",
    linkedData = [],
    path,
  } = props

  const siteMetadata = useSiteMetadata()
  const { twitter, instagram } = useContactData()

  const metaDescription = description || ""
  const template = reverse
    ? `${siteMetadata.title} | %s`
    : `%s | ${siteMetadata.title}`

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={template}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:url`,
          content: `${siteMetadata.siteUrl}/${path}`,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: type,
        },
        {
          property: `og:image`,
          content: thumb,
        },
        {
          property: `og:image:width`,
          content: "1200",
        },
        {
          property: `og:image:height`,
          content: "630",
        },
        {
          property: `og:site_name`,
          content: siteMetadata.title,
        },
        {
          property: `og:see_also`,
          content: twitter,
        },
        {
          property: `og:see_also`,
          content: instagram,
        },
        {
          name: `twitter:card`,
          content: thumb.length > 0 ? `summary_large_image` : `summary`,
        },
        {
          name: `twitter:site`,
          content: `@AcaciaMarquees`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:image`,
          content: thumb,
        },
        {
          name: `twitter:image:width`,
          content: "1200",
        },
        {
          name: `twitter:image:height`,
          content: "600",
        },
        {
          name: `twitter:image:alt`,
          content: twitterAlt,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    >
      {linkedData.map(data => (
        <script type="application/ld+json">{JSON.stringify(data)}</script>
      ))}
    </Helmet>
  )
}

export default SEO
