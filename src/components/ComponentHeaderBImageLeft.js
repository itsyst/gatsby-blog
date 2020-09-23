import React from "react"
import Img from "gatsby-image"
import { useStaticQuery, graphql } from "gatsby"
import { BImageWrapperLeft } from "./styles"

export const BHeaderImageLeft = () => {
    const data = useStaticQuery(graphql`
    query { imageSharp(fluid: { originalName: { eq: "viggen.jpg" } }) {
        fluid {
            ...GatsbyImageSharpFluid
        }}}
    `)

    return (
        <BImageWrapperLeft >
            <Img
                fluid={data.imageSharp.fluid}
                style={{
                    width: "100%",
                    height: "100%",
                }}
            />
        </BImageWrapperLeft>
    )
}