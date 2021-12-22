import { useStaticQuery, graphql } from "gatsby"
import { PageImage } from "./useHomePageData"

interface AboutPageData {
  metaTitle: string
  metaDescription: string
  heroImage: PageImage
  mainText: string
}

const useAboutPageData = (): AboutPageData => {
  const { pageData, heroImage } = useStaticQuery(graphql`
    query AboutPageData {
      pageData: AboutPageData {
        metaTitle
        metaDescription
        heroImage {
          ...ImageData
        }
        mainText
      }
    }
  `)

  return pageData
}

export default useAboutPageData
