import React from "react"
import { SideCard } from "../components"
import { SidebarWrapper,H1} from "../components/styles"
import { graphql, useStaticQuery } from "gatsby"

export const Card = () => {

    const data = useStaticQuery(graphql`
        query {
            allMdx (sort:{fields:[frontmatter___date],order:DESC},limit: 3) {
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
        <SidebarWrapper>
            <H1 margin="Small">Recent Posts</H1>
            {data.allMdx.edges.map(({ node }) => (
                <SideCard
                    id={node.id}
                    title={node.frontmatter.title}
                    slug={node.frontmatter.slug}
                    excerpt={node.frontmatter.excerpt}
                    fluid={node.frontmatter.featureImage.childImageSharp.fluid}
                />
            ))}
        </SidebarWrapper>
    )
}