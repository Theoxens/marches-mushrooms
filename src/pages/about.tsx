import React from "react"
import { PageProps } from "gatsby"

import useLinkedData from "@hooks/useLinkedData"
import useAboutPageData from "@hooks/pageData/useAboutPageData"

import Layout from "../components/layout/Layout"
import Seo from "../components/layout/Seo"
import AboutUs from "@icons/titles/about-us.inline.svg"

import {
  aboutContent,
  hero,
  heroImageFilter,
  heroImage as heroImageStyles,
  pageTitle,
  textContainer,
  text,
} from "../scss/pages/about.module.scss"
import { GatsbyImage } from "gatsby-plugin-image"

interface DataProps {}

const AboutPage: React.FC<PageProps<DataProps>> = ({ path }) => {
  const { breadcrumb, page } = useLinkedData(["page", "breadcrumb"], {})
  const { metaDescription, heroImage, mainText } = useAboutPageData()

  return (
    <Layout>
      <Seo
        title="About"
        path={path}
        description={metaDescription}
        reverse
        linkedData={[page, breadcrumb]}
      />
      <main className={aboutContent}>
        <div className={hero}>
          <AboutUs className={pageTitle} />
          <GatsbyImage
            alt={heroImage.alt}
            image={heroImage.image.childImageSharp.gatsbyImageData}
            className={heroImageStyles}
          />
          <div className={heroImageFilter} />
        </div>
        <div className={textContainer}>
          <p className={text}>{mainText}</p>
        </div>
      </main>
    </Layout>
  )
}

export default AboutPage
