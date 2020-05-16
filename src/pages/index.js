import React from "react"
import Layout from "../component/layout/layout"
import Head from "../component/head"
import SocialIcon from "../component/social icon/social-icon"
import Typical from "react-typical"

import "../styles/indexes.scss"

const IndexPage = () => {
  return (
    <Layout title="Welcome to my Portfolio">
      <Head titlePage="Home" />
      <div className="container">
        <div className="container-title">
          <h1 className="title">Hi my name is Michele Merola</h1>
          <p className="typical">
            {" "}
            I'm a{" "}
            <Typical
              loop={Infinity}
              wrapper="b"
              steps={[
                " Web Developer",
                2000,
                "Dream Chaser",
                2000,
                "Father",
                2000,
                "Husband",
                2000,
              ]}
            />
          </p>
          <SocialIcon
            social="Twitter"
            id="Tw"
            ph="Visit My twitter profile"
            link="https://twitter.com/MicheleMerola15"
          />
        </div>

        <div className="secondContSocialIcon">
          <SocialIcon
            social="Linkedin"
            id="Lk"
            ph="Visit My Linkedin profile"
            link="https://www.linkedin.com/in/michele-merola/"
          />
          <SocialIcon
            social="Facebook"
            id="Fb"
            ph="Visit My Facebook profile"
            link="https://www.facebook.com/merolasalvatore/"
          />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
