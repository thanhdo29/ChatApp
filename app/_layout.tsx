import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='BottonTabs' options={{ headerShown: false }} />
            <Stack.Screen name='StackScreen/MessengerTemplate' options={{headerShown:false}}/>
        </Stack>
    );
};

export default _layout;

const styles = StyleSheet.create({});
