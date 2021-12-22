import { useStaticQuery, graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

interface HomePageData {
  metaTitle: string
  metaDescription: string
  heroImage: IGatsbyImageData
}

const useHomePageData = (): HomePageData => {
  const { pageData, heroImage } = useStaticQuery(graphql`
    query HomePageData {
      pageData: pagesJson(page: { eq: "home" }) {
        metaTitle
        metaDescription
      }
      heroImage: file(relativePath: { eq: "king-oysters-on-slate.jpg" }) {
        childImageSharp {
          gatsbyImageData
        }
      }
    }
  `)

  return {
    ...pageData,
    heroImage: heroImage.childImageSharp.gatsbyImageData,
  }
}

export default useHomePageData
