import { StyleSheet, View, Alert } from 'react-native';
import React, { useState } from 'react';
import ContainerView from '../../components/atoms/ContainerView';
import { Header } from '../../components/molecules/Header';
import AntDesign from '@expo/vector-icons/AntDesign';
import { EditTextWithLabel } from '../../components/atoms/EditTextWithLabel';
import { PositiveButton } from '../../components/atoms/PositiveButton';
import { useRouter } from 'expo-router';
import { addDoc, collection } from 'firebase/firestore';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { auth, db } from '@/firebaseConfig';

const RegisterTemplate = () => {
    const router = useRouter();
    const [name, setName] = useState<string>('');
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');

    const handleRegister = async () => {
        if (!name || !email || !password || !confirmPassword) {
            Alert.alert("Thông báo", "Vui lòng nhập đủ thông tin")
            return
        }
        if (password !== confirmPassword) {
            Alert.alert("Thông báo", "Mật khẩu không trùng khớp")
            return
        }

        try {
            const userCredential = await createUserWithEmailAndPassword(auth, email, password);
            const user = userCredential.user;

            await updateProfile(user, { displayName: name })
            await addDoc(collection(db, 'users'), {
                uid: user.uid,
                name: name,
                email: email,
            });
            Alert.alert("Thông báo", "Đăng kí thành công")
        } catch (error) {
            console.error('Error register: ' + error)
        }

    };

    const goBack = () => {
        router.canGoBack() && router.back();
    };

    return (
        <ContainerView>
            <Header
                iconLeft={<AntDesign name="arrowleft" size={24} color="black" />}
                title='Sign up with Email'
                subTitle='Get chatting with friends and family today by signing up for our chat app!'
                position={true}
                onPressLeftIcon={goBack}
            />
            <View style={styles.containerContent}>
                <EditTextWithLabel
                    label='Your name'
                    value={name}
                    onChangeText={setName}
                />
                <EditTextWithLabel
                    label='Your email'
                    value={email}
                    onChangeText={setEmail}
                    style={styles.editText}
                />
                <EditTextWithLabel
                    label='Password'
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                    style={styles.editText}
                />
                <EditTextWithLabel
                    label='Confirm Password'
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    style={styles.editText}
                />
                <PositiveButton
                    title='Create an account'
                    style={{ marginTop: 50 }}
                    onPress={handleRegister}
                />
            </View>
        </ContainerView>
    );
}

export default RegisterTemplate;

const styles = StyleSheet.create({
    containerContent: {
        marginTop: 50
    },
    editText: {
        marginTop: 20
    }
});
