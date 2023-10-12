import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Spacer } from "@react-native-material/core";

export default function RoutineBike() {

    return (
        <TouchableOpacity>
            <View style={styles.mainView}>
                <Image source={require('../assets/images/bike.png')} />
                <Spacer />
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.header}>
                            Indoor Bike
                        </Text>
                        <View style={{ width: 5 }} />
                        <Image style={{ top: 5 }} source={require('../assets/icons/arrow-right-black.png')} />
                    </View>
                    <View style={{ height: 5 }} />
                    <Text style={styles.time}>
                        20 Minute
                    </Text>
                    <Text style={styles.dayText}>
                        per day
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainView: {
        left: 16,
        borderRadius: 10,
        height: 160,
        width: 240,
        backgroundColor: '#04ECA6',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 30,
    },
    header: {
        fontFamily: 'LexendDeca-Medium',
        fontSize: 15,
        color: 'black'
    },
    time: {
        fontFamily: 'LexendDeca-SemiBold',
        fontSize: 20,
        color: 'black'
    },
    dayText: {
        fontFamily: 'LexendDeca-Medium',
        fontSize: 12,
        color: 'black',
        opacity: .5
    },
});