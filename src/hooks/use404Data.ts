import { graphql, useStaticQuery } from "gatsby"

interface _404Data {
  paths: string[]
}

const use404Data = (): _404Data => {
  const { allSitePage } = useStaticQuery<{
    allSitePage: {
      nodes: { path: string }[]
    }
  }>(graphql`
    query {
      allSitePage {
        nodes {
          path
        }
      }
    }
  `)
  return { paths: allSitePage.nodes.map(node => node.path) }
}

export default use404Data
