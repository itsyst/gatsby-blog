import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Nav, Footer } from "../components"
import styled from "styled-components"

export const Container = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {        
        siteMetadata {
          description
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)
  // here we consume the menuLinks
  return (
    <ContainerWrapper>
      <Nav menuLinks={data.site.siteMetadata.menuLinks} />
      {children}
      <Footer />
    </ContainerWrapper>
  )
}

const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows:5rem 175px auto 120px;
  gap: 0 1rem;
  height: 100vh;
 
  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows:5rem 420px 1fr auto;
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows:5rem 477px 1fr auto;
    grid-gap: 0 2rem;
  }
`