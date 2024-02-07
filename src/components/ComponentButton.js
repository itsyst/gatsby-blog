import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

export const Button = ({ children, href }) => {
    return (
        <ButtonWrapper to={"/" + href}>
            {children}
        </ButtonWrapper>
    )
}

const ButtonWrapper = styled(props => <Link {...props} />)`
    padding:0.2rem;
    margin-top: 1rem;
    border-radius: 0.2rem;
    color: ${props => props.theme.colors.greyDark};
    font-weight: ${props => props.theme.weights.xLarge};
    border: 1px solid ${props => props.theme.colors.orange};
    cursor: pointer;
    text-decoration: none;
    
    &:hover,
    &:focus{
        color: ${props => props.theme.colors.orange};

    }
`
