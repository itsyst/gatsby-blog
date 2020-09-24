import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery} from 'gatsby'
import { SidebarWrapper, SideCardWrapper, H1, P} from "../components/styles"

export const SideCard = ({ fluid }) => {
   
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
    facebook: file(relativePath: { eq: "facebook.svg" }) {
    publicURL
    }
    twitter: file(relativePath: { eq: "twitter.svg" }) {
    publicURL
    }
    linkedin: file(relativePath: { eq: "linkedin.svg" }) {
    publicURL
    }
    rss: file(relativePath: { eq: "rss.svg" }) {
    publicURL
    } 
    }
  `)
    return (
        <SidebarWrapper>
            <SideCardWrapper>
                <Img
                    fluid={fluid ? fluid : data.imageSharp.fluid}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
                <H1 margin="Small">Author: {data.site.siteMetadata.author}</H1>
                <P>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor </P>
            </SideCardWrapper>
        </SidebarWrapper>
    )
}
