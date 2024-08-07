import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import { Header } from '@/components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import ContainerView from '@/components/atoms/ContainerView';
import dataMethodSetting from '@/constants/DataMethodSetting';
import ChooseMethodSetting from '@/components/origanisms/ChooseMethodSetting';
import Icon from '@/components/atoms/Icons';
import getColors from '@/constants/Colors';
import SettingTemplate from '@/components/templates/SettingTemplate';

const Setting = () => {
  const colors = getColors(useColorScheme())
  return (
  <SettingTemplate/>
  )
}

export default Setting
