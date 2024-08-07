import { StyleSheet } from 'react-native'
import React from 'react'
import { Header } from '@/components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ItemContact } from '@/components/origanisms/ItemContact';
import ContainerView from '@/components/atoms/ContainerView';
import dataContact from '@/constants/DataContact';

const ContactTemplate = () => {
  return (
    <ContainerView>
      <Header title="Contact"
        iconLeft={<MaterialIcons name="person-add-alt" size={24} color="black" />}
        iconRight={<AntDesign name="search1" size={24} color="black" />} />

      {dataContact.map((item) => (
        <ItemContact namePerson={item.name} notePerson={item.note} img={item.img} />
      ))}
    </ContainerView>
  )
}

export default ContactTemplate

const styles = StyleSheet.create({
 
})
