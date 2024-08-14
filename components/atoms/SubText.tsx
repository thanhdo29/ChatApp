import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import getColors from '@/constants/Colors'

type Props = {
    subText:string
}
const SubText = (props:Props) => {
    const colors = getColors(useColorScheme())
  return (
    <View>
      <Text style={[styles.subText, {color:colors.neutralGray}]}>{props.subText}</Text>
    </View>
  )
}

export default SubText

const styles = StyleSheet.create({
    subText:{
        fontSize: 16,
        marginTop: 34
    }
})