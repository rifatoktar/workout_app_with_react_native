import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import React, { useRef, useCallback } from 'react';
import { Spacer } from "@react-native-material/core";
import { IconButton } from '@react-native-material/core';
import { BottomSheetRefProps } from '../src/components/bottom_sheet';

interface IntroPageProps {
    navigation: any;
}

export default function IntroPage(props: IntroPageProps) {

    const couch = () => props.navigation.navigate('Couch');
    const route = () => props.navigation.navigate('Router');

    const ref = useRef<BottomSheetRefProps>(null);

    const onPress = useCallback(() => {
        const isActive = ref?.current?.isActive();
        if (isActive) {
            ref?.current?.scrollTo(0);
        } else {
            ref?.current?.scrollTo(-400);
        }
    }, []);

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <ScrollView style={{ backgroundColor: '#010005' }}>
                <View style={{ height: 140 }} />
                <View style={styles.center}>
                    <Image source={require('../assets/images/intro.png')} />
                </View>
                <View style={{ height: 20 }} />
                <View style={{ marginHorizontal: 16, height: 180 }}>
                    <Text style={styles.mainText}>
                        Speaking of yourself, that have to stay sportive and healthy. But you can achieve that workout alone or with a PT.
                    </Text>
                    <View style={{ height: 20 }} />
                    <Text style={styles.mainText}>
                        Let's summon your own competitive soul.
                    </Text>
                </View>
                <View style={{ height: 40 }} />
                <View style={{ height: 100, marginHorizontal: 16, flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={styles.getStarted}>
                        Get Started
                    </Text>
                    <Spacer />
                    <View style={{ flexDirection: 'column' }}>
                        <TouchableOpacity style={{ elevation: 0, backgroundColor: 'transperant', justifyContent: 'center' }} onPress={route}>
                            <View style={styles.yourView}>
                                <Text style={styles.yourText}>
                                    by Yourself
                                </Text>
                            </View>
                        </TouchableOpacity>
                        <Spacer />
                        <View style={{ flexDirection: 'row' }}>
                            <TouchableOpacity style={{ elevation: 0, backgroundColor: 'transperant', justifyContent: 'center' }} onPress={couch}>
                                <View style={styles.ptView}>
                                    <Text style={styles.ptText}>
                                        with a PT
                                    </Text>
                                </View>
                            </TouchableOpacity>
                            <IconButton style={styles.center}
                                icon={<Image source={require('../assets/icons/info.png')} />} onPress={onPress}
                            />
                        </View>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainText: {
        fontFamily: 'LexendDeca-SemiBold',
        fontSize: 20,
        color: 'white'
    },
    getStarted: {
        fontFamily: 'LexendDeca-Medium',
        fontSize: 15,
        color: '#04ECA6'
    },
    yourView: {
        height: 40,
        width: 170,
        backgroundColor: '#04ECA6',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    yourText: {
        fontFamily: 'LexendDeca-SemiBold',
        fontSize: 15,
        color: 'black'
    },
    ptView: {
        flex: 1,
        height: 40,
        width: 170,
        borderWidth: 2,
        borderColor: '#04ECA6',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    ptText: {
        fontFamily: 'LexendDeca-SemiBold',
        fontSize: 15,
        color: 'white'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    infoButton: {
        height: 40,
        width: 24,
        justifyContent: 'center',
        alignItems: 'center'
    }
});