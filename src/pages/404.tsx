import { PageProps } from "gatsby"
import * as React from "react"

import Layout from "../components/layout/Layout"
import Seo from "../components/layout/Seo"

const NotFoundPage: React.FC<PageProps> = ({ path }) => (
  <Layout>
    <Seo title="404: Not found" path={path} />
    <main>
      <h1>404: Not Found</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </main>
  </Layout>
)

export default NotFoundPage
