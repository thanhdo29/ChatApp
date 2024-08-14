import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'

import AntDesign from '@expo/vector-icons/AntDesign';

import { useRouter } from 'expo-router';
import ContainerView from '@/components/atoms/ContainerView';
import { Header } from '@/components/molecules/Header';
import { EditTextWithLabel } from '@/components/atoms/EditTextWithLabel';
import { PositiveButton } from '@/components/atoms/PositiveButton';

const ForgotPassTemplate = () => {
    const router = useRouter()
    const [email, setEmail] = useState('')

    const handleSendCode = () => {
        // Gửi mã xác nhận tới email
        // Giả lập thành công và điều hướng tới màn hình nhập mã xác nhận
        router.push('/StackScreen/ForgotPassCodeTemplate' as never)
    }
    const back=()=>{
        router.back()
    }
    return (
        <ContainerView>
            <Header
                iconLeft={<AntDesign name="arrowleft" size={24} color="black" />}
                title='Forgot Password'
                subTitle='Enter your email to receive a password reset code.'
                position={true}
                onPressLeftIcon={back}
            />
            <View style={styles.containerContent}>
                <EditTextWithLabel 
                    label='Your email'
                    value={email}
                    onChangeText={setEmail}
                />
                <PositiveButton title='Send Code' style={{ marginTop: 50 }} onPress={handleSendCode} />
            </View>
        </ContainerView>
    )
}

export default ForgotPassTemplate

const styles = StyleSheet.create({
    containerContent: {
        marginTop: 50
    },
    editText: {
        marginTop: 20
    }
})
