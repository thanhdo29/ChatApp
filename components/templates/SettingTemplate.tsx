import { useColorScheme } from 'react-native'
import React from 'react'
import { Header } from '@/components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import ContainerView from '@/components/atoms/ContainerView';
import dataMethodSetting from '@/constants/DataMethodSetting';
import ChooseMethodSetting from '@/components/origanisms/ChooseMethodSetting';
import Icon from '@/components/atoms/Icons';
import getColors from '@/constants/Colors';

const SettingTemplate = () => {
  const colors = getColors(useColorScheme())
  return (
    <ContainerView>
      <Header
        title='Settings'
        iconLeft={<AntDesign name="arrowleft" size={24} color="black" />} />
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

export default SettingTemplate
