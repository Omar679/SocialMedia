import {  Tabs } from "expo-router";
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function TabsNavigator() {
 return <Tabs> 
    <Tabs.Screen name="index" options={{
        title:'Chats',
        tabBarIcon:({size,color})=>(<AntDesign name="home" size={size} color={color} />)
    }} />
    <Tabs.Screen name ='profile' options={{
        title:'Profile',
        tabBarIcon:({size,color}) =>(<FontAwesome5 name="user-circle" size={size} color={color} />)
    }} />
 </Tabs>
}
