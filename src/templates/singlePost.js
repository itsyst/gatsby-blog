import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { H1 } from "../components/styles"
import { Container,Main,SinglePost } from "../components"

const singlePost = ({ data }) => {
    const featureImage = data.mdx.frontmatter.featureImage.childImageSharp.fixed
    return (
      <Container>
        <Img
        fixed={featureImage}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }}
        />
        <Main>
            <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
            <SinglePost>
                <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </SinglePost>
        </Main>
        </Container>
    )
}

export default singlePost

export const pageQuery = graphql`
  query SinglePostQuery($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        date
        author
        excerpt
        slug
        title
        featureImage {
          publicURL
          childImageSharp {
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    }
  }
`
