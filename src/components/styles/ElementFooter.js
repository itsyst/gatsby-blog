import styled from "styled-components"

export const FooterWrapper = styled.footer`    
    grid-column: 1 / span 6;
    grid-row: 4/ span 5;
    display: flex;
    align-items: center;
    color:${props => props.theme.colors.greyLight2};
    background-color: ${props => props.theme.colors.white};

    p {
    font-size: 1.4rem;
    display:flex;
    flex-direction:column;
    align-items: center;
    flex: 0 1 100%;
    }

    @media ${props => props.theme.breakpoints.tablet} {
        grid-column: 1 / span 8;
        display:block;
    }

    @media ${props => props.theme.breakpoints.desktop} {
        grid-column: 1 / span 14;
    }
`
export const FooterSocialWrapper = styled.div`
    display: flex;
    align-items:center;
    flex: 0 1 25%;

    @media ${props => props.theme.breakpoints.tablet} {
        flex-wrap: wrap;
        text-align: center;
        p {
            text-align: center;
            flex: 0 0 100%;
        }
    }
`

export const FooterSocialIcons = styled.div`
    display:flex;
    flex-direction:column;
    margin: 2rem 0;

    img {
        height: 20px;
        padding: 0 .5rem;
        transition: filter 300ms ease;
    }

    img:hover,
    img:focus {
        filter: brightness(0%);
    }

    @media ${props => props.theme.breakpoints.tablet} {
        display:block;
        flex: 0 0 100%;
        margin: 2rem 0 1rem 0;   

        img {
            margin: 0;
        }
    }
`