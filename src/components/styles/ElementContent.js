import styled from "styled-components"

export const ContentWrapper = styled.main`
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  gap:1rem;
  background-color:${props => props.theme.colors.greyLight1};


  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span 5;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 2 / span 7;
  }  
`
