import { graphql } from "gatsby"

export const ImageData = graphql`
  fragment ImageData on Image {
    alt
    image {
      childImageSharp {
        gatsbyImageData(width: 1920)
      }
    }
  }
`
