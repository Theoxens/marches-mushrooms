import React from "react"
import { PageProps } from "gatsby"

import useLinkedData from "@hooks/useLinkedData"
import useHomePageData from "@hooks/pageData/useHomePageData"

import Layout from "../components/layout/Layout"
import Seo from "../components/layout/Seo"
import PageTitle from "@components/layout/PageTitle"
import MarchesCondensed from "@titles/marches-condensed.inline.svg"
import Marches from "@titles/marches.inline.svg"

import {
  homeContent,
  hero,
  heroMessageContainer,
  heroMessage,
  heroImageFilter,
  heroImage as heroImageStyles,
} from "../scss/pages/home.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

interface DataProps {}

const IndexPage: React.FC<PageProps<DataProps>> = ({ path }) => {
  const { business, breadcrumb, page, website } = useLinkedData(
    ["business", "website", "page", "breadcrumb"],
    {}
  )
  const { metaDescription, heroImage } = useHomePageData()

  return (
    <Layout>
      <Seo
        title="Home"
        path={path}
        description={metaDescription}
        reverse
        linkedData={[business, website, page, breadcrumb]}
      />
      <main className={homeContent}>
        <PageTitle Condensed={MarchesCondensed} Linear={Marches} />
        <div className={hero}>
          <div className={heroMessageContainer}>
            <h2 className={heroMessage}>
              Award nominated gourmet mushroom producers
            </h2>
          </div>
          <GatsbyImage
            alt={heroImage.alt}
            image={heroImage.image.childImageSharp.gatsbyImageData}
            className={heroImageStyles}
          />
          <div className={heroImageFilter} />
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
