import { useStaticQuery, graphql } from "gatsby"

interface ContactPageData {
  metaTitle: string
  metaDescription: string
}

const useContactPageData = (): ContactPageData => {
  const { pageData } = useStaticQuery(graphql`
    query ContactPageData {
      pageData: pagesJson(page: { eq: "contact" }) {
        metaTitle
        metaDescription
      }
    }
  `)

  return pageData
}

export default useContactPageData
