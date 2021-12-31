import { useStaticQuery, graphql } from "gatsby"

interface ContactPageData {
  page: string
  metaTitle: string
  metaDescription: string
}

const useContactPageData = (): ContactPageData => {
  const { pageData } = useStaticQuery(graphql`
    query ContactPageData {
      pageData: pagesJson(page: { eq: "contact" }) {
        page
        metaTitle
        metaDescription
      }
    }
  `)

  return pageData
}

export default useContactPageData
