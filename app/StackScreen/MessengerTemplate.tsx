import { FlatList, StyleSheet, View } from 'react-native'
import React from 'react'
import { ItemContact } from '../../components/origanisms/ItemContact'
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';
import ContainerView from '../../components/atoms/ContainerView';
import FooterChat from '../../components/molecules/FooterChat';
import { MessageBubble } from '../../components/molecules/MessBubble';

const MessengerTemplate = () => {
  const messengers = [
    {
      id: '1',
      text: "Alo",
      isSender: true
    },
    {
      id: '2',
      text: "Game ko",
      isSender: true
    },
    {
      id: '3',
      text: "Có",
      isSender: false
    },
    {
      id: '4',
      text: "Vào đi sjhgdgdggggggggggggggggggggggggggggggdddđ",
      isSender: false
    },
  ]
  return (
    <ContainerView>
      <View style={styles.container}>
        <ItemContact
          img={require('@/assets/images/avt2.png')}
          namePerson='Đỗ Tuấn Thành'
          notePerson='Active now'
          iconPhone={<AntDesign name="phone" size={22} color="black" />}
          iconVideo={<Ionicons name="videocam-outline" size={24} color="black" />}
          backIcon={<AntDesign name="arrowleft" size={24} color="black" />} />
        <FlatList
          data={messengers}
          renderItem={({ item }) => (
            <MessageBubble
              message={item.text}
              isSender={item.isSender}
              namePerson='Đỗ Tuấn Thành'
              imgPerson={require('@/assets/images/avt2.png')} />
          )}
          keyExtractor={(item) => item.id}
        />
        <FooterChat />
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
