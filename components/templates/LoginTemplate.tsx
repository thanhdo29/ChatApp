import { Image, StyleSheet, Text, useColorScheme, View } from 'react-native'
import React from 'react'
import EvilIcons from '@expo/vector-icons/EvilIcons';
import { EditTextWithLabel } from '../atoms/EditTextWithLabel';
import { PositiveButton } from '../atoms/PositiveButton';
import getColors from '@/constants/Colors';

const LoginTemplate = () => {
    const colors = getColors(useColorScheme())
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
                <EditTextWithLabel label="Email Address" />
            </View>

            <View style={styles.containerEditText}>
                <EditTextWithLabel label="Password" />
            </View>

            <Text style={[styles.textForgotPass, { color: colors.darkChestnut }]}>Forgot Password</Text>
            <View style={{ marginTop: 42, paddingHorizontal: 8 }}>
                <PositiveButton title="Login" />
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
        marginBottom:30
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
