import styled from "styled-components"

export const HeaderWrapper = styled.header`
    grid-column: 1/ -1;
    grid-row: 2 / 3;
    background-color: ${props => props.theme.colors.greyDark};
    
    @media ${props => props.theme.breakpoints.desktop} {
      grid-column: 2/ span 10;
    }
`
export const FeaturedWrapper = styled.section`
    display:grid;
    grid-template-columns: repeat(8, 1fr);
    grid-template-rows: 18.5rem 18.5rem;
    grid-gap: 1rem;
    margin: 1rem;

    @media ${props => props.theme.breakpoints.desktop} {
      grid-template-rows: 28.5rem 28.5rem;

    }
`
export const BImageWrapperLeft = styled.div`
    grid-column: 1/-1;
    grid-row:1/2;
    
    img:hover{
        -ms-transform: scale(1.5); /* IE 9 */
        -webkit-transform: scale(1.5); /* Safari 3-8 */
        transform: scale(1.5); 
    }

    @media ${props => props.theme.breakpoints.tablet} {
      grid-column: 1/span 3;
    }

    @media ${props => props.theme.breakpoints.desktop} {
      grid-column: 1/span 4;
    }
`

export const BImageWrapperRight = styled.div`
    display:none;
    @media ${props => props.theme.breakpoints.tablet} {
      display: inline;
      grid-column: 4/-1;
      grid-row:1/2;

     img:hover{
        transform: scale(.98); 
     }

    }

    @media ${props => props.theme.breakpoints.desktop} {
      grid-column: 5/ -1;
    }
`


export const SImageWrapperLeft = styled.div`
    grid-column:1/ span 4;
    grid-row: 2 /3;

    @media ${props => props.theme.breakpoints.tablet} {
      grid-column: 1/ span 4;
      img:hover{
        transform: scale(.98); 
      }
    }

    @media ${props => props.theme.breakpoints.desktop} {
      grid-column: 1/ span 3;
    }

`

export const SImageWrapperMiddle = styled.div`
    grid-column: 5 / -1;
    grid-row: 2 /3;
    
    img:hover{
        -ms-transform: scale(1.5); /* IE 9 */
        -webkit-transform: scale(1.5); /* Safari 3-8 */
        transform: scale(1.5); 
    }

    @media ${props => props.theme.breakpoints.desktop} {
    grid-column: 4 / 7;
    }

`

export const SImageWrapperRight = styled.div`
    display:none;

    @media ${props => props.theme.breakpoints.desktop} {
      display: inline;
      grid-row: 2 /3;
      grid-column: 7 /-1;
      img:hover{
        transform: scale(.98); 
      }
    }

`