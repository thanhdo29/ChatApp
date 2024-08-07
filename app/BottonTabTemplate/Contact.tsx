import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import React from 'react'
import { Header } from '@/components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ItemContact } from '@/components/origanisms/ItemContact';
import ContainerView from '@/components/atoms/ContainerView';
import dataContact from '@/constants/DataContact';
import ContactTemplate from '@/components/templates/ContactTemplate';

const Contact = () => {
  return (
   <ContactTemplate/>
  )
}

export default Contact

const styles = StyleSheet.create({
 
})
