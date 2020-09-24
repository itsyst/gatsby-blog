import React from "react"
import { Container, Header, Content, Post, Pagination, SideCard } from "../components"

const IndexPage = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Post />
        <Pagination/>
      </Content>
      <SideCard />
    </Container>
  )
}
export default IndexPage
