import { StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import ContainerView from '../atoms/ContainerView'
import { Header } from '../molecules/Header'
import Ionicons from '@expo/vector-icons/Ionicons';
import getColors from '@/constants/Colors';
import { ItemContact } from '../origanisms/ItemContact';
import SubText from '../atoms/SubText';
import FloatingActionButton from '../atoms/FloatingActionButton';

const CreateGroupChatTemplate = () => {
    return (
        <ContainerView>
            <Header title='Create Group'
                iconLeft={<Ionicons name="arrow-back" size={24} color="black" />} />
            <SubText subText='Group Description' />
            <Text style={styles.text}>Make Group  for Team Work</Text>
            <SubText subText='Group Admin' />
            <ItemContact
                style={styles.containerAdmin}
                img={require('@/assets/images/avt2.png')}
                namePerson='Đỗ Tuấn Thành'
                notePerson='Group admin' />
            <SubText subText='Invited Members' />
            <View style={styles.containerMember}>
                <FloatingActionButton />
            </View>
        </ContainerView>
    )
}

export default CreateGroupChatTemplate

const styles = StyleSheet.create({
    subText: {
        fontSize: 16,
        marginTop: 34
    },
    text: {
        fontSize: 40,
        fontWeight: '500',
        width: '90%',
        marginTop: 16
    },
    containerAdmin: {
        marginTop: 20
    },
    containerMember:{
        marginTop:20
    }
})