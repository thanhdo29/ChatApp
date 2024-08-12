import { StyleSheet, View } from 'react-native'
import React from 'react'
import ContainerView from '../atoms/ContainerView'
import { Header } from '../molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import { EditTextWithLabel } from '../atoms/EditTextWithLabel';
import { PositiveButton } from '../atoms/PositiveButton';
import { useRouter } from 'expo-router';

const RegisterTemplate = () => {
    const router=useRouter()
    const goBack = () => {
        router.canGoBack()
    }
    return (
        <ContainerView>
            <Header
                iconLeft={<AntDesign name="arrowleft" size={24} color="black" />}
                title='Sign up with Email'
                subTitle='Get chatting with friends and family today by signing up for our chat app!'
                position={true}
            />
            <View style={styles.containerContent}>
                <EditTextWithLabel label='Your name' />
                <EditTextWithLabel label='Your email' style={styles.editText} />
                <EditTextWithLabel label='Password' style={styles.editText} />
                <EditTextWithLabel label='Confirm Password' style={styles.editText} />
                <PositiveButton title='Create an account' style={{ marginTop: 50 }} onPress={()=>goBack}/>
            </View>
        </ContainerView>
    )
}

export default RegisterTemplate

const styles = StyleSheet.create({
    containerContent: {
        marginTop: 50
    },
    editText: {
        marginTop: 20
    }
})