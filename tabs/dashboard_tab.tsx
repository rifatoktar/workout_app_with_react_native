import { StatusBar } from 'expo-status-bar';
import { useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image, FlatList } from 'react-native';
import { ThemeContext } from '../context/theme_context';
import { colors } from '../config/theme';
import { IconButton, AppBar } from '@react-native-material/core';
import { Spacer } from "@react-native-material/core";
import RoutineBike from '../widgets/routine_bike';
import RoutineBall from '../widgets/routine_ball';
import ChartWidget from '../widgets/chart';
import TrendWidget from '../widgets/trend_widget';

const DATA = [
    RoutineBike(),
    RoutineBall()
];

export default function DashboardTab() {

    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar style={theme.mode == 'dark' ? 'light' : 'dark'} backgroundColor={activeColors.background} />
            <AppBar style={{ elevation: 0, backgroundColor: activeColors.background, top: 40 }}
                leading={
                    theme.mode == 'dark'
                        ? <Image source={require('../assets/icons/bolt-fill-white.png')} />
                        : <Image source={require('../assets/icons/bolt-fill-black.png')} />
                }
                title={
                    <Text style={{ fontFamily: 'LexendDeca-SemiBold', fontSize: 18, color: activeColors.textcolor }}>
                        DASHBOARD
                    </Text>
                }
                trailing={
                    theme.mode == 'dark'
                        ? <IconButton
                            icon={props => <Image source={require('../assets/icons/bell-white.png')} />}
                        /> : <IconButton
                            icon={props => <Image source={require('../assets/icons/bell-black.png')} />}
                        />
                } />
            <ScrollView style={{ backgroundColor: activeColors.background }}>
                <View style={{ height: 50 }} />
                <View style={{ height: 20, marginHorizontal: 16, flexDirection: 'row' }}>
                    <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 15, color: activeColors.textcolor }}>
                        Daily Routines
                    </Text>
                    <Spacer />
                    <TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.textButton}>
                                Create another one
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ height: 160 }}>
                    <FlatList
                        horizontal={true}
                        data={DATA}
                        renderItem={() => <><RoutineBike /><RoutineBall /></>}
                    />
                </View>
                <View style={{ height: 30 }} />
                <View style={{ height: 20, marginHorizontal: 16, flexDirection: 'row' }}>
                    <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 15, color: activeColors.textcolor }}>
                        Activity
                    </Text>
                    <Spacer />
                    <TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.textButton}>
                                Chart settings
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 70 }} />
                <View style={{ height: 150, marginHorizontal: 16, justifyContent: 'center', alignItems: 'center' }}>
                    <ChartWidget />
                </View>
                <View style={{ height: 50 }} />
                <View style={{ height: 20, marginHorizontal: 16, flexDirection: 'row' }}>
                    <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 15, color: activeColors.textcolor }}>
                        Trending Workouts
                    </Text>
                    <Spacer />
                    <TouchableOpacity>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.textButton}>
                                See all workouts
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ height: 60, marginHorizontal: 16, flexDirection: 'column' }}>
                    <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 12, color: activeColors.textcolor, opacity: .5 }}>
                        *That suggested workouts are the same level as your current level
                    </Text>
                    <View style={{ height: 5 }} />
                    <TouchableOpacity>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <Text style={styles.learnText}>
                                learn more
                            </Text>
                            <View style={{ width: 5 }} />
                            <Image source={require('../assets/icons/arrow-right-green.png')} />
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ height: 110 }}>
                    <TrendWidget />
                </View>
                <View style={{ height: 80 }} />
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    appbar: {
        elevation: 0,
        backgroundColor: 'transparent',
    },
    textButton: {
        fontFamily: 'LexendDeca-Medium',
        fontSize: 15,
        color: '#04ECA6'
    },
    learnText: {
        fontFamily: 'LexendDeca-Medium',
        fontSize: 12,
        color: '#04ECA6'
    }
});