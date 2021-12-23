import React from "react"
import { GatsbyImage } from "gatsby-plugin-image"
import { PageImage } from "@hooks/pageData/useHomePageData"

import {
  section,
  section2,
  section3,
  section4,
  text,
  sectionImage,
} from "@scss/templates/product.module.scss"

interface Props {
  image2?: PageImage
  image3?: PageImage
  text2?: string
  text3?: string
}

const ProductBF = ({ image2, image3, text2, text3 }: Props) => {
  return (
    <>
      {image2 && (
        <div className={[section, section2].join(" ")}>
          <GatsbyImage
            alt={image2.alt}
            image={image2.image.childImageSharp.gatsbyImageData}
            className={sectionImage}
          />
        </div>
      )}

      {(image3?.image || text2) && (
        <div className={[section, section3].join(" ")}>
          <p className={text}>{text2}</p>
          {image3 && (
            <GatsbyImage
              alt={image3.alt}
              image={image3.image.childImageSharp.gatsbyImageData}
              className={sectionImage}
            />
          )}
        </div>
      )}

      {text3 && (
        <div className={[section, section4].join(" ")}>
          <p className={text}>{text3}</p>
        </div>
      )}
    </>
  )
}

export default ProductBF
