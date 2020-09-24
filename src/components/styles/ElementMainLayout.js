import styled from "styled-components"

export const MainWrapper = styled.main`
  display:grid;
  grid-column: 1 / -1;
  grid-row: 2 / 3;
  justify-content: center;
  align-items:start;
  height:100%;
  overflow:auto;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 2 / span 6;
  }  

  @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 2 / span 10;
  }  
`
export const MainContentWrapper = styled.div`
  display: grid;
  background-color:${props => props.theme.colors.white};
  margin:${props => props.theme.spacings.xSmall};

  img,h1,p{
    padding:${props => props.theme.spacings.xSmall};
  }

  h2{
    text-align:center;
  }

    @media ${props => props.theme.breakpoints.tablet} {
      display: inline-flex;
        input,
        form {
          width:30rem;
        }
    }

    @media ${props => props.theme.breakpoints.desktop} {
      display: flex;
        input,
        form {
          width:40rem;
        }
    }
`
export const SinglePostWrapper = styled.main`
  grid-column: 1 / -1;
  grid-row: 3 / 4;
  margin:${props => props.theme.spacings.xSmall};
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