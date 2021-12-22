import { useStaticQuery, graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

interface AboutPageData {
  metaTitle: string
  metaDescription: string
  heroImage: IGatsbyImageData
  mainText: string[]
}

const useAboutPageData = (): AboutPageData => {
  const { pageData, heroImage } = useStaticQuery(graphql`
    query AboutPageData {
      pageData: pagesJson(page: { eq: "about" }) {
        metaTitle
        metaDescription
        mainText
      }
      heroImage: file(relativePath: { eq: "mixed-mushrooms-1.jpg" }) {
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

export default useAboutPageData
