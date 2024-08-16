import { StyleSheet } from 'react-native';
import { Stack } from 'expo-router';

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name='index' options={{ headerShown: false }} />
            <Stack.Screen name='BottonTabs' options={{ headerShown: false }} />
            <Stack.Screen name='StackScreen/MessengerTemplate' options={{headerShown:false}}/>
            <Stack.Screen name='StackScreen/ForgotPassTemplate' options={{headerShown:false}}/>
            <Stack.Screen name='StackScreen/ForgotPassCodeTemplate' options={{headerShown:false}}/>
            <Stack.Screen name='StackScreen/ResetPassTemplate' options={{headerShown:false}}/>
            <Stack.Screen name='StackScreen/LoginTemplate' options={{headerShown:false}}/>
            <Stack.Screen name='StackScreen/RegisterTemplate' options={{headerShown:false}}/>
        </Stack>
    );
};

export default _layout;

const styles = StyleSheet.create({});
