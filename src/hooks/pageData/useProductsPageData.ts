import getNodes from "@utils/getNodes"
import { useStaticQuery, graphql } from "gatsby"

interface ProductsPageData {
  page: string
  metaTitle: string
  metaDescription: string
  products: {
    name: string
    path: string
  }[]
}

const useProductsPageData = (): ProductsPageData => {
  const { pageData, products } = useStaticQuery(graphql`
    query ProductsPageData {
      pageData: pagesJson(page: { eq: "products" }) {
        page
        metaTitle
        metaDescription
      }
      products: allProductsJson {
        edges {
          node {
            name
            path
          }
        }
      }
    }
  `)

  return {
    ...pageData,
    products: getNodes(products),
  }
}

export default useProductsPageData
