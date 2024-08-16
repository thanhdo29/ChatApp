import { StyleSheet, Text, TouchableOpacity, TouchableOpacityProps, View } from 'react-native'
import React from 'react'
import { ContentContact } from '../molecules/ContentContact'

type Props = {
    nameMethod: string,
    desMethod?: string,
    imgMethod: React.ReactElement,
    onPress?:()=>void
} & TouchableOpacityProps
const ChooseMethodSetting = (props: Props): React.ReactElement => {
    return (
        <TouchableOpacity {...props} style={styles.container}>
            {props.imgMethod}
            <ContentContact
                namePerson={props.nameMethod}
                notePerson={props.desMethod}
                style={{ marginLeft: 12 }}
            />
        </TouchableOpacity>
    )
}

export default ChooseMethodSetting

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 30
    }
})