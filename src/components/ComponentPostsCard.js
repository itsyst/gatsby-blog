import * as React from "react"
import { ButtonWrapper, PostCardWrapper, H1, P, Span } from "./styles"


export const PostCard = ({ title, date, author, excerpt, slug}) => {

    return (
        <PostCardWrapper>
            <H1>{title}</H1>
            <P color="blue"><Span color="black">Published</Span> {date} <Span color="black">by</Span> {author}</P>
            <P color="greyDark">{excerpt}</P>
            <ButtonWrapper href={slug}>Read more ...</ButtonWrapper>
        </PostCardWrapper>
    )

}