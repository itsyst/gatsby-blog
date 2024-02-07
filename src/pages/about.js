import React from "react"
import Img from "gatsby-image"
import { graphql, useStaticQuery } from 'gatsby'
import { Container } from "../components"
import styled from "styled-components"

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
                            width: "40%",
                            height: "40%",
                        }}
                    />
                    <div>
                        <H1>{data.site.siteMetadata.author}</H1>
                        <P color="black">Ambitiös och initiativtagande certifierad Systemutvecklare .NET som drivs av nya utmaningar och älskar att arbeta tillsammans med andra. Strävar efter att utvecklas inom system- och databasutveckling och är alltid hungrig på att lära sig nya saker.
                        </P>
                    </div>
                </MainContentWrapper>
            </MainWrapper>
        </Container>
    )
}

export default AboutPage

/* used this styling for the about contact and singlePost page */
const MainWrapper = styled.main`
  display:grid;
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  justify-content: center;
  align-items:start;
  height:100%;
  overflow:auto;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }  

  @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 2 / span 10;
  }  
`

/* used this styling for the about and contact page */
const MainContentWrapper = styled.div`
  display: grid;
  background-color:${props => props.theme.colors.white};
  margin:${props => props.theme.spacings.xSmall};

  img,h1,p{
    padding:${props => props.theme.spacings.xSmall};
  }

  h2{
    text-align:center;
  }

    @media ${props => props.theme.breakpoints.tablet} {
      display: inline-flex;
        input,
        form {
          width:30rem;
        }
    }

    @media ${props => props.theme.breakpoints.desktop} {
      display: flex;
        input,
        form {
          width:40rem;
        }
    }
`

const H1 = styled.h1`
    color: ${props => props.theme.colors.black};
    text-align: ${props => props.textAlign ? props.textAlign.left : 0};
    margin: ${props => props.margin ? props.theme.spacings.xxSmall : 0};
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
`;