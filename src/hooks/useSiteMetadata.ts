import { graphql, useStaticQuery } from "gatsby"

interface MetaData {
  title: string
  companyName: string
  altCompanyName: string
  description: string
  siteUrl: string
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
          }
        }
      }
    `
  )

  return site.siteMetadata
}

export default useSiteMetadata
