import use404Data from "@hooks/use404Data"
import { Link, PageProps } from "gatsby"
import * as React from "react"

import Layout from "../components/layout/Layout"
import Seo from "../components/layout/Seo"

import {
  pageContent,
  pageTitle,
  message,
  links,
  link,
} from "../scss/pages/404.module.scss"

const NotFoundPage: React.FC<PageProps> = ({ path }) => {
  const { paths } = use404Data()

  return (
    <Layout>
      <Seo title="404: Not found" path={path} />
      <main className={pageContent}>
        <h1 className={pageTitle}>404: Not Found</h1>
        <p className={message}>
          Sorry we can't seem to find that page anywhere.
          <br />
          <br />
          Perhaps you can find what you need on one of these pages:
        </p>
        <ol className={links}>
          {paths
            .filter(
              p => !["/404", "/404/", "/404.html", "/dev-404-page/"].includes(p)
            )
            .sort()
            .map(_path => (
              <li className={link}>
                <Link to={_path}>
                  {_path === "/"
                    ? "home"
                    : _path.replaceAll(/(^\/)|(\/$)/g, "")}
                </Link>
              </li>
            ))}
        </ol>
      </main>
    </Layout>
  )
}

export default NotFoundPage
