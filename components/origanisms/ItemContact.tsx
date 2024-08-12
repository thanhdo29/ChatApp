import React from "react"
import { Image, StyleSheet, View } from "react-native"
import { ContentContact } from "../molecules/ContentContact"
import { RenderIcon } from "../atoms/RenderIcon"
import { isNil } from "lodash"
type Props = {
    namePerson:string,
    notePerson?:string,
    img:number | string
    iconPhone?: string| React.ReactElement,
    iconVideo?:string| React.ReactElement
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
                {!isNil(props.iconPhone) && <RenderIcon icon={props.iconPhone}/>}
                {!isNil(props.iconVideo) && <RenderIcon icon={props.iconVideo}/>}
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
        flexDirection:"row",
        alignItems:"center"
    },
    viewRight:{
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