import React from "react"
import {
    HeaderWrapper,
    FeaturedWrapper
} from "./styles"

import {
    BHeaderImageLeft,
    BHeaderImageRight,
} from "../components"


export const Header = () => {
    return (

        <HeaderWrapper>
            <FeaturedWrapper>
                <BHeaderImageLeft />
                <BHeaderImageRight />
            </FeaturedWrapper>
        </HeaderWrapper>
    )
}