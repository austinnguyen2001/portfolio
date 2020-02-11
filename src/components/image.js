import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({img}) => {
  const data = useStaticQuery(graphql`
    query {
      profile: file(relativePath: { eq: "profileImage.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      scrippsRanchHigh: file(relativePath: { eq: "scrippsRanchHigh.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      mesaCollege: file(relativePath: { eq: "mesaCollege.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `);

  return <Img fluid={data[img].childImageSharp.fluid} />
}

export default Image