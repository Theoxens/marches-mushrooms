import React from "react"
import { Link, PageProps } from "gatsby"

import useLinkedData from "@hooks/useLinkedData"
import useProductsPageData from "@hooks/pageData/useProductsPageData"

import Layout from "../components/layout/Layout"
import Seo from "../components/layout/Seo"
import Products from "@icons/titles/products.inline.svg"

import {
  productsContent,
  pageTitle,
  divider,
  links,
  link,
} from "../scss/pages/products.module.scss"

interface DataProps {}

const ProductsPage: React.FC<PageProps<DataProps>> = ({ path }) => {
  const { breadcrumb, page } = useLinkedData(["page", "breadcrumb"], {})
  const { metaDescription, products } = useProductsPageData()

  return (
    <Layout>
      <Seo
        title="Products"
        path={path}
        description={metaDescription}
        reverse
        linkedData={[page, breadcrumb]}
      />
      <main className={productsContent}>
        <Products className={pageTitle} />
        <div className={divider} />
        <ul className={links}>
          {products.map(product => (
            <li key={product.path}>
              <Link to={`.${product.path}`} className={link}>
                {product.name}
              </Link>
            </li>
          ))}
        </ul>
        <div className={divider} />
      </main>
    </Layout>
  )
}

export default ProductsPage
