import { isNil } from "lodash"
import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { RenderIcon } from "../atoms/RenderIcon"
type Props = {
    iconLeft?: React.ReactElement
    iconRight?: number | React.ReactElement 
    title?: string
}
export const Header = (props: Props): React.ReactElement => {
    
    return (
        <View style={styles.container}>
            {!isNil(props.iconLeft) && RenderIcon(props.iconLeft)}
            <View style={styles.containerTitle}>
                <Text style={styles.textTitle}>{props.title}</Text>
            </View>
            {!isNil(props.iconRight) && RenderIcon(props.iconRight)}
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    textTitle: {
        fontSize: 20,
        textAlign: "center"
    },
    containerTitle: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})