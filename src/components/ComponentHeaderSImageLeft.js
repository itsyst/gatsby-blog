import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SImageWrapperLeft } from "./styles"

export const SHeaderImageLeft = () => {
    const data = useStaticQuery(graphql`
    query { imageSharp(fluid: { originalName: { eq: "tourism.jpg" } }) {
        fluid {base64 tracedSVG aspectRatio srcWebp srcSetWebp originalName}}}`)

    return (
        <SImageWrapperLeft >
            <Img
                fluid={data.imageSharp.fluid}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </SImageWrapperLeft>
    )
}