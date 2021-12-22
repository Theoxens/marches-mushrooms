import React from "react"

import {
  pageTitle,
  condensed,
  linear,
} from "@scss/layout/page-title.module.scss"

interface Props {
  Linear: React.FC<{ className?: string }>
  Condensed?: React.FC<{ className?: string }>
}

const PageTitle = ({ Linear, Condensed }: Props) => {
  return (
    <>
      {Condensed ? (
        <Condensed className={`${pageTitle} ${condensed}`} />
      ) : (
        <Linear className={`${pageTitle} ${condensed}`} />
      )}
      <Linear className={`${pageTitle} ${linear}`} />
    </>
  )
}

export default PageTitle
