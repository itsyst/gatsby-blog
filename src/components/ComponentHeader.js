import React from "react"
import { HeaderImage } from "../components"
import styled from "styled-components"

export const Header = () => {
    return (

        <HeaderWrapper>
            <FeaturedWrapper>
                <HeaderImage />
            </FeaturedWrapper>
        </HeaderWrapper>
    )
}

const HeaderWrapper = styled.header`
    grid-row: 2 / 3;
    grid-column: 1/ -1;
    height:100%;
 
    @media ${props => props.theme.breakpoints.desktop} {
      grid-column: 2/ span 7;
    }
`

const FeaturedWrapper = styled.section`
    display:grid;
    grid-template-columns: 1 / -1;
    margin: 1rem 0;
 
    @media ${props => props.theme.breakpoints.desktop} {
      grid-template-rows: 28.5rem 28.5rem;
    }
`