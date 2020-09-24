import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from "../components"
import { MainWrapper, MainContentWrapper, H1, P } from "../components/styles"

const AboutPage = ({ fluid }) => {
    const data = useStaticQuery(graphql`
    query {
      site{
          siteMetadata{
              author
          }
      }
      imageSharp(fluid: { originalName: { eq: "me.png" } }) {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  `)
    return (
        <Container>
            <MainWrapper>
                <MainContentWrapper>
                    <Img
                        fluid={fluid ? fluid : data.imageSharp.fluid}
                        style={{
                            width: "100%",
                            height: "100%",
                        }}
                    />
                    <div>
                        <H1>{data.site.siteMetadata.author}</H1>
                        <P color="black">Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat.
                        sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam
                        </P>
                    </div>
                </MainContentWrapper>
            </MainWrapper>
        </Container>
    )
}

export default AboutPage
