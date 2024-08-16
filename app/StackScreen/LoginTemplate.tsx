import { Alert, Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React, { useState } from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import getColors from '@/constants/Colors';
import { useRouter } from 'expo-router';
import { EditTextWithLabel } from '@/components/atoms/EditTextWithLabel';
import { PositiveButton } from '@/components/atoms/PositiveButton';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/firebaseConfig';

const LoginTemplate = () => {
    const colors = getColors(useColorScheme())
    const router = useRouter()
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    const handleLogin = async () => {
        if (!email || !pass) {
            Alert.alert("Thông báo", "Vui lòng nhập đủ thông tin")
            return
        }

        try {
            const userCredential = await signInWithEmailAndPassword(auth, email, pass)
            const user=userCredential.user
            router.replace('/BottonTabs')

        } catch (error) {
            Alert.alert("Thông báo", "Đăng nhập thất bại")
            console.error("Error login: "+error)
        }
        
    }

    const handleForgotPass = () => {
        router.push('/StackScreen/ForgotPassTemplate')
    }

    const handleSignUp = () => {
        router.push('/StackScreen/RegisterTemplate')
    }


    return (
        <View style={styles.container}>
            <EvilIcons name="arrow-left" size={40} color="black" style={styles.iconBack} />
            <View style={{ flexDirection: "row", marginBottom: 15 }}>
                <View style={{ flex: 4 }}>
                    <Text style={{ fontSize: 24, fontWeight: "700" }}>Hello, Welcome Back</Text>
                    <Text style={{ fontSize: 15 }}>Happy to see you again, to use your account please login first.</Text>
                </View>
                <View style={{ flex: 1 }}></View>
            </View>
            <View style={styles.containerEditText}>
                <EditTextWithLabel label="Email Address" value={email} onChangeText={setEmail}/>
            </View>

            <View style={styles.containerEditText}>
                <EditTextWithLabel label="Password" value={pass} onChangeText={setPass}/>
            </View>

            <Text style={[styles.textForgotPass, { color: colors.darkChestnut }]} onPress={() => handleForgotPass()}>Forgot Password</Text>
            <View style={{ marginTop: 42, paddingHorizontal: 8 }}>
                <PositiveButton title="Login" onPress={() => handleLogin()} />
            </View>
            <View style={styles.separatorContainer}>
                <View style={styles.separatorLine} />
                <Text style={styles.separatorText}>Or Login with</Text>
                <View style={styles.separatorLine} />
            </View>
            <View style={styles.iconContainer}>
                <Image
                    source={require('@/assets/images/icon_google.png')}
                    style={{ height: 35, width: 35 }} />
                <Image
                    source={require('@/assets/images/icon_apple.png')}
                    style={styles.icon} />
                <Image
                    source={require('@/assets/images/icon_fb.png')}
                    style={styles.icon} />
            </View>
            <Text style={styles.textSignUp} onPress={() => handleSignUp()}>Don't have an account? Sign Up</Text>
        </View>
    )
}

export default LoginTemplate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 22,
        justifyContent: "center"
    },
    textForgotPass: {
        fontSize: 13,
        marginTop: 13,
        textAlign: 'right'
    },
    textSignUp: {
        fontSize: 15,
        marginTop: 20,
        textAlign: 'center',
        color: '#007BFF', // Thay đổi màu sắc nếu cần
        textDecorationLine: 'underline'
    },
    iconBack: {
        position: "absolute",
        top: 50,
        left: 20
    },
    containerEditText: {
        marginTop: 26
    },
    separatorContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginTop: 35,
        paddingHorizontal: 20,
        marginBottom: 30
    },
    separatorLine: {
        flex: 0.5,
        height: 1,
        backgroundColor: '#949494',
    },
    separatorText: {
        fontSize: 15,
        marginHorizontal: 10,
    },
    iconContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginTop: 20,
        paddingHorizontal: 50
    },
    icon: {
        width: 25,
        height: 25,
        resizeMode: "contain"
    }
})
