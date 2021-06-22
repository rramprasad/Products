import React, { useState, useEffect, useRef } from 'react';
import { useTheme } from '@react-navigation/native';
import { View, Text, Button, StyleSheet,StatusBar, Pressable, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const WishListScreen = ({ navigation }) => {
    const theme = useTheme()
    return (
        <SafeAreaView style={styles.container(theme)}>
            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary}
                barStyle= 'light-content'
                showHideTransition= 'fade'
            />
            <Text style={styles.homeTitle(theme)}>WishList</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: theme => ({
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.colors.background
    }),
    homeTitle: theme => ({
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: theme.colors.primary
    })
})

export default WishListScreen