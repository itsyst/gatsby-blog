import React from "react"
import { graphql } from "gatsby"
import { Container, Header, Content, Post, Pagination, SideCard, Seo } from "../components"

export const query = graphql`
  query AllPostsQuery($skip: Int, $limit: Int) {
    posts:allMdx(sort:{frontmatter:{date:DESC}} skip: $skip limit: $limit) {
      edges {
        node {
          id
          frontmatter {
            slug
            title
            date(formatString: "MMMM Do YYYY")
            author
            excerpt
            featureImage {
                childrenImageSharp {
                   gatsbyImageData(
                      aspectRatio:1.5
                      height:200
                      width:200
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
`

const AllPosts = ({ pageContext, data }) => {
  const { currentPage, numPages } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1 ? "/" : `/${currentPage - 1}`
  const nextPage = currentPage === numPages ? null : `/${currentPage + 1}`

  const posts = data.posts.edges

  return (
    <Container>
      <Seo />
      <Header />
      <Content>
        {posts.map(post => (
          <Post
            key={post.node.frontmatter.id}
            date={post.node.frontmatter.date}
            author={post.node.frontmatter.author}
            title={post.node.frontmatter.title}
            excerpt={post.node.frontmatter.excerpt}
            slug={post.node.frontmatter.slug}
            img={post.node.frontmatter.featureImage.childrenImageSharp[0].gatsbyImageData}
          />
        ))}
        <Pagination
          isFirst={isFirst}
          isLast={isLast}
          prevPage={prevPage}
          nextPage={nextPage}
        />
      </Content>
      <SideCard />
    </Container>
  )
}

export default AllPosts
