import * as React from "react"
import { PageProps } from "gatsby"

import Layout from "../components/Layout"
import Seo from "../components/Seo"

interface DataProps {}

const IndexPage: React.FC<PageProps<DataProps>> = ({ path }) => (
  <Layout>
    <Seo title="Home" path={path} />
  </Layout>
)

export default IndexPage
