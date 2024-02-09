import * as React from "react"
import styled from "styled-components"
import { GatsbyImage } from "gatsby-plugin-image"

export const Post = ({ title, date, author, excerpt, slug, img }) => {

    return (
        <PostCardWrapper>
            <div>
                <H1>{title}</H1>
                <P
                    color="blue"
                    fontSize="xSmall"
                    fontStyle="italic"
                    marginBottom="xSmall"
                ><Span color="black">Published</Span> {date} <Span color="black">by</Span> {author}</P>
                <PostCardContentWrapper>
                    <StyledGatsbyImage image={img} alt={title} />
                    <P color="greyDark" margin="xSmall" fontSize="small" key={title}>{excerpt}</P>
                </PostCardContentWrapper>
            </div>
            <ButtonWrapper href={`/${slug}`}>... Read More ...</ButtonWrapper>
        </PostCardWrapper>
    )

}

const PostCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color:${props => props.theme.colors.white};
  margin:${props =>
        `${props.theme.spacings.small} 0`};
  padding:${props =>
        `${props.theme.spacings.small}`};
  box-shadow:${props => props.theme.shadows.shadow1};
`

const StyledGatsbyImage = styled(GatsbyImage)`
  height: auto !important;
  display: none;
  &:hover {
    -ms-transform: scale(0.9); /* IE 9 */
    -webkit-transform: scale(0.9); /* Safari 3-8 */
    transform: scale(0.9);  
  }

  @media ${props => props.theme.breakpoints.tablet} {
    display:block;
  }
`

const PostCardContentWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
 `

const H1 = styled.h1`
    color: ${props => props.theme.colors.black};
    text-align: ${props => props.textAlign ? props.textAlign.left : 0};
    margin: ${props => props.margin ? props.theme.spacings.xxSmall : 0};
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
`;

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
    margin-bottom: ${props => {
        switch (props.marginBottom) {
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
    font-style: ${props => {
        switch (props.fontStyle) {
            case "italic":
                return props.theme.decoration.italic;
            default:
                return 0;
        }
    }
    };
    text-align: ${props => props.textAlign ? props.textAlign.center : 0};
`;

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

const ButtonWrapper = styled.a`
    position:relative;
    padding:0.2rem;
    margin-top: 1rem;
    border-radius: 0.2rem;
    color: ${props => props.theme.colors.greyDark};
    font-weight: ${props => props.theme.weights.xLarge};
    border-bottom: 1px dotted  ${props => props.theme.colors.greyDark};
    cursor: pointer;
    text-decoration: none;
    margin-top: 20px;

    &:hover,
    &:focus{
        color: ${props => props.theme.colors.blue};
    }
`;