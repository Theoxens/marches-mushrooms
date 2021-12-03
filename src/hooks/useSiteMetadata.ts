import { graphql, useStaticQuery } from "gatsby"

interface MetaData {
  title: string
  description: string
  siteUrl: string
}

const useSiteMetadata = (): MetaData => {
  const { site } = useStaticQuery<{ site: { siteMetadata: MetaData } }>(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata
