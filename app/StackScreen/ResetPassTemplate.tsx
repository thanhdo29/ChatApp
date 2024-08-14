import { StyleSheet, View } from 'react-native'
import React, { useState } from 'react'
import ContainerView from '../../components/atoms/ContainerView'
import { Header } from '../../components/molecules/Header'
import AntDesign from '@expo/vector-icons/AntDesign';
import { EditTextWithLabel } from '../../components/atoms/EditTextWithLabel';
import { PositiveButton } from '../../components/atoms/PositiveButton';
import { useRouter } from 'expo-router';

const ResetPasswordTemplate = () => {
    const router = useRouter()
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const handleResetPassword = () => {
        // Đặt lại mật khẩu
        // Điều hướng về màn hình đăng nhập hoặc thông báo thành công
        router.replace('/StackScreen/LoginTemplate' as never)
    }

    return (
        <ContainerView>
            <Header
                iconLeft={<AntDesign name="arrowleft" size={24} color="black" />}
                title='Reset Password'
                subTitle='Enter your new password below.'
                position={true}
            />
            <View style={styles.containerContent}>
                <EditTextWithLabel 
                    label='New Password'
                    value={password}
                    onChangeText={setPassword}
                />
                <EditTextWithLabel 
                    label='Confirm New Password'
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    style={styles.editText}
                />
                <PositiveButton title='Reset Password' style={{ marginTop: 50 }} onPress={handleResetPassword} />
            </View>
        </ContainerView>
    )
}

export default ResetPasswordTemplate

const styles = StyleSheet.create({
    containerContent: {
        marginTop: 50
    },
    editText: {
        marginTop: 20
    }
})
