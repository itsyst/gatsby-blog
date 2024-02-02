import React from "react"
import { Highlight, themes, defaultProps } from "prism-react-renderer"

export const Code = ({ codeString, language, ...props }) => {
    return (
        <Highlight
            {...defaultProps}
            code={codeString}
            language={language}
            theme={themes.shadesOfPurple}
        >
            {({ className, style, tokens, getLineProps, getTokenProps }) => (
                <div className="gatsby-highlight" data-language={language}>
                    <pre className={className} style={style}>
                        {tokens.map((line, i) => (
                            <div {...getLineProps({ line, key: i })}>
                                {line.map((token, key) => (
                                    <span {...getTokenProps({ token, key })} />
                                ))}
                            </div>
                        ))}
                    </pre>
                </div>
            )}
        </Highlight>
    )
}
