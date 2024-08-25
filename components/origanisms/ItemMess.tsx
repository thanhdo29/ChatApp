import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ItemContact } from "./ItemContact";
import { ItemLeftMess } from "../molecules/ItemLeftMess";
type Props = {
    imgUser: number| string
    nameUser: string
    messUser: string
    messedTime: string
    quantityMess: string
    onPress?: () => void
}
export const ItemMess = (props: Props): React.ReactElement => {
    return (
        <TouchableOpacity style={styles.containerMess} onPress={props.onPress}>
            <ItemContact img={props.imgUser} namePerson={props.nameUser} notePerson={props.messUser} />
            <ItemLeftMess quantityMess={props.quantityMess} timeAgo={props.messedTime} />
        </TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    containerMess: {
        marginVertical:20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    }
})