import styled from "styled-components"

export const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color:${props => props.theme.colors.white};
  margin:${props =>
    `${props.theme.spacings.small} 0`};
  padding:${props =>
    `${props.theme.spacings.small}`};
  box-shadow:${props => props.theme.shadows.shadow1};
`

export const SidebarWrapper = styled.section`
  display:none;

@media ${props => props.theme.breakpoints.tablet} {
    display:grid;
    grid-column: 6 /-1;
    height:20vh;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 9 / span 3;
  }   
`
export const SideCardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: start;
  background-color:${props => props.theme.colors.white};
  margin:${props =>
    `${props.theme.spacings.small} 0`};
  padding:${props =>
    `${props.theme.spacings.small}`};

  img{
    width:50%;
    height:50%;
  }
`