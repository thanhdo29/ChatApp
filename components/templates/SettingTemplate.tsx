import { Alert, StyleSheet, useColorScheme, ScrollView, RefreshControl } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Header } from '@/components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import ContainerView from '@/components/atoms/ContainerView';
import dataMethodSetting from '@/constants/DataMethodSetting';
import ChooseMethodSetting from '@/components/origanisms/ChooseMethodSetting';
import Icon from '@/components/atoms/Icons';
import getColors from '@/constants/Colors';
import { ItemContact } from '../origanisms/ItemContact';
import { onAuthStateChanged, signOut, User } from 'firebase/auth';
import { auth } from '@/firebaseConfig';
import { useRouter } from 'expo-router';

const SettingTemplate = () => {
  const colors = getColors(useColorScheme())
  const router = useRouter()
  const [userLogin, setUserLogin] = useState<User | null>(null);
  const [refreshing, setRefreshing] = useState<boolean>(false);

  const fetchUser = async () => {
    const user = auth.currentUser
    if (user) {
      await user.reload()
      setUserLogin(auth.currentUser)
    }
  }

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, userLogin => {
      fetchUser()
    })

    return () => unsubscribe();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await fetchUser();
    setRefreshing(false);
  };

  const handleLogout = () => {
    Alert.alert(
      "Confirm",
      "Are you sure to log out?",
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
      ]
    );
  }

  const handleMethodSetting = (id: string) => {
    switch (id) {
      case '1':
        break;
      case '2':
        break;
      case '3':
        break;
      case '4':
        break;
      case '5':
        break;
      case '6':
        handleLogout();
        break;
    }
  }

  return (
    <ContainerView>
      <Header
        title='Settings' />
      <ScrollView
        contentContainerStyle={styles.scrollView}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }
      >
        <ItemContact
          style={styles.inforPerson}
          img={userLogin?.photoURL ? userLogin.photoURL : require('@/assets/images/avt2.png')}
          namePerson={userLogin?.displayName || 'User Name'}
          notePerson='I am bad' />
        {
          dataMethodSetting.map((item) => (
            <ChooseMethodSetting
              key={item.id}
              onPress={() => handleMethodSetting(item.id)}
              imgMethod={
                <Icon name={item.nameIcon} type={item.typeIcon} color={colors.neutralGray} size={30}
                />}
              nameMethod={item.nameMethod}
              desMethod={item.desMethod}
            />
          ))
        }
      </ScrollView>
    </ContainerView>
  )
}

const styles = StyleSheet.create({
  scrollView: {
    flexGrow: 1,
  },
  inforPerson: {
    marginTop: 50
  }
})

export default SettingTemplate;
