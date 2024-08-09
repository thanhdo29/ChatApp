import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { ContentContact } from './ContentContact'
type Props = {
    imgUser:number,
    nameUser:string,
    noteUser:string
}
const UserInfor = (props:Props): React.ReactElement => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={props.imgUser}/>
            <ContentContact style={styles.containerContent} namePerson={props.nameUser} notePerson={props.noteUser}/>
        </View>
    )
}

export default UserInfor

const styles = StyleSheet.create({
    container:{
        alignItems:"center"
    },
    img:{
        width:82,
        height:82
    },
    containerContent:{
        alignItems:"center",
        marginTop:12
    }
})