import { StyleSheet } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import TabBar from '@/components/atoms/TabBar'

const _layout = () => {
  return (
    <Tabs tabBar={props=> <TabBar {...props}/>}>
        <Tabs.Screen 
            name='index'
            options={{title:"Chat", headerShown:false}}
        />
        <Tabs.Screen 
            name='BottonTabTemplate/Contact'
            options={{title:"Contact", headerShown:false}}
        />
        <Tabs.Screen 
            name='BottonTabTemplate/Profile'
            options={{title:"Profile", headerShown:false}}
        />
        <Tabs.Screen 
            name='BottonTabTemplate/Setting'
            options={{title:"Setting", headerShown:false}}
        />
    </Tabs>
  )
}

export default _layout

const styles = StyleSheet.create({})