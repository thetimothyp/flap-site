import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo.png"
import comingSoon from "../images/ComingSoon.png"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div style={{
      position: `fixed`,
      left: `5%`,
      bottom: `0`,
      width: `8%`
    }}>
      <img src={logo} alt="Thumbprint Games Logo" />
    </div>
    <div style={{ 
      position: `fixed`,
      top: `50%`,
      left: `50%`,
      transform: `translate(-50%, -50%)`,
      width: `40%` 
    }}>
      <img src={comingSoon} alt="Coming Soon" />
    </div>
  </Layout>
)

export default IndexPage
