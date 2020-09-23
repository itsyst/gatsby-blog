import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import Theme from "./src/themes/theme"

const GlobalStyles = createGlobalStyle`
    *,
    *::after,
    *::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
    color: ${props => props.theme.colors.black};
    }

    html {
        font-size: 62.5%; /* This is a default size that defines what 1rem is  1rem = 10px (easy to calculate)*/
    }

    body{
        box-sizing: border-box;
        background-color:${props => props.theme.colors.greyLight1};
        font-family: ${props => props.theme.fonts.main};
        font-weight: ${props => props.theme.weights.normal};
        line-height: ${props => props.theme.heights.height1};
    }
`

export const wrapRootElement = ({ element }) => (
    <ThemeProvider theme={Theme}>
        <GlobalStyles />
        {element}
    </ThemeProvider>

)
