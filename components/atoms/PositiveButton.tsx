import getColors from "@/constants/Colors";
import React from "react";
import { ButtonProps, StyleSheet, Text, TouchableOpacity, useColorScheme, View, ViewProps } from "react-native";

type Props = {
    title: string,
} & ButtonProps & ViewProps
export const PositiveButton = (props: Props): React.ReactElement => {
    const colors = getColors(useColorScheme())
    return (
        <View {...props}>
            <TouchableOpacity style={[styles.btn, { backgroundColor: colors.royalPurple }]}>
                <Text style={[styles.textBtn, { color: colors.white }]}>{props.title}</Text>
            </TouchableOpacity>
        </View>
    )
}
const styles = StyleSheet.create({
    btn: {
        borderRadius: 15,
        paddingVertical: 8
    },
    textBtn: {
        fontSize: 20,
        textAlign: 'center',
    }
})