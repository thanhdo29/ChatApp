import { FlatList, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import ContainerView from '@/components/atoms/ContainerView'
import { Header } from '@/components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import { dataUser } from '@/constants/DataUser';
import { ItemListUser } from '../molecules/ItemListUser';
import dataContact from '@/constants/DataContact';
import { ItemMess } from '../origanisms/ItemMess';
import { useRouter } from 'expo-router';

const ChatListTemplate = () => {
  const router = useRouter()
  const moveChatDetail = () => {
    router.push('StackScreen/MessengerTemplate' as never);
  }
  return (
    <ScrollView>
      <ContainerView>
        <Header
          title='Chat'
          iconLeft={
            <AntDesign name="search1" size={24} color="black" />
          }
          iconRight={
            <Image style={styles.img} source={require('@/assets/images/avt2.png')} />
          } />

        <View style={styles.containerUser}>
          <TouchableOpacity style={{ marginRight: 10 }}>
            <Image style={styles.imgUser} source={require('@/assets/images/avt2.png')} />
            <Text style={{ fontSize: 14 }}>My status</Text>
          </TouchableOpacity>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={dataUser}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) =>
              <ItemListUser img={item.img} name={item.name} />
            }
          />
        </View>

        <View>
          {dataContact.map((item) => (
            <ItemMess
              imgUser={item.img}
              messUser={item.note}
              messedTime='10'
              nameUser={item.name}
              quantityMess='3'
              onPress={() => moveChatDetail()} />
          ))}

        </View>

      </ContainerView>
    </ScrollView>
  )
}

export default ChatListTemplate

const styles = StyleSheet.create({
  img: {
    height: 44,
    width: 44
  },
  containerUser: {
    flexDirection: "row",
    marginTop: 40,
    marginBottom: 30
  },
  imgUser: {
    width: 58,
    height: 58,
    marginBottom: 10
  },

})