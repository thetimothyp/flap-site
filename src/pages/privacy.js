import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import logo from "../images/logo.png"
import comingSoon from "../images/ComingSoon.png"

const PrivacyPage = () => (
  <Layout>
    <SEO title="Privacy" />
    <div style={{
      position: `fixed`,
      left: `5%`,
      bottom: `0`,
      width: `8%`
    }}>
      <img src={logo} alt="Thumbprint Games Logo" />
    </div>
    <div style={{ 
      position: `absolute`,
      top: `10%`,
      left: `50%`,
      transform: `translate(-50%)`,
      width: `40%` 
    }}>
      <h3>Privacy Policy</h3>
      <p>
        At Thumbprint Games, we strictly respect your privacy. We do not record, store, collect information that identifies you as an individual. We do not attempt to obtain any sensitive information. If you contact us via email or other social media directly, we may keep a copy of that though.

        Thumbprint Games will not sell, trade or disclose any personal information you might give us without your prior consent. However, information will be disclosed where required by law.

        Although we ourselves do not attempt to track your information, our products may contain third parties’ APIs. This Privacy Policy does not apply to information that may be collected by that third party, so we are therefore not responsible for that information.
      </p>
      <h6>
        Our third parties' privacy policy are as follows:
      </h6>
      <p>
        Admob - http://www.google.com/ads/admob/
      </p>

      <h6>
        Policy Updates
      </h6>
      <p>
        We may change this privacy policy from time to time. Any changes will be updated on this page.
      </p>
      <h6>
        Contact Information
      </h6>
      <p>
        tim@thumbprintgames.com
      </p>
    </div>
  </Layout>
)

export default PrivacyPage
