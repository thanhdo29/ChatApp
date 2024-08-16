import { isNil } from "lodash";
import React from "react";
import { StyleSheet, Text, TextInput, TextInputProps, View, ViewProps } from "react-native";
import { RenderIcon } from "./RenderIcon";
type Props = {
    label: string,
    icon?: React.ReactElement
} & TextInputProps & ViewProps
export const EditTextWithLabel = (props: Props): React.ReactElement => {
    return (
        <View {...props}>
            <Text style={styles.label}>{props.label}</Text>
            <View style={!isNil(props.icon) && styles.containerInputSearch}>
                {!isNil(props.icon) && <RenderIcon icon={props.icon}/>}
                <TextInput {...props} style={styles.input} />
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
        marginTop: 7,
        paddingLeft:10
    },
    containerInputSearch:{
        flexDirection:"row"
    }
})