import React from "react"
import styled from "styled-components"

// This component will be used for single post,about page and contact page
export const Main = ({ children }) => {
    return (
        <SinglePostWrapper>
            {children}
        </SinglePostWrapper>)
}
 
/* special styling just for the singlePost */
const SinglePostWrapper = styled.main`
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  margin-bottom:${props =>`${props.theme.spacings.xSmall}`};
  padding:${props => props.theme.spacings.small};
  background-color:${props => props.theme.colors.white};
  z-index:9;


  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
    grid-row: 3 / 4;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 2 / -1;
    grid-row: 3 / 4;
  }  
`