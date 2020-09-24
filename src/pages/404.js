import React from "react"
import { graphql } from "gatsby"
import { Container} from "../components"
import Img from "gatsby-image"
import { H2, MainWrapper,MainContentWrapper} from "../components/styles"

const NotFoundPage = ({ data }) => {

  return (
    <Container>
      <MainWrapper>
        <MainContentWrapper>
        <Img
          fluid={data.imageSharp.fluid}
          style={{
            position: "relative",
            width: "100%",
            height: "100%",
          }}
        />
        <H2 textAlign="center" margin="xSmall">
          Uh-oh... What you're looking for couldn't be found
          </H2>
        </MainContentWrapper>
      </MainWrapper>
    </Container>

  )

}
export default NotFoundPage

export const notFoundQuery = graphql`
  query NotFoundQuery {
    imageSharp(fluid: { originalName: { eq: "sad-cat.jpg" } }) {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
`