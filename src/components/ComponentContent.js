import React from "react"
import styled from "styled-components"

export const Content = ({ children }) => {
  return (
    <ContentWrapper>
      {children}
    </ContentWrapper>)
}

const ContentWrapper = styled.main`
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  gap:1rem;
  background-color:${props => props.theme.colors.greyLight1};
  padding:10px;
 
  @media ${props => props.theme.breakpoints.tablet} {
    margin:10px 0;
    grid-column: 1 / span 5;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 2 / span 7;
  }  
`