import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import IntroPage from '../../pages/intro_page';
import CouchPage from '../../pages/coach_page';
import Router from './route';

const { Navigator, Screen } = createStackNavigator();

export default function AppNavigator() {
    return (
        <NavigationContainer>
            <Navigator screenOptions={{ headerShown: false }} initialRouteName='Intro'>
                <Screen name='Router' component={Router}></Screen>
                <Screen name='Intro' component={IntroPage}></Screen>
                <Screen name='Couch' component={CouchPage}></Screen>
            </Navigator>
        </NavigationContainer>
    );
}