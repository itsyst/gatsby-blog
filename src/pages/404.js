import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { Container } from "../components"
import { GatsbyImage } from "gatsby-plugin-image"
import styled from "styled-components"

const query = graphql`
  {
    imageSharp(fluid: { originalName: { eq: "sad-cat.jpg" } }) {
      id
      gatsbyImageData(
          height:200
          width:400
          placeholder:BLURRED
          quality:70
          blurredOptions: {width: 100}
          transformOptions: {
            fit:COVER 
            cropFocus:CENTER
          }
        )
    }
  }
`

const NotFoundPage = () => {
  const data = useStaticQuery(query)
  return (
    <Container>
      <MainWrapper>
        <MainContentWrapper>
          <GatsbyImage
            image={data.imageSharp.gatsbyImageData}
            alt={data.imageSharp.id}
          />
          <H2 textAlign="center" margin="xSmall">
            Åh-oh...
            Det du letar efter kunde inte hittas!
          </H2>
        </MainContentWrapper>
      </MainWrapper>
    </Container>

  )
}

export default NotFoundPage

/* used this styling for the about contact and singlePost page */
const MainWrapper = styled.main`
  display:grid;
  grid-column: 1 / -1;
  grid-row: 2 / 4;
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
const H2 = styled.h2`
    color: ${props => props.theme.colors.red};
    margin: ${props => props.margin ? props.theme.spacings.small : 0};
`;