import { useStaticQuery, graphql } from "gatsby"
import { PageImage } from "./useHomePageData"

interface AboutPageData {
  page: string
  metaTitle: string
  metaDescription: string
  heroImage: PageImage
  mainText: string
}

const useAboutPageData = (): AboutPageData => {
  const { pageData } = useStaticQuery(graphql`
    query AboutPageData {
      pageData: AboutPageData {
        page
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
