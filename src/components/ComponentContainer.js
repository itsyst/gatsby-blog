import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { ContainerWrapper } from "./styles"
import { Nav, Footer } from "../components"

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
