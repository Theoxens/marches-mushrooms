import React from "react"
import { graphql, PageProps } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import loadable from "@loadable/component"

import { PageImage } from "@hooks/pageData/useHomePageData"
import useLinkedData from "@hooks/useLinkedData"

import Layout from "../components/layout/Layout"
import Seo from "../components/layout/Seo"

import titleFont from "@src/fonts/CormorantGaramond-Light.woff2"

import {
  pageContent,
  pageTitle,
  hero,
  heroImageStyles,
  heroImageFilter,
  productDetails,
  section,
  section1,
  text,
} from "@scss/templates/product.module.scss"

const ProductBF = loadable(() => import("@components/pages/ProductBF"))
//============================================================

interface DataProps {
  pageData: {
    metaTitle: string
    metaDescription: string
    name: string
    title: string
    heroImage: PageImage
    image2?: PageImage
    image3?: PageImage
    text1: string
    text2?: string
    text3?: string
  }
}

//============================================================

const Product: React.FC<PageProps<DataProps>> = ({
  data: { pageData },
  path,
}) => {
  const {
    title,
    metaDescription,
    metaTitle,
    heroImage,
    image2,
    image3,
    text1,
    text2,
    text3,
  } = pageData
  const { page, breadcrumb } = useLinkedData(["page", "breadcrumb"], {
    crumbs: [{ name: "Products", path: "/products" }, { name: title }],
  })
  const preload = [
    {
      href: titleFont,
      as: "font",
      type: "font/woff2",
    },
  ]

  return (
    <Layout>
      <Seo
        title={metaTitle}
        path={path}
        description={metaDescription}
        reverse
        linkedData={[page, breadcrumb]}
        preload={preload}
      />
      <main className={pageContent}>
        <div className={hero}>
          <h1 className={pageTitle}>{title}</h1>
          <GatsbyImage
            alt={heroImage.alt}
            image={heroImage.image.childImageSharp.gatsbyImageData}
            className={heroImageStyles}
            loading="eager"
          />
          <div className={heroImageFilter} />
        </div>

        <div className={productDetails}>
          <div className={[section, section1].join(" ")}>
            <p className={text}>{text1}</p>
          </div>

          <ProductBF {...{ image2, image3, text2, text3 }} />
        </div>
      </main>
    </Layout>
  )
}

export default Product

//==============================================================

export const pageQuery = graphql`
  query PageData($id: String!) {
    pageData: ProductPageData(path: $id) {
      metaTitle
      metaDescription
      title
      heroImage {
        ...ImageData
      }
      image2 {
        ...ImageData
      }
      image3 {
        alt
        image {
          childImageSharp {
            gatsbyImageData(width: 992, sizes: "(min-width: 992px) 50vw, 100vw")
          }
        }
      }
      text1
      text2
      text3
    }
  }
`
