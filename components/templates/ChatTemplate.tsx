import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ContainerView from '@/components/atoms/ContainerView'
import { Header } from '@/components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';

const ChatTemplate = () => {
  return (
    <ContainerView>
      <Header
        title='Chat'
        iconLeft={
          <AntDesign name="search1" size={24} color="black" />
        }
        iconRight={
          <Image style={styles.img} source={require('@/assets/images/avt2.png')}/>
        } />
        
    </ContainerView>
  )
}

export default ChatTemplate

const styles = StyleSheet.create({
  img:{
    height:44,
    width:44
  }
})