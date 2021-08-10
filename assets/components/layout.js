/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"

import Footer from "./footer"
import Header from "./Header"

const Layout = ({ page, children }) => {

  return (
    <>
      <Header originPage={page}/>
      <div className={`main ${page}`}>
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
