import { StyleSheet, Text, TouchableOpacity, useColorScheme, View } from 'react-native'
import React from 'react'
import Ionicons from '@expo/vector-icons/Ionicons';
import getColors from '@/constants/Colors';

const FloatingActionButton = () => {
    const colors=getColors(useColorScheme())
    return (
        <TouchableOpacity style={[styles.fab, {borderColor:colors.neutralGray}]}>
            <Ionicons name="add" size={24} color={colors.neutralGray} />
        </TouchableOpacity>
    )
}

export default FloatingActionButton

const styles = StyleSheet.create({
    fab:{
        height:62,
        width:62,
        borderRadius:31,
        borderWidth:1,
        justifyContent:"center",
        alignItems:"center"
    }
})