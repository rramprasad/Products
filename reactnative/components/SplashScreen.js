import { CommonActions, useTheme } from '@react-navigation/native';
import React, { useState, useEffect } from 'react';
import { View, Text, Button, StyleSheet, Image, StatusBar } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const SplashScreen = ({ navigation }) => {
    const theme = useTheme()
    useEffect(() => {
        setTimeout(() => {
            navigation.dispatch(CommonActions.reset({
                index : 0,
                routes : [{name : 'MainScreen'}]
            }))
        }, 3000);
    })
    return (
        <SafeAreaView style={styles.container(theme)}>
            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary}
                barStyle= 'light-content'
                showHideTransition= 'fade'
            />
            <Image source={require('../images/app-logo.png')} style={styles.applogo} />
            <Text style={styles.appTitle(theme)}>Products</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: theme => ({
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: theme.colors.primary,
        height: 600
    }),
    applogo: {
        width: 100,
        height: 100
    },
    appTitle: theme => ({
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: theme.colors.appTitle
    })
})

export default SplashScreen