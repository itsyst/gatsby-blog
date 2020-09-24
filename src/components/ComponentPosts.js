import React from "react"
import { PostCard } from "."
import { graphql, useStaticQuery } from "gatsby"

export const Post = () => {

    const data = useStaticQuery(graphql`
        query {
            allMdx (sort:{fields:[frontmatter___date],order:DESC}) {
                edges {
                    node {
                        id
                        frontmatter {
                            title
                            date(formatString:"MMM Do YYYY")
                            author
                            slug
                            excerpt
                            featureImage {
                                childImageSharp {
                                    fluid {
                                    ...GatsbyImageSharpFluid
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    `)
    return (
        <div>
            {data.allMdx.edges.map(({ node }) => (
                <PostCard
                    id={node.id}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    author={node.frontmatter.author}
                    slug={node.frontmatter.slug}
                    excerpt={node.frontmatter.excerpt}
                />
            ))}
        </div>
    )
}