import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { FooterWrapper, FooterSocialWrapper, FooterSocialIcons, P, Span } from "./styles"

export const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
          facebook: file(relativePath: {eq: "facebook.svg"}) {
            publicURL
          }
          twitter: file(relativePath: {eq: "twitter.svg"}) {
            publicURL
          }
          linkedin: file(relativePath: {eq: "linkedin.svg"}) {
            publicURL
          }
          rss: file(relativePath: {eq: "rss.svg"}) {
            publicURL
          }
        }
    `)

    return (
        <FooterWrapper>
            <FooterSocialWrapper>
                <FooterSocialIcons>
                    <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.facebook.publicURL} alt="Facebook logo" />
                    </a>
                    <a
                        href="https://twitter.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.twitter.publicURL} alt="Twitter logo" />
                    </a>
                    <a
                        href="https://linkedin.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.linkedin.publicURL} alt="Linkedin logo" />
                    </a>
                    <a
                        href="https://rss.com"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.rss.publicURL} alt="Instagram logo" />
                    </a>
                </FooterSocialIcons>
            </FooterSocialWrapper>
            <P>
                <Span margin="xSmall"> © {new Date().getFullYear()}, Copyright All rights reserved </Span>
            </P>
        </FooterWrapper>
    )
}