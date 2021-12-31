import React, { useMemo } from "react"
import { PageProps } from "gatsby"

import useLinkedData from "@hooks/useLinkedData"
import useHomePageData from "@hooks/pageData/useHomePageData"

import Layout from "../components/layout/Layout"
import Seo from "../components/layout/Seo"
import PageTitle from "@components/layout/PageTitle"
import MarchesCondensed from "@icons/titles/marches-condensed.inline.svg"
import Marches from "@icons/titles/marches.inline.svg"

import {
  homeContent,
  hero,
  heroMessageContainer,
  heroMessage as heroMessageStyles,
  heroImageFilter,
  heroImage as heroImageStyles,
} from "../scss/pages/home.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"
import capitalize from "@utils/capitalize"

interface DataProps {}

const IndexPage: React.FC<PageProps<DataProps>> = ({ path }) => {
  const {
    metaDescription,
    heroImage,
    heroMessage,
    page: pageName,
  } = useHomePageData()
  const _pageName = useMemo(() => capitalize(pageName), [pageName])
  const { business, breadcrumb, page, website } = useLinkedData(
    ["business", "website", "page", "breadcrumb"],
    {
      pageName: _pageName,
      metaDescription,
      crumbs: [{ name: _pageName }],
    }
  )

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
          {heroMessage && (
            <div className={heroMessageContainer}>
              <h2 className={heroMessageStyles}>{heroMessage}</h2>
            </div>
          )}
          <GatsbyImage
            alt={heroImage.alt}
            image={heroImage.image.childImageSharp.gatsbyImageData}
            className={heroImageStyles}
            loading="eager"
          />
          <div className={heroImageFilter} />
        </div>
      </main>
    </Layout>
  )
}

export default IndexPage
