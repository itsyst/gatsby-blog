import styled from "styled-components"

//mobile first design
export const ContainerWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows:9rem 30rem auto 12rem;
  gap: 0 1rem;
  height: 100vh;

  @media ${props => props.theme.breakpoints.tablet} {
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0 1rem;
  }

  @media ${props => props.theme.breakpoints.desktop} {
    grid-template-columns: repeat(12, 1fr);
    grid-template-rows:9rem 30rem 1fr auto;
    grid-gap: 0 2rem;
  }
`
