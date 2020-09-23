import React from "react"
import { ButtonWrapper, PostCardWrapper, H1, P, SPAN } from "./styles"


export const PostCard = ({ title, date, author, excerpt, slug}) => {

    return (
        <PostCardWrapper>
            <H1>{title}</H1>
            <P color="blue"><SPAN color="black">Published</SPAN> {date} <SPAN color="black">by</SPAN> {author}</P>
            <P color="greyDark">{excerpt}</P>
            <ButtonWrapper href={slug}>Read more ...</ButtonWrapper>
        </PostCardWrapper>
    )

}