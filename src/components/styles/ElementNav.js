import styled from "styled-components"

export const NavWrapper = styled.nav`
  grid-column: 1 / span 6;
  grid-row: 1/2;
  align-items:center;
  justify-content:center;
  z-index:20;
  background-color: ${props => props.theme.colors.white};
  
  img{
    padding:1rem;
    height: 9rem;
  }

  @media ${props => props.theme.breakpoints.tablet} {
      grid-column: 1 / span 8;
  }
  @media ${props => props.theme.breakpoints.desktop} {
      grid-column: 1 / span 14;
  }
`
export const NavMenu = styled.nav`
  display: flex;
  position: fixed;
  flex-direction:column;
  justify-content: center;
  align-items:center;
  text-align:center;
  height:100vh;
  width: 100%;
  top:0;
  right:0;
  transition : transform 300ms;
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
    transform:${({ nav }) => (!nav ? "translateX(0)" : "translateX(100%)")};
    height: 9rem;
    align-items: center;
    justify-content: center;
    width: 60%;

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

export const NavIcon = styled.button`    
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

    :first-child{
      transform:${({ nav }) => (nav ? "rotate(45deg)" : "rotate(0))")};
    }
    :nth-child(2){
      opacity:${({ nav }) => (nav ? "0" : "1")};
    }
    :nth-child(3){
      transform:${({ nav }) => (nav ? "rotate(-45deg)" : "rotate(0))")};
    }
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display: none;
  }
`