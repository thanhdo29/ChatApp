import { isNumber } from "lodash"
import React from "react"
import { Image, TouchableOpacity } from "react-native"

export const RenderIcon = (icon:number | React.ReactElement):React.ReactElement =>{
    return(
        <TouchableOpacity>
            {icon}
        </TouchableOpacity>
    )
}