import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image, ActivityIndicator, useColorScheme, Alert } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import { doc, updateDoc } from 'firebase/firestore';
import { auth, db } from '@/firebaseConfig';
import useStorage from '@/hooks/useStorage';
import ContainerView from '../atoms/ContainerView';
import { PositiveButton } from '../atoms/PositiveButton';
import getColors from '@/constants/Colors';
import { updateProfile } from 'firebase/auth';
import CustomAlert from '../atoms/CustomAlert';

const ProfileTemplate = () => {
  const { getObjectItem } = useStorage();
  const USER_LOGIN_APP = "USER-LOGIN-APP";

  const [user, setUser] = useState<User | null>(null);
  const [displayName, setDisplayName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [image, setImage] = useState<string >('');
  const [loading, setLoading] = useState<boolean>(true);
  const colors = getColors(useColorScheme())

  useEffect(() => {
    const loadUser = async () => {
      setLoading(true)
      const userData : any = await getObjectItem(USER_LOGIN_APP)
      if (userData) {
        setUser(userData as User)
        setDisplayName(userData.displayName || '')
        setEmail(userData.email || '')
        setImage(userData.photoURL || null)
      }
      setLoading(false);
    };

    loadUser();    

  }, []);

  const pickImage = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const saveProfile = async () => {
    if (!user) return

    try {
      await updateProfile(auth.currentUser!, {
        displayName,
        photoURL: image
      })
      setUser({ ...user, displayName, email, photoURL: image });

      if (user.dId) {
        const userRef = doc(db, 'users', user.dId);
        await updateDoc(userRef, { displayName, email, photoURL:image });
      } else {
        console.error("User dId is missing");
      }
      CustomAlert("Notificaion", "Successfull")

    } catch (error) {
      console.error("Updated failed: " + error)
      CustomAlert("Notificaion", "Failed")
    }
  };

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#007bff" />
      </View>
    );
  }

  return (
    <ContainerView>
      <View style={styles.container}>
        <TouchableOpacity style={styles.changeAvatar} onPress={pickImage}>
          <Image source={image ? { uri: image } : require('@/assets/images/avt2.png')} style={styles.avatar} />
          <Text style={[styles.changePhotoText, { color: colors.royalPurple }]}>Change avatar</Text>
        </TouchableOpacity>

        <TextInput
          style={styles.input}
          placeholder="Tên hiển thị"
          value={displayName}
          onChangeText={setDisplayName}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />

        <PositiveButton title="Change" onPress={saveProfile} />
      </View>
    </ContainerView>
  );
};

export default ProfileTemplate;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center'
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 20,
  },
  changePhotoText: {
    marginBottom: 20,
  },
  input: {
    width: '100%',
    padding: 15,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 20,
  },
  saveButton: {
    backgroundColor: '#007bff',
    padding: 15,
    borderRadius: 5,
    width: '100%',
    alignItems: 'center',
  },
  saveButtonText: {
    color: '#fff',
    fontSize: 16,
  },
  changeAvatar: {
    alignItems: "center"
  }
});
