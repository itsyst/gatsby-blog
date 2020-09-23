import React from "react"
import {
    HeaderWrapper,
    FeaturedWrapper
} from "./styles"

import {
    BHeaderImageLeft,
    BHeaderImageRight,
    SHeaderImageRight,
    SHeaderImageMiddle,
    SHeaderImageLeft,
} from "../components"


export const Header = () => {
    return (

        <HeaderWrapper>
            <FeaturedWrapper>
                <BHeaderImageLeft />
                <BHeaderImageRight />
                <SHeaderImageRight />
                <SHeaderImageMiddle />
                <SHeaderImageLeft />
            </FeaturedWrapper>
        </HeaderWrapper>
    )
}