import { FlatList, StyleSheet, TouchableOpacity, View, Text } from 'react-native'
import React, { useEffect, useRef, useState } from 'react'
import { ItemContact } from '../../components/origanisms/ItemContact'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import ContainerView from '../../components/atoms/ContainerView';
import FooterChat from '../../components/molecules/FooterChat';
import { MessageBubble } from '../../components/molecules/MessBubble';
import { useLocalSearchParams } from 'expo-router';
import { addDoc, collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import useStorage from '@/hooks/useStorage';

const MessengerTemplate = () => {
  const user = useLocalSearchParams()
  const { getObjectItem } = useStorage()
  const userMess = user ? JSON.parse(user.user as string) : null;
  const [messages, setMessages] = useState<Message[]>([])
  const [userLogin, setUserLogin] = useState<User | null>(null)
  const USER_LOGIN_APP = "USER-LOGIN-APP"
  const chatId = [userLogin?.uid, userMess.uid].sort().join('_');
  const chatId2 = [userMess.uid, userLogin?.uid].sort().join('_');
  const flatListRef = useRef<FlatList>(null)

  useEffect(() => {
    const messagesRef = collection(db, 'chats', chatId2, 'messages');
    const q = query(messagesRef, orderBy('createAt', 'asc'))
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const messageList: Message[] = snapshot.docs.map((doc) => ({
        id: doc.id,
        text: doc.data().text,
        isSender: doc.data().userSend.uid == userLogin?.uid,
        createAt: doc.data().createAt.toDate(),
        userSend: doc.data().userSend
      }))
      setMessages(messageList)
      flatListRef.current?.scrollToEnd({ animated: true })
    })

    return () => unsubscribe()
  }, [userMess.firebaseId, chatId])

  useEffect(() => {
    const getUserLogin = async () => {
      const userLogin = await getObjectItem(USER_LOGIN_APP)
      setUserLogin(userLogin as User)
    }
    getUserLogin()
    console.log(userMess);
    

  }, [])

  const handleSendMessage = async (message: string) => {
    try {
      const messageRef = collection(db, "chats", chatId, "messages");
      await addDoc(messageRef, {
        text: message,
        userSend: userLogin,
        isSender: true,
        createAt: new Date()
      });
    } catch (error) {
      console.error("Error adding message: ", error);
    }
  }

  return (
    <ContainerView>
      <View style={styles.container}>
        <ItemContact
          img={userMess.photoURL}
          namePerson={userMess.displayName}
          notePerson='Active now'
          iconPhone={<AntDesign name="phone" size={22} color="black" />}
          iconVideo={<Ionicons name="videocam-outline" size={24} color="black" />}
          backIcon={<AntDesign name="arrowleft" size={24} color="black" />} />
        <FlatList
          data={messages}
          renderItem={({ item }) => (
            <MessageBubble
              key={item.id}
              message={item.text}
              isSender={item.isSender}
              namePerson={item.userSend.displayName}
              imgPerson={require('@/assets/images/avt2.png')} />
          )}
          keyExtractor={(item) => item.id}
          ListFooterComponent={<View style={{ height: 80 }} />}
        />
        <FooterChat onSendMessage={(mess: string) => handleSendMessage(mess)} />
      </View>
    </ContainerView>
  )
}

export default MessengerTemplate

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})
