import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

type Props = {
    img: number | string,
    name: string
}

export const ItemListUser = (props: Props): React.ReactElement => {
    const lastName = props.name.split(' ').pop() || ''
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={typeof props.img === 'number' ? props.img : { uri: props.img }} />
            <Text style={styles.textName}>{lastName}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginHorizontal: 10
    },
    img: {
        height: 58,
        width: 58,
        borderRadius:29,
        resizeMode: "contain",
        marginBottom: 10
    },
    textName: {
        fontSize: 14
    }
})