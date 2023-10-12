import React, { useContext } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { IconButton } from "@react-native-material/core";
import { ThemeContext } from '../context/theme_context';
import { colors } from '../config/theme';

export default function TrendWidget() {

    const { theme } = useContext(ThemeContext);
    let activeColors = colors[theme.mode];

    return (
        <TouchableOpacity>
            <View style={styles.mainView}>
                <Image source={require('../assets/images/dumbbell.png')} />
                <View style={{ width: 16 }} />
                <View style={{ flexDirection: 'column' }}>
                    <View style={{ flexDirection: 'row', top: 15 }}>
                        <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 20, color: activeColors.textcolor }}>
                            Dumbbell Exercise
                        </Text>
                        <IconButton style={{ bottom: 8 }}
                            icon={
                                theme.mode == 'dark'
                                    ? <Image source={require('../assets/icons/arrow-right-white.png')} />
                                    : <Image source={require('../assets/icons/arrow-right-black.png')} />
                            }
                        />
                    </View>
                    <Text style={{ fontFamily: 'LexendDeca-Medium', fontSize: 15, color: activeColors.textcolor, opacity: .5, bottom: 5 }}>
                        20 sets of dumbbell exercise
                    </Text>
                </View>
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    mainView: {
        borderRadius: 10,
        height: 100,
        paddingVertical: 30,
        paddingHorizontal: 10,
        marginHorizontal: 16,
        backgroundColor: 'tranparent',
        borderWidth: 2,
        borderColor: '#04ECA6',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
});