import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ContainerView from '../../components/atoms/ContainerView'
import { Header } from '../../components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import { EditTextWithLabel } from '../../components/atoms/EditTextWithLabel';
import { PositiveButton } from '../../components/atoms/PositiveButton';
import { useRouter } from 'expo-router';

const ForgotPassCodeTemplate = () => {
    const router = useRouter()
    const [code, setCode] = useState('')

    const handleVerifyCode = () => {
        // Kiểm tra mã xác nhận
        // Nếu mã đúng, điều hướng tới màn hình đặt lại mật khẩu
        router.push('/StackScreen/ResetPassTemplate' as never)
    }
    const back = ()=>{
        router.back()
    }
    return (
        <ContainerView>
            <Header
                iconLeft={<AntDesign name="arrowleft" size={24} color="black" />}
                title='Enter Verification Code'
                subTitle='We have sent a code to your email, please enter it below.'
                position={true}
                onPressLeftIcon={back}
            />
            <View style={styles.containerContent}>
                <EditTextWithLabel 
                    label='Verification Code'
                    value={code}
                    onChangeText={setCode}
                />
                <PositiveButton title='Verify Code' style={{ marginTop: 50 }} onPress={handleVerifyCode} />
            </View>
        </ContainerView>
    )
}

export default ForgotPassCodeTemplate

const styles = StyleSheet.create({
    containerContent: {
        marginTop: 50
    },
    editText: {
        marginTop: 20
    }
})
