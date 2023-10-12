import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { Spacer } from "@react-native-material/core";
import { IconButton } from '@react-native-material/core';

interface CoachPageProps {
    navigation: any;
}

export default function CoachPage(props: CoachPageProps) {

    const intro = () => props.navigation.goBack('Home')

    return (
        <SafeAreaView style={{ flex: 1 }}>
            <StatusBar />
            <ScrollView style={{ backgroundColor: '#010005' }}>
                <View style={{ height: 140 }} />
                <View style={styles.center}>
                    <Image source={require('../assets/images/coach.png')} />
                </View>
                <View style={{ height: 20 }} />
                <View style={{ height: 25, left: 16 }}>
                    <Text style={styles.mainHeader}>
                        Get started with a PT
                    </Text>
                </View>
                <View style={{ height: 20 }} />
                <View style={{ marginHorizontal: 16, height: 100 }}>
                    <Text style={styles.mainText}>
                        PTs are able to teach you many attractive moves. That moves going to help you lose weight and gather muscle. However, this provides has a price.
                    </Text>
                    <View style={{ height: 20 }} />
                </View>
                <View style={{ height: 5 }} />
                <TouchableOpacity>
                    <View style={{ flexDirection: 'row', left: 16, alignItems: 'center' }}>
                        <Text style={styles.learnText}>
                            learn more
                        </Text>
                        <View style={{ width: 5 }} />
                        <Image source={require('../assets/icons/arrow-right-green.png')} />
                    </View>
                </TouchableOpacity>
                <View style={{ height: 100 }} />
                <View style={{ flexDirection: 'row', marginHorizontal: 16 }}>
                    <IconButton style={styles.center}
                        icon={<Image source={require('../assets/icons/arrow-left.png')} />} onPress={intro}
                    />
                    <Spacer />
                    <TouchableOpacity style={{ elevation: 0, backgroundColor: 'transperant', justifyContent: 'center' }}>
                        <View style={styles.getView}>
                            <Text style={styles.getText}>
                                Get Started
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    mainHeader: {
        fontFamily: 'LexendDeca-SemiBold',
        fontSize: 20,
        color: '#04ECA6'
    },
    mainText: {
        fontFamily: 'LexendDeca-SemiBold',
        fontSize: 20,
        color: 'white'
    },
    getView: {
        height: 40,
        width: 170,
        backgroundColor: '#04ECA6',
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },
    getText: {
        fontFamily: 'LexendDeca-SemiBold',
        fontSize: 15,
        color: 'black'
    },
    center: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    learnText: {
        fontFamily: 'LexendDeca-Medium',
        fontSize: 15,
        color: '#04ECA6'
    }
});