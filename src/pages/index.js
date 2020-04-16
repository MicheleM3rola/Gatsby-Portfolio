import React from "react"
import Layout from "../component/layout/layout"
import Head from "../component/head"
import SocialIcon from "../component/social icon/social-icon"
import Typical from "react-typical"

import "../styles/indexes.scss"

const IndexPage = () => {
  return (
    <Layout title="Welcome to my Portfolio">
      <Head title="Home" />
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
                "Developer",
                2000,
                "Gamer",
                2000,
                "Father",
                2000,
                "Husband",
                2000,
              ]}
            />
          </p>
          <SocialIcon social="Twitter" id="Tw" />
        </div>

        <div>
          <SocialIcon social="Linkedin" id="Lk" />
          <SocialIcon social="Facebook" id="Fb" />
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage
