import { StyleSheet, TextInput, useColorScheme, View, ViewProps } from 'react-native';
import React from 'react';
import Feather from '@expo/vector-icons/Feather';
import { RenderIcon } from '../atoms/RenderIcon';
import getColors from '@/constants/Colors';
type Props = {

}& ViewProps
const FooterChat = (props:Props) => {
    const colors = getColors(useColorScheme());
    return (
        <View {...props} style={styles.container}>
            <RenderIcon icon={<Feather name="paperclip" size={24} color="black" />} />
            <TextInput
                style={[styles.input, {backgroundColor:colors.paleMint}]}
                placeholder="Write your message"
                placeholderTextColor={colors.neutralGray}
            />
            <View style={styles.iconsContainer}>
                <RenderIcon icon={<Feather name="camera" size={24} color="black" />}/>
                <RenderIcon icon={<Feather name="mic" size={24} color="black" />}/>
            </View>
        </View>
    );
};

export default FooterChat;

const styles = StyleSheet.create({
    container: {
        flex:1,
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 6,
        position:"absolute",
        bottom:30
    },
    input: {
        flex: 1,
        borderRadius: 12,
        borderWidth: 1,
        borderColor: 'black',
        paddingLeft: 12,
        paddingVertical: 5,
        marginHorizontal: 16,
    },
    iconsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 12,
    },
});
