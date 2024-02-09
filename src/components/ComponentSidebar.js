import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import styled from "styled-components"

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
          alt=""
        />
        <SideCardInfoWrapper className="re">
          <H1>{data.site.siteMetadata.author}</H1>
          <P color="greyDark" fontSize="xSmall">
            Om du vill se mer projekt liknande detta, besök min
            <a href="https://www.elhamzi.me" target="_blank" rel="noreferrer">portfölj</a>
            och glöm inte att kolla in GitHub-kodbasen och lämna en stjärna ⭐
          </P>
        </SideCardInfoWrapper>
      </SideCardWrapper>
    </SidebarWrapper>
  )
}

const SidebarWrapper = styled.section`
  display:none;

  @media ${props => props.theme.breakpoints.tablet} {
    display:grid;
    grid-column: 6 /-1;
    height:20vh;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 9 / span 3;
  }   
`

const SideCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color:${props => props.theme.colors.greyLight1};
  padding:${props =>
    `${props.theme.spacings.xSmall}`};

  img{
    width:50%;
    height:50%;
  }
`

const SideCardInfoWrapper = styled.section`
  background-color:${props => props.theme.colors.white};
`

const H1 = styled.h1`
    color: ${props => props.theme.colors.black};
    text-align: ${props => props.textAlign ? props.textAlign.left : 0};
    padding:${props => `${props.theme.spacings.xSmall}`};
    margin: ${props => props.margin ? props.theme.spacings.xxSmall : 0};
    font-size:${props => {
    switch (props.fontSize) {
      case "large":
        return props.theme.sizes.large;
      case "medium":
        return props.theme.sizes.medium;
      case "xSmall":
        return props.theme.sizes.xSmall;
      default:
        return props.theme.sizes.small;
    }
  }
  };
`

const P = styled.p`
  margin: ${props => {
    switch (props.margin) {
      case "xxSmall":
        return props.theme.spacings.xxSmall;
      case "xSmall":
        return props.theme.spacings.xSmall;
      default:
        return 0;
    }
  }
  };
  font-size:${props => {
    switch (props.fontSize) {
      case "large":
        return props.theme.sizes.large;
      case "medium":
        return props.theme.sizes.medium;
      case "xSmall":
        return props.theme.sizes.xSmall;
      default:
        return props.theme.sizes.small;
    }
  }
  };
    line-height: ${props => {
    switch (props.lineHeight) {
      case "small":
        return props.theme.heights.small;
      case "medium":
        return props.theme.heights.medium;
      case "large":
        return props.theme.heights.large;
      default:
        return props.theme.heights.medium;
    }
  }
  };
    font-weight: ${props => {
    switch (props.fontWeight) {
      case "normal":
        return props.theme.weights.normal;
      case "bold":
        return props.theme.weights.bold;
      default:
        return props.theme.weights.normal;
    }
  }
  };
    color: ${props => {
    switch (props.color) {
      case "black":
        return props.theme.colors.black;
      case "orange":
        return props.theme.colors.orange;
      case "blue":
        return props.theme.colors.blue;
      case "greyDark":
        return props.theme.colors.greyDark;
      default:
        return props.theme.colors.greyLight2;
    }
  }
  };
   text-align: ${props => props.textAlign ? props.textAlign.center : 0};
   padding:${props => `${props.theme.spacings.xSmall}`};
   a {
     padding:5px;
   }
`;