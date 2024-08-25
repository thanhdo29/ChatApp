import { FlatList, Image, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import ContainerView from '@/components/atoms/ContainerView'
import { Header } from '@/components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import { dataUser } from '@/constants/DataUser';
import { ItemListUser } from '../molecules/ItemListUser';
import { ItemMess } from '../origanisms/ItemMess';
import { useRouter } from 'expo-router';
import useStorage from '@/hooks/useStorage';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebaseConfig';

const ChatListTemplate = () => {
  const router = useRouter()
  const { getObjectItem } = useStorage()
  const USER_LOGIN_APP = "USER-LOGIN-APP"
  const [users, setUsers] = useState<User[]>([])
  const [userLogin, setUserLogin] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
          const userList: User[] = snapshot.docs.map(doc => ({
            firebaseId: doc.id,
            ...(doc.data() as User)
          }))
          setUsers(userList)
        })
        return () => unsubscribe()
      } catch (error) {
        console.error("Error get users: " + error)
      }
    }

    const getUserLogin = async () => {
      const userLogin = await getObjectItem(USER_LOGIN_APP)
      setUserLogin(userLogin as User)
    }

    fetchUsers()
    getUserLogin()

  }, [])

  const moveChatDetail = (user: User) => {
    router.push({
      pathname: 'StackScreen/MessengerTemplate' as never,
      params: { user: JSON.stringify(user) }
    });
  }

  const listUser = users.filter(user => user.uid != userLogin?.uid)

  return (
    <ContainerView>
      <Header
        title='Chat'
        iconLeft={<AntDesign name="search1" size={24} color="black" />}
        iconRight={<Image style={styles.img} source={{ uri: userLogin?.photoURL }} />} />

      <View style={styles.containerUser}>
        <TouchableOpacity style={{ marginRight: 10 }}>
          <Image style={styles.imgUser} source={{uri:userLogin?.photoURL}} />
          <Text style={{ fontSize: 14 }}>My status</Text>
        </TouchableOpacity>
        <FlatList
          showsHorizontalScrollIndicator={false}
          horizontal
          data={listUser}
          keyExtractor={(item) => item.uid}
          renderItem={({ item }) => <ItemListUser key={item.uid} img={item.photoURL} name={item.displayName} />}
        />
      </View>

      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={{ flex: 1 }}
      >
        <ScrollView contentContainerStyle={styles.scrollViewContent}>
          {listUser.map((item) => (
            <ItemMess
              key={item.uid}
              messedTime='10'
              nameUser={item.displayName}
              messUser='jchsd'
              imgUser={item.photoURL}
              quantityMess='3'
              onPress={() => moveChatDetail(item)}
            />
          ))}
        </ScrollView>
      </KeyboardAvoidingView>
    </ContainerView>
  )
}

export default ChatListTemplate

const styles = StyleSheet.create({
  img: {
    height: 44,
    width: 44,
    borderRadius:22
  },
  containerUser: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 30
  },
  imgUser: {
    width: 58,
    height: 58,
    borderRadius:29,
    marginBottom: 10
  },
  scrollViewContent: {
    paddingBottom: 300
  },
})