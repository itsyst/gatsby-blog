import React from "react"
import styled from "styled-components"

export const SinglePost = ({ children }) => {
  return <PostWrapper>{children}</PostWrapper>
}

/* used this styling for the singlePost (mdx) */
const PostWrapper = styled.section`
  background: ${props => props.theme.colors.grey9};
  min-height: calc(100vh - 5rem - 9rem);
  padding: 5rem 0;
 
  h1 {
    text-align: center;
    letter-spacing: ${props => props.theme.spacings.xxSmall};
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 3rem;
    @media screen and (min-width: 800px) {
      font-size: 4rem;
      line-height: 1;
    }
  }
  h2 {
    text-align: center;
    text-align: center;
    letter-spacing: ${props => props.theme.spacings.xxSmall};
    text-transform: capitalize;
    line-height: 1.25;
    margin-bottom: 0.75rem;
    font-family: ${props => props.theme.fonts.primary};
    font-size: 2rem;
    @media screen and (min-width: 800px) {
      font-size: 2.5rem;
      line-height: 1;
    }
  }
  p {
    font-size: 1.125rem;
    font-weight: 400;
    color: ${props => props.theme.colors.greyDark};
  }

  ul {
    margin-top: 2rem;
    display: inline-block;
    list-style-type: none;
    li {
      background: ${props => props.theme.colors.grey9};
      color: ${props => props.theme.colors.grey5};
      padding: 0.5rem 1rem;
      margin: 1rem 0;
      text-transform: uppercase;
    }
  }
  ol {
    color: ${props => props.theme.colors.greyDark};
    margin: 1rem 0 1rem 2rem;
  }
  blockquote {
    background: ${props => props.theme.colors.grey9};
    border-radius: ${props => props.theme.radius.small};
    padding: 1rem;
    line-height: 2;
    color: ${props => props.theme.colors.primary5};
    margin: 2rem 0;
    p {
      font-style: italic;
      font-size: 1.5rem;
      line-height: 2.125rem;
      text-align: center;
      max-width: 36rem;
      margin: 3rem auto;
    }
  }
  }
  pre {
    background: #222;
    color: yellow;
    overflow-x: scroll;
    padding: 1rem 1.5rem;
    border-radius: ${props => props.theme.radius.small};
  }
  code {
    font-family: ${props => props.theme.fonts.code};
    font-size: 1rem;
    line-height: 1.875rem;
    padding: 0 0.3rem;
  }

  hr {
    border: 0;
    height: 1px;
    background: ${props => props.theme.colors.greyDark};
    opacity: 0.1;
    margin-top: 2rem;
  }

  table {
    width: 100%;
    border-spacing: 0.25rem;
    border-collapse: collapse;
    font-size: 1rem;
    line-height: 1.5rem;
    font-weight: 400;
  }

  th {
    font-weight: 700;
  }

  table,
  th,
  td {
    border: 1px solid ${props => props.theme.colors.greyDark};
  }

  th,
  td {
    text-align: left;
    padding: 0.5rem;
  }
  
  img {
    height: 15rem;
    margin: 1rem 0;
  }

  a {
    color: ${props => props.theme.colors.black};
    text-decoration: underline;
  }

  strong {
    font-weight: 700;
  }

  em {
    font-style: italic;
  }

  del {
    text-decoration: line-through;
  }

  @media ${props => props.theme.breakpoints.tablet} {
    grid-column: 1 / span -1;
  }
`