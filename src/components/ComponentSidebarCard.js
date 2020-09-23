import React from "react"
import Img from "gatsby-image"
import { ButtonWrapper, SideCardWrapper, H1 } from "./styles"


export const SideCard = ({ slug, title, fluid }) => {

    return (
        <SideCardWrapper>
            <ButtonWrapper href={slug}><H1 margin="xxSmall"> {title} </H1>
                <Img
                    fluid={fluid}
                    style={{
                        width: "100%",
                        height: "100%",
                    }}
                />
            </ButtonWrapper>
        </SideCardWrapper>
    )

}