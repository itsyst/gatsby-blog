import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import { NavWrapper, NavMenu, NavIcon } from "./styles"

export const Nav = ({ menuLinks }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "blog-icon.png"}) {
        publicURL
      }
    }
  `)

  // create an event click - when click show menu
  const [nav, showNav] = useState(false);

  return (

    // menuLinks from siteMetadata we pass this to the component container
    <NavWrapper>
      <Link to="/">
        <img src={data.logo.publicURL} alt="My Logo" />
      </Link>
      <NavMenu nav={nav}>
        <ul>
          {menuLinks.map(props => (
            <li key={props.name}>
              <Link to={props.link}>{props.name}</Link>
            </li>
          ))}
        </ul>
      </NavMenu>
      <NavIcon nav={nav} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </NavIcon>
    </NavWrapper>
  )
}