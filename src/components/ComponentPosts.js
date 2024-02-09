import React from "react"
import { Post } from "."
import { graphql, useStaticQuery } from "gatsby"

export const Posts = () => {
    const data = useStaticQuery(graphql`
        query {
            allMdx (sort:{frontmatter:{date:DESC}}) {
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
                                childrenImageSharp {
                                        gatsbyImageData(
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
        }
    `)
    return (
        <div>
            {data.allMdx.edges.map(({ node }) => (
                <Post
                    id={node.id}
                    title={node.frontmatter.title}
                    date={node.frontmatter.date}
                    author={node.frontmatter.author}
                    slug={node.frontmatter.slug}
                    excerpt={node.frontmatter.excerpt}
                    image={node.frontmatter.featureImage.childrenImageSharp[0].gatsbyImageData}
                />
            ))
            }
        </div>
    )
}