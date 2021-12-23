import { useStaticQuery, graphql } from "gatsby"
import { IGatsbyImageData } from "gatsby-plugin-image"

export interface PageImage {
  alt: string
  image: {
    childImageSharp: {
      gatsbyImageData: IGatsbyImageData
    }
  }
}

interface HomePageData {
  metaTitle: string
  metaDescription: string
  heroImage: PageImage
  heroMessage?: string
}

const useHomePageData = (): HomePageData => {
  const { pageData } = useStaticQuery(graphql`
    query HomePageData {
      pageData: HomePageData {
        metaTitle
        metaDescription
        heroImage {
          ...ImageData
        }
        heroMessage
      }
    }
  `)

  return pageData
}

export default useHomePageData
