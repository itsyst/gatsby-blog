import React from "react"
import { SinglePostWrapper } from "../components/styles"

// This component will be used for single post,about page and contact page
export const Main = ({ children }) => {
    return (
        <SinglePostWrapper>
            {children}
        </SinglePostWrapper>)
}


