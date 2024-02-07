import React from "react"
import { graphql } from "gatsby"
import { GatsbyImage } from "gatsby-plugin-image"
import ReactMarkdown from "react-markdown"
import { Container, Main, SinglePost, Seo } from "../components"
import styled from "styled-components"

export const pageQuery = graphql`
  query SinglePostQuery($id: String) {
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
          base
          childrenImageSharp {
            gatsbyImageData 
          }
        }
      }
    }
  }
`

const SinglePostPage = ({ data }) => {
  const featureImage = data.mdx.frontmatter.featureImage
  const seoImage = data.mdx.frontmatter.featureImage.publicURL
  return (
    <Container>
      <Seo
        title={data.mdx.frontmatter.title}
        image={seoImage}
        description={data.mdx.frontmatter.excerpt}
      />
      <GatsbyImage
        image={featureImage.childrenImageSharp[0].gatsbyImageData}
        alt={featureImage.base.split('.')[0]}
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          width: "100%",
          height: "100%",
        }} />
      <Main>
        <H1 margin="0 0 2rem 0">{data.mdx.frontmatter.title}</H1>
        <SinglePost>
          <ReactMarkdown>{data.mdx.body}</ReactMarkdown>
        </SinglePost>
      </Main>
    </Container>
  )
}

export default SinglePostPage


const H1 = styled.h1`
    color: ${props => props.theme.colors.black};
    text-align: ${props => props.textAlign ? props.textAlign.left : 0};
    margin: ${props => props.margin ? props.theme.spacings.xxSmall : 0};
`

