import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import styled from "styled-components"

export const Footer = () => {
    const data = useStaticQuery(graphql`
    query {
          github: file(relativePath: {eq: "github.svg"}) {
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
                        href="https://github.com/itsyst"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.github.publicURL} alt="Github logo" />
                    </a>
                    <a
                        href="https://twitter.com/khaledelhamzi"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.twitter.publicURL} alt="Twitter logo" />
                    </a>
                    <a
                        href="https://www.linkedin.com/in/khaledelhamzi/"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        <img src={data.linkedin.publicURL} alt="Linkedin logo" />
                    </a>
                    <a
                        href="https://stackoverflow.com/users/14376424/khaled-el-hamzi?tab=profile"
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

const FooterWrapper = styled.footer`    
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

const FooterSocialWrapper = styled.div`
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
const FooterSocialIcons = styled.div`
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

const P = styled.p`
    margin: ${props => {
        switch (props.margin) {
            case "xxSmall":
                return props.theme.spacings.xxSmall;
            case "xSmall":
                return props.theme.spacings.xSmall;
            default:
                return 0;
        }
    }
    };
    font-size:${props => {
        switch (props.fontSize) {
            case "large":
                return props.theme.sizes.large;
            case "medium":
                return props.theme.sizes.medium;
            case "xSmall":
                return props.theme.sizes.xSmall;
            default:
                return props.theme.sizes.small;
        }
    }
    };
    line-height: ${props => {
        switch (props.lineHeight) {
            case "small":
                return props.theme.heights.small;
            case "medium":
                return props.theme.heights.medium;
            case "large":
                return props.theme.heights.large;
            default:
                return props.theme.heights.medium;
        }
    }
    };
    font-weight: ${props => {
        switch (props.fontWeight) {
            case "normal":
                return props.theme.weights.normal;
            case "bold":
                return props.theme.weights.bold;
            default:
                return props.theme.weights.normal;
        }
    }
    };
    color: ${props => {
        switch (props.color) {
            case "black":
                return props.theme.colors.black;
            case "orange":
                return props.theme.colors.orange;
            case "blue":
                return props.theme.colors.blue;
            case "greyDark":
                return props.theme.colors.greyDark;
            default:
                return props.theme.colors.greyLight2;
        }
    }
    };
    text-align: ${props => props.textAlign ? props.textAlign.center : 0};
`;

/* Used this the style the footer  */
const Span = styled.span`
    margin: ${props => {
        switch (props.margin) {
            case "xxSmall":
                return props.theme.spacings.xxSmall;
            case "xSmall":
                return props.theme.spacings.xSmall;
            case "xxxSmall":
                return props.theme.spacings.xxxSmall;
            default:
                return 0;
        }
    }
    };
    font-weight: ${props => {
        switch (props.fontWeight) {
            case "normal":
                return props.theme.weights.normal;
            case "bold":
                return props.theme.weights.bold;
            default:
                return props.theme.weights.bold;
        }
    }
    };
    color: ${props => {
        switch (props.color) {
            case "black":
                return props.theme.colors.black;
            case "orange":
                return props.theme.colors.orange;
            default:
                return props.theme.colors.greyLight2;
        }
    }
    };
    text-align: ${props => props.textAlign ? props.textAlign.center : 0};
`;