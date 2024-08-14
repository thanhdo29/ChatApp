import { StyleSheet, useColorScheme } from 'react-native'
import React from 'react'
import { Header } from '@/components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import ContainerView from '@/components/atoms/ContainerView';
import dataMethodSetting from '@/constants/DataMethodSetting';
import ChooseMethodSetting from '@/components/origanisms/ChooseMethodSetting';
import Icon from '@/components/atoms/Icons';
import getColors from '@/constants/Colors';
import { ItemContact } from '../origanisms/ItemContact';

const SettingTemplate = () => {
  const colors = getColors(useColorScheme())
  return (
    <ContainerView>
      <Header
        title='Settings'
        iconLeft={<AntDesign name="arrowleft" size={24} color="black" />} />
      <ItemContact
        style={styles.inforPerson}
        img={require('@/assets/images/avt2.png')}
        namePerson='Đỗ Tuấn Thành'
        notePerson='I am bad' />
      {
        dataMethodSetting.map((item) => (
          <ChooseMethodSetting
            imgMethod={
              <Icon name={item.nameIcon} type={item.typeIcon} color={colors.neutralGray} size={30}
              />}
            nameMethod={item.nameMethod}
            desMethod={item.desMethod}
          />
        ))
      }
    </ContainerView>
  )
}

const styles=StyleSheet.create({
  inforPerson:{
    marginTop:50
  }
})

export default SettingTemplate
