import { StyleSheet, View } from 'react-native';
import React from 'react';
import ContainerView from '../atoms/ContainerView';
import { Header } from '../molecules/Header';
import AntDesign from '@expo/vector-icons/AntDesign';
import UserInfor from '../molecules/UserInfor';
import TextInforUser from '../molecules/TextInforUser';
import { RenderIcon } from '../atoms/RenderIcon';
import dataContactMethod from '@/constants/DataContactMethod';
import Icon from '../atoms/Icons';

const UserDetailTemplate = (): React.ReactElement => {
    const handleChatPress = () => {
        console.log("Chat icon clicked");
    };

    const handleVideoPress = () => {
        console.log("Video icon clicked");
    };

    const handlePhonePress = () => {
        console.log("Phone icon clicked");
    };

    const handleMorePress = () => {
        console.log("More icon clicked");
    };
    const handleOnPress = (id: string) => {
        switch (id) {
            case '1':
                handleChatPress()
                break
            case '2':
                handlePhonePress()
                break
            case '3':
                handleVideoPress()
                break
            case '4':
                handleMorePress()
                break
            default:
                console.log("Unknown icon clicked")
        }
    }

    return (
        <ContainerView>
            <Header position iconLeft={<AntDesign name="arrowleft" size={20} color="black" />} />
            <UserInfor
                imgUser={require('@/assets/images/avt2.png')}
                nameUser='Đỗ Tuấn Thành'
                noteUser='I very happy' />

            <View style={styles.containerContact}>
                {
                    dataContactMethod.map((item) => ((
                        <RenderIcon
                            key={item.id}
                            icon={<Icon type={item.typeIcon} name={item.nameIcon} />}
                            onPress={() => handleOnPress(item.id)} />
                    )))
                }
            </View>
            <TextInforUser title='Display Name' infor='Đỗ Tuấn Thành' />
            <TextInforUser title='Email Address' infor='tdo29032k4@gmail.com' />
            <TextInforUser title='Address' infor='59 Văn Tiến Dũng, Cầu Diễn' />
            <TextInforUser title='Phone Number' infor='0869849031' />
        </ContainerView>
    );
};

export default UserDetailTemplate;

const styles = StyleSheet.create({
    containerContact: {
        flexDirection: "row",
        justifyContent: "center",
        gap: 40,
        marginTop: 20
    }
});
