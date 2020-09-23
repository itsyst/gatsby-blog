import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { SImageWrapperMiddle } from "./styles"

export const SHeaderImageMiddle = () => {

    const data = useStaticQuery(graphql`
    query { imageSharp(fluid: { originalName: { eq: "saab.jpg" } }) {
        fluid {base64 tracedSVG aspectRatio srcWebp srcSetWebp originalName}}}`)

    return (
        <SImageWrapperMiddle >
            <Img
                fluid={data.imageSharp.fluid}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </SImageWrapperMiddle>
    )
}