import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import TabBar from '@/components/atoms/TabBar';
import ChatTemplate from '@/components/templates/ChatTemplate';
import ContactTemplate from '@/components/templates/ContactTemplate';
import ProfileTemplate from '@/components/templates/ProfileTemplate';
import SettingTemplate from '@/components/templates/SettingTemplate';

const BottonTabs = () => {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator tabBar={props => <TabBar {...props} />}>
            <Tab.Screen
                component={ChatTemplate}
                name='BottonTabTemplate/Chat'
                options={{ title: "Chat", headerShown: false }}
            />
            <Tab.Screen
                component={ContactTemplate}
                name='BottonTabTemplate/Contact'
                options={{ title: "Contact", headerShown: false }}
            />
            <Tab.Screen
                component={ProfileTemplate}
                name='BottonTabTemplate/Profile'
                options={{ title: "Profile", headerShown: false }}
            />
            <Tab.Screen
                component={SettingTemplate}
                name='BottonTabTemplate/Setting'
                options={{ title: "Setting", headerShown: false }}
            />
        </Tab.Navigator>
    );
};

export default BottonTabs;
