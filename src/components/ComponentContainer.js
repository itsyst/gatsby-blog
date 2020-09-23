import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import { ContainerWrapper } from "./styles"
import { Nav} from "../components"

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

  return (
    Container.propTypes = {
      children: PropTypes.node.isRequired,
    },
    <ContainerWrapper>
      <Nav menuLinks={data.site.siteMetadata.menuLinks} />
      {children}
    </ContainerWrapper>
  )
}
