import React, { useState } from "react"
import { useStaticQuery, Link, graphql } from "gatsby"
import styled from "styled-components"

export const Nav = ({ menuLinks }) => {
  const data = useStaticQuery(graphql`
    query {
      logo: file(relativePath: {eq: "blog-logo.png"}) {
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
      <NavMenu nav={nav ? nav : undefined} >
        <ul>
          {menuLinks.map(props => (
            <li key={props.name}>
              <Link to={props.link}>{props.name}</Link>
            </li>
          ))}
        </ul>
      </NavMenu>
      <NavIcon nav={nav ? nav : undefined} onClick={() => showNav(!nav)}>
        <div />
        <div />
        <div />
      </NavIcon>
    </NavWrapper>
  )
}

const NavWrapper = styled.nav`
  grid-column: 1 / span 6;
  grid-row: 1/2;
  align-items:center;
  justify-content:center;
  z-index:20;
  background-color: ${props => props.theme.colors.white};
  
  a {
    color:${props => props.theme.colors.black}
  }

  img{
    padding:1rem;
    height: 5rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
      grid-column: 1 / span 8;
  }
  @media ${props => props.theme.breakpoints.desktop} {
      grid-column: 1 / span 14;
  }
`

const NavMenu = styled.nav`
  display: flex;
  position: fixed;
  flex-direction:column;
  justify-content: center;
  align-items:center !important;
  text-align:center;
  height:100vh;
  width: 100%;
  z-index:-50;
  top:0;
  right:0;
  transition : transform 300ms;
  /* pass the property nav to toggle the visibility menu- if nav clicked translate or (show the menu)*/
  transform:${({ nav }) => (nav ? "translateX(0)" : "translateX(100%)")};
  background-color: ${props => props.theme.colors.white};

  ul {
    list-style-type:none;
  }
  
  li {
    margin-top: 1rem;
  }

  a:link{
    font-weight:${props => props.theme.weights.bold};
    font-size:${props => props.theme.sizes.small};
    text-transform: uppercase;
    text-decoration:none;
  }
  /*  when hover over the link shows underline*/
  a:hover::after{
    background: ${props => props.theme.colors.orange};
    cursor: pointer;
    content: "";
    display: block;
    height: .3rem;
    width: 4rem;
    margin:0 .7rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display:flex;
    position: absolute;
  /* pass the property nav to toggle the visibility menu- if nav clicked translate or (show the menu)*/
    transform:${({ nav }) => (!nav ? "translateX(0)" : "translateX(100%)")};
    height: 5rem;
    justify-content: center;
    align-items:end !important;

    ul {
      display:flex;
      align-items: center;
      margin: 0;
    }

    li{
      margin-right: 4rem;
    }
  }
`

const NavIcon = styled.button`    
  position: fixed;
  top: 2rem;
  right: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height:1.5rem;
  background: ${props => props.theme.colors.transparent};
  border: none;
  cursor: pointer;

  div {
    width: 1.5rem;
    height: .2rem;
    background: ${props => props.theme.colors.black};
    border-radius: 5px;
    transform-origin: 1px;
    position: relative;
    transition : opacity 300ms, transform 300ms;

   /* style the three menu icon dashes*/
    &:first-child{
      transform:${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0))")};
    }
    &:nth-child(2){
      opacity:${({ nav }) => (nav ? "0" : "1")};
    }
    &:nth-child(3){
      transform:${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0))")};
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: none;
  }
`