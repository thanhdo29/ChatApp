import { useColorScheme, View } from 'react-native'
import React from 'react'

import getColors from '@/constants/Colors';
import SettingTemplate from '@/components/templates/SettingTemplate';

const Setting = () => {
  const colors = getColors(useColorScheme())
  return (
  <SettingTemplate/>
  )
}

export default Setting
