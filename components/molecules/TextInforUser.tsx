import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import getColors from '@/constants/Colors'
type Props = {
    title: string,
    infor: string
}
const TextInforUser = (props: Props): React.ReactElement => {
    const colors = getColors(useColorScheme())
    return (
        <View style={styles.container}>
            <Text style={[styles.label, { color: colors.neutralGray }]}>{props.title}</Text>
            <Text style={styles.infor}>{props.infor}</Text>
        </View>
    )
}

export default TextInforUser

const styles = StyleSheet.create({
    container:{
        marginTop:30
    },
    label: {
        fontSize: 14
    },
    infor: {
        fontSize: 18,
        marginLeft:4,
        marginTop:10,
        fontWeight:'500'
    }
})