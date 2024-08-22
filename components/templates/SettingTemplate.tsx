import { Alert, StyleSheet, useColorScheme } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header } from '@/components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import ContainerView from '@/components/atoms/ContainerView';
import dataMethodSetting from '@/constants/DataMethodSetting';
import ChooseMethodSetting from '@/components/origanisms/ChooseMethodSetting';
import Icon from '@/components/atoms/Icons';
import getColors from '@/constants/Colors';
import { ItemContact } from '../origanisms/ItemContact';
import { signOut } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { useRouter } from 'expo-router';
import useStorage from '@/hooks/useStorage';

const SettingTemplate = () => {
  const colors = getColors(useColorScheme())
  const router = useRouter()
  const [userLogin, setUserLogin] = useState<User | null>();
  const { getObjectItem } = useStorage()
  const USER_LOGIN_APP = "USER-LOGIN-APP"

  useEffect(() => {
    const getUserLogin = async () => {
      const userLogin = await getObjectItem(USER_LOGIN_APP)
      setUserLogin(userLogin as User)
    }

    getUserLogin()
    console.log(userLogin)

  }, [])
  const handleLogout = () => {
    Alert.alert("Xác nhận",
      "Bạn có chắc chắn đăng xuất không?",
      [
        {
          text: "Không",
          style: "cancel"
        },
        {
          text: "Có",
          onPress: async () => {
            try {
              await signOut(auth)
              console.log('logout success');
              router.replace('/StackScreen/LoginTemplate')
            } catch (error) {
              Alert.alert("Không thể đăng xuất")
              console.error("Error logout: " + error)
            }
          }
        }
      ])

  }
  const handleMethodSetting = (id: string) => {
    switch (id) {
      case '1':
        break
      case '2':
        break
      case '3':
        break
      case '4':
        break
      case '5':
        break
      case '6':
        handleLogout()
        break
    }
  }
  return (
    <ContainerView>
      <Header
        title='Settings'
        iconLeft={<AntDesign name="arrowleft" size={24} color="black" />} />
      <ItemContact
        style={styles.inforPerson}
        img={require('@/assets/images/avt2.png')}
        namePerson={userLogin?.displayName!}
        notePerson='I am bad' />
      {
        dataMethodSetting.map((item) => (
          <ChooseMethodSetting
            onPress={() => handleMethodSetting(item.id)}
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

const styles = StyleSheet.create({
  inforPerson: {
    marginTop: 50
  }
})

export default SettingTemplate
