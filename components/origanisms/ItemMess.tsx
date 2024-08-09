import React from "react";
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { ItemContact } from "./ItemContact";
import { ItemLeftMess } from "../molecules/ItemLeftMess";
type Props = {
    imgUser:number
    nameUser:string
    messUser:string
    messedTime:string
    quantityMess:string
}
export const ItemMess = (props:Props):React.ReactElement=>{
    return(
        <TouchableOpacity style={styles.containerMess}>
            <ItemContact img={props.imgUser} namePerson={props.nameUser} notePerson={props.messUser}/>
            <ItemLeftMess quantityMess={props.quantityMess} timeAgo={props.messedTime}/>
        </TouchableOpacity>
    )
}
const styles= StyleSheet.create({
    containerMess:{
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
      }
})