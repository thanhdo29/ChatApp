import { SectionList, StyleSheet, Text } from 'react-native';
import React, { useEffect, useState } from 'react';
import { Header } from '@/components/molecules/Header';
import AntDesign from '@expo/vector-icons/AntDesign';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { ItemContact } from '@/components/origanisms/ItemContact';
import ContainerView from '@/components/atoms/ContainerView';
import useStorage from '@/hooks/useStorage';
import { collection, onSnapshot } from 'firebase/firestore';
import { db } from '@/firebaseConfig';
import TextTitle from '../atoms/TextTitle';

const ContactTemplate = () => {
  const { getObjectItem } = useStorage();
  const USER_LOGIN_APP = "USER-LOGIN-APP";
  const [users, setUsers] = useState<User[]>([]);
  const [userLogin, setUserLogin] = useState<User | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const unsubscribe = onSnapshot(collection(db, 'users'), (snapshot) => {
          const userList: User[] = snapshot.docs.map(doc => ({
            firebaseId: doc.id,
            ...(doc.data() as User)
          }));
          setUsers(userList);
        });
        return () => unsubscribe();
      } catch (error) {
        console.error("Error get users: " + error);
      }
    };

    const getUserLogin = async () => {
      const userLogin = await getObjectItem(USER_LOGIN_APP);
      setUserLogin(userLogin as User);
    };

    fetchUsers();
    getUserLogin();
  }, []);

  const listUser = users.filter(user => user.uid !== userLogin?.uid);

  const sectionData = listUser.reduce((acc: any, user) => {
    const firstLetter = user.displayName.charAt(0).toLocaleUpperCase();
    const section = acc.find((section: any) => section.title === firstLetter);

    if (section) {
      section.data.push(user);
    } else {
      acc.push({
        title: firstLetter,
        data: [user]
      });
    }

    return acc;
  }, []);

  return (
    <ContainerView>
      <Header
        title="Contact"
        iconLeft={<MaterialIcons name="person-add-alt" size={24} color="black" />}
        iconRight={<AntDesign name="search1" size={24} color="black" />}
      />
      <TextTitle title='My Contact'/>
      <SectionList
        sections={sectionData}
        keyExtractor={(item) => item.uid}
        renderItem={({ item }) => (
          <ItemContact
            style={styles.containerItemContact}
            namePerson={item.displayName}
            notePerson={'sjdhfs'}
            img={require('@/assets/images/avt2.png')}
          />
        )}
        renderSectionHeader={({ section: { title } }) => (
          <Text style={styles.sectionHeader}>{title}</Text>
        )}
      />
    </ContainerView>
  );
};

export default ContactTemplate;

const styles = StyleSheet.create({
  containerItemContact: {
    marginVertical: 20,
  },
  sectionHeader: {
    fontWeight: 'bold',
    fontSize: 18,
    backgroundColor: '#f4f4f4',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
});
