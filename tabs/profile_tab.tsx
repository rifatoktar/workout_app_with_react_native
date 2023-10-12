import { StatusBar } from 'expo-status-bar';
import { useContext, useState } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Switch } from 'react-native';
import { ThemeContext } from '../context/theme_context';
import { colors } from '../config/theme';

export default function ProfileTab() {

    const { theme, updateTheme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    const [isActive, setIsActive] = useState(theme.mode === 'dark');
    const handleSwitch = () => {
        updateTheme();
        setIsActive((previousState) => !previousState);
    };

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style={theme.mode == 'dark' ? 'light' : 'dark'} />
            <ScrollView style={{ backgroundColor: activeColors.background }}>
                <View style={{ height: 400 }} />
                <View style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
                    <Text style={{ color: activeColors.textcolor, fontFamily: 'LexendDeca-SemiBold', fontSize: 30 }}>
                        Dark Mode
                    </Text>
                    <View style={{ width: 16 }} />
                    <Switch
                        value={isActive}
                        onValueChange={handleSwitch}
                        thumbColor={isActive ? activeColors.accent : activeColors.tertiary}
                        ios_backgroundColor={activeColors.textcolor}
                        trackColor={{
                            false: activeColors.textcolor,
                            true: activeColors.secondary
                        }}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appbar: {
        elevation: 0,
        backgroundColor: 'transparent',
    },
});