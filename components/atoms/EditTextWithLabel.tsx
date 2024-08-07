import { isNil } from "lodash";
import React from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { RenderIcon } from "./RenderIcon";
type Props = {
    label: string,
    icon?: React.ReactElement
} & TextInputProps
export const EditTextWithLabel = (props: Props): React.ReactElement => {
    return (
        <View>
            <Text style={styles.label}>{props.label}</Text>
            <View style={!isNil(props.icon) && styles.containerInputSearch}>
                {!isNil(props.icon) && RenderIcon(props.icon)}
                <TextInput style={styles.input} />
            </View>
        </View>
    )
}
const styles = StyleSheet.create({
    label: {
        fontSize: 15
    },
    input: {
        borderRadius: 13,
        borderWidth: 1,
        paddingVertical: 6,
        marginTop: 7
    },
    containerInputSearch:{
        flexDirection:"row"
    }
})