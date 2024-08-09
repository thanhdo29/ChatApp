import getColors from "@/constants/Colors";
import React from "react";
import { StyleSheet, Text, useColorScheme, View, ViewProps } from "react-native";

type Props = {
    namePerson: string,
    notePerson?: string
} & ViewProps

export const ContentContact = (props: Props): React.ReactElement => {
    const colors = getColors(useColorScheme())
    return (
        <View {...props}>
            <Text style={styles.namePerson}>{props.namePerson}</Text>
            {props.notePerson
                && <Text
                    style={[{ color: colors.neutralGray }, styles.notePerson]}>
                    {props.notePerson}</Text>}
        </View>
    )
}

const styles = StyleSheet.create({
    namePerson: {
        fontSize: 18,
        fontWeight: "600"
    },
    notePerson: {
        fontSize: 12,
        marginTop:3
    }
})
