import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { BImageWrapperRight } from "./styles"

export const BHeaderImageRight = () => {
    const data = useStaticQuery(graphql`
    query { imageSharp(fluid: { originalName: { eq: "run.jpg" } }) {
        fluid {base64 tracedSVG aspectRatio srcWebp srcSetWebp originalName}}}`)

    return (
        <BImageWrapperRight>
            <Img
                fluid={data.imageSharp.fluid}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </BImageWrapperRight>
    )
}