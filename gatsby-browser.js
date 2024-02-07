import React from "react"
import { createGlobalStyle, ThemeProvider } from "styled-components"
import { MDXProvider } from "@mdx-js/react"
import { preToCodeBlock } from "mdx-utils"
import Theme from "./src/themes/theme"
import { Table, Code } from "./src/components"
import 'bootstrap/dist/css/bootstrap.min.css';
import "./language-tabs.css"

const GlobalStyles = createGlobalStyle`
    * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }

    body, html {
        font-family: ${props => props.theme.fonts.main};
        height: 100%;
        color:${props => props.theme.colors.black};
        background-color: ${props => props.theme.colors.greyLight1};
    }

`
const components = {
    table: Table,
    pre: preProps => {
        const props = preToCodeBlock(preProps)
        // check if there is codeString and props
        if (props) {
            return <Code {...props} />
        }
        // return a pre without a code in it
        return <pre {...preProps} />
    },
    wrapper: ({ children }) => <>{children}</>,
}


export const wrapRootElement = ({ element }) => (
    <MDXProvider components={components}>
        <ThemeProvider theme={Theme}>
            <GlobalStyles />
            {element}
        </ThemeProvider>
    </MDXProvider>
)

