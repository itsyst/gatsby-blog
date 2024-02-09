import React from "react"
import { Link, graphql, useStaticQuery } from "gatsby"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"
import { Carousel } from "react-bootstrap";

const query = graphql`
    {
        posts:allMdx(sort:{frontmatter:{date:DESC}}){
            nodes {
                frontmatter {
                    slug
                    featureImage {
                        id
                        relativePath
                        base
                        childrenImageSharp {
                            gatsbyImageData
                             (
                              aspectRatio:2.2
                              placeholder:BLURRED
                              quality:70
                              blurredOptions: {width: 100}
                              transformOptions: {
                                fit:COVER 
                                cropFocus:CENTER
                              }
                           )
                        }
                    }
                }
            }
        }
    }
`

export const HeaderImage = () => {
    const { posts } = useStaticQuery(query);
    return (
        <HeaderImageWrapper >
            <Carousel>
                {posts.nodes.map(({ frontmatter }) => (

                    <Carousel.Item key={frontmatter.featureImage.id}>
                        <Link to={frontmatter.slug}>
                            <GatsbyImage
                                image={frontmatter.featureImage.childrenImageSharp[0].gatsbyImageData}
                                alt={frontmatter.featureImage.base.split('.')[0]} />
                        </Link>

                        <Carousel.Caption>
                            <P fontStyle="italic" color="greyDark">{frontmatter.featureImage.base.split('-').join(' ').split('.')[0]}</P>
                        </Carousel.Caption>
                    </Carousel.Item>

                ))}
            </Carousel>
        </HeaderImageWrapper>
    )
}


const HeaderImageWrapper = styled.div`
    grid-column: 1/-1;
    height: 450px;
    grid-row:1/2;

    @media ${props => props.theme.breakpoints.tablet} {
      grid-column: 1/span 3;
    }

    @media ${props => props.theme.breakpoints.desktop} {
      grid-column: 1/span 4;
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
    font-style: ${props => {
        switch (props.fontStyle) {
            case "italic":
                return props.theme.decoration.italic;
            default:
                return 0;
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
