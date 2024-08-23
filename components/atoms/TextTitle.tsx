import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
type Props = {
    title:string
}
const TextTitle = (props:Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{props.title}</Text>
    </View>
  )
}

export default TextTitle

const styles = StyleSheet.create({
    container:{
        marginVertical:20
    },
    title:{
        fontSize:17,
        fontWeight:"500"
    }
})