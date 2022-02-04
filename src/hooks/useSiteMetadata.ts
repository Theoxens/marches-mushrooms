import { graphql, useStaticQuery } from "gatsby"

interface MetaData {
  title: string | undefined
  companyName: string | undefined
  altCompanyName: string | undefined
  description: string | undefined
  siteUrl: string | undefined
  author: string | undefined
}

const useSiteMetadata = (): MetaData => {
  const { site } = useStaticQuery<{ site: { siteMetadata: MetaData } }>(
    graphql`
      query SITE_METADATA_QUERY {
        site {
          siteMetadata {
            companyName
            altCompanyName
            title
            description
            author
            siteUrl
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata
