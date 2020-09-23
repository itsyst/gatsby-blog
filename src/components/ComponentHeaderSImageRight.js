import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SImageWrapperRight } from "./styles"

export const SHeaderImageRight = () => {

    const data = useStaticQuery(graphql`
    query { imageSharp(fluid: { originalName: { eq: "camera.jpg" } }) {
        fluid {base64 tracedSVG aspectRatio srcWebp srcSetWebp originalName}}}`)

    return (
        <SImageWrapperRight >
            <Img
                fluid={data.imageSharp.fluid}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </SImageWrapperRight>
    )
}