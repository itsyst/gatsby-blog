import React from "react"
import { ContainerWrapper } from "../components/styles"

export const Container = ({ children }) => {
    return (
        <ContainerWrapper>
            {children}
        </ContainerWrapper>
    )
}
