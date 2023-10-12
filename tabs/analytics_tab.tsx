import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView } from 'react-native';
import { ThemeContext } from '../context/theme_context';
import { colors } from '../config/theme';

export default function AnalyticsTab() {

    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style={theme.mode == 'dark' ? 'light' : 'dark'} />
            <ScrollView style={{ backgroundColor: activeColors.background }}>
                <View style={{ height: 400 }} />
                <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: activeColors.textcolor, fontFamily: 'LexendDeca-SemiBold', fontSize: 30 }}>
                        Analytics Tab
                    </Text>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}