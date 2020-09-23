import React from "react"
import { ButtonWrapper } from "./styles"

export const Button = ({ children, href }) => {
    return (
        <ButtonWrapper to={"/" + href}>
            {children}
        </ButtonWrapper>
    )
}
