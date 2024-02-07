import React from "react"
import { Highlight, themes } from "prism-react-renderer"

export const Code = ({ codeString, language, ...props }) => {
    const defaultHighlightProps = {
        theme: themes.shadesOfPurple
    };

    return (
        <Highlight
            {...defaultHighlightProps}
            code={codeString}
            language={language}
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
