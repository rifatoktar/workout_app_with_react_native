import React, { useContext } from 'react';
import { Image, View, Text } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { ThemeContext } from '../../context/theme_context';
import { colors } from '../../config/theme';

const { Screen, Navigator } = createBottomTabNavigator();

import Dashboard from '../../tabs/dashboard_tab';
import Analytics from '../../tabs/analytics_tab';
import Profile from '../../tabs/profile_tab';

export default function Router() {

    const { icon } = styles;

    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    return (
        <Navigator screenOptions={{
            headerShown: false,
            tabBarShowLabel: false,
            tabBarHideOnKeyboard: true,
            tabBarStyle: {
                position: 'absolute',
                height: 70,
                backgroundColor: activeColors.background
            },
        }}>
            <Screen name='Dashboard' component={Dashboard} options={{
                tabBarIcon: ({ focused }) => focused ? <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={icon} source={require('../../assets/icons/bolt-fill-green.png')} />
                    <View style={{ height: 5 }} />
                    <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 12, color: '#04ECA6' }}>
                        Dashboard
                    </Text>
                </View> : <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={icon} source={require('../../assets/icons/bolt.png')} />
                    <View style={{ height: 5 }} />
                    <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 12, color: '#ABAFD1' }}>
                        Dashboard
                    </Text>
                </View>
            }} />
            <Screen name='Analytics' component={Analytics} options={{
                tabBarIcon: ({ focused }) => focused ? <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={icon} source={require('../../assets/icons/chart-fill.png')} />
                    <View style={{ height: 5 }} />
                    <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 12, color: '#04ECA6' }}>
                        Analytics
                    </Text>
                </View> : <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={icon} source={require('../../assets/icons/chart.png')} />
                    <View style={{ height: 5 }} />
                    <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 12, color: '#ABAFD1' }}>
                        Analytics
                    </Text>
                </View>
            }} />
            <Screen name='Profile' component={Profile} options={{
                tabBarIcon: ({ focused }) => focused ? <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={icon} source={require('../../assets/icons/person-fill.png')} />
                    <View style={{ height: 5 }} />
                    <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 12, color: '#04ECA6' }}>
                        Profile
                    </Text>
                </View> : <View style={{ flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
                    <Image style={icon} source={require('../../assets/icons/person.png')} />
                    <View style={{ height: 5 }} />
                    <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 12, color: '#ABAFD1' }}>
                        Profile
                    </Text>
                </View>
            }} />
        </Navigator>
    );
}

const styles = {
    icon: {
        height: 24,
        width: 24,
    }
}