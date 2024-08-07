import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ContentContact } from '../molecules/ContentContact'

type Props = {
    nameMethod: string,
    desMethod?: string,
    imgMethod: React.ReactElement
}
const ChooseMethodSetting = (props: Props): React.ReactElement => {
    return (
        <View style={styles.container}>
            {props.imgMethod}
            <ContentContact
                namePerson={props.nameMethod}
                notePerson={props.desMethod}
                style={{ marginLeft: 12 }}
            />
        </View>
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