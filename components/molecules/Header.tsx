import { isNil, isNumber } from "lodash"
import React, { ReactElement } from "react"
import { Button, Image, StyleSheet, Text, TouchableOpacity, useColorScheme, View } from "react-native"
import { RenderIcon } from "../atoms/RenderIcon"
import getColors from "@/constants/Colors"
type Props = {
    iconLeft?: React.ReactElement
    iconRight?: number | React.ReactElement
    title?: string
    subTitle?: string
    position?: boolean
}
export const Header = (props: Props): React.ReactElement => {
    const colors = getColors(useColorScheme())
    const renderIcon = (icon: number | ReactElement) => {
        if (isNumber(icon)) {
            return <Image source={icon} />
        }
        return <TouchableOpacity
            style={{position: props.position === true ? 'absolute': undefined} }>
            {icon}
        </TouchableOpacity>
    }
    return (
        <View style={styles.container}>
            {!isNil(props.iconLeft) && renderIcon(props.iconLeft)}

            {!isNil(props.title) && isNil(props.subTitle) && (
                <View style={styles.containerTitleAlone}>
                    <Text style={styles.textTitleAlone}>{props.title}</Text>
                </View>
            )}

            {!isNil(props.title) && !isNil(props.subTitle) && (
                <View style={styles.containerTitle}>
                    <Text style={styles.textTitle}>{props.title}</Text>
                    <Text style={[{ color: colors.neutralGray }, styles.textSubTitle]}>{props.subTitle}</Text>
                </View>
            )}
            {!isNil(props.iconRight) && renderIcon(props.iconRight)}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textTitleAlone: {
        fontSize: 20,
        textAlign: "center"
    },
    containerTitleAlone: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    textTitle: {
        fontSize:24,
        fontWeight:'700'
    },
    textSubTitle: {

    },
    containerTitle: {
        flex:1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 60,
        gap:15
    }
})