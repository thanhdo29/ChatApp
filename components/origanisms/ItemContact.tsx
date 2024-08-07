import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { ContentContact } from "../molecules/ContentContact"
import { RenderIcon } from "../atoms/RenderIcon"
import { isNil } from "lodash"
type Props = {
    namePerson:string,
    notePerson?:string,
    img:number | string
    iconPhone?:React.ReactElement,
    iconVideo?:React.ReactElement
}
export const ItemContact = (props:Props):React.ReactElement=>{
    const soureImg= typeof props.img === 'number' ? props.img : {uri:''} 
    return(
        <View style={styles.container}>
            <View style={styles.viewLeft}>
                <Image style={styles.img} source={soureImg}/>
                <ContentContact namePerson={props.namePerson} notePerson={props.notePerson}/>
            </View>
            <View style={styles.viewRight}>
                {!isNil(props.iconPhone) && RenderIcon(props.iconPhone)}
                {!isNil(props.iconVideo) && RenderIcon(props.iconVideo)}
            </View>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        marginVertical:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center"
    },
    viewLeft:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    viewRight:{
        flex:1,
        flexDirection:"row",
        alignItems:"center"
    },
    img:{
        height:52,
        width:52,
        marginRight:14,
        resizeMode:"contain"
    }
})