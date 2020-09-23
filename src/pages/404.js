import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { Container } from "../components"

const notFound = ({ data }) => {
  const featureImage = data.imageSharp.fixed

  return (
    <Container>
      <Img fixed={featureImage} />
      <h1 textAlign="center" margin="0 0 1rem 0">
        Uh-oh... What you're looking for couldn't be found
        </h1>

    </Container>
  )
}

export default notFound

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fixed: { originalName: { eq: "sad-cat.jpg" } }) {
      fixed {
        ...GatsbyImageSharpFixed
      }
    }
  }
`
