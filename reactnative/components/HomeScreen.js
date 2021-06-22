import React, { useState, useEffect, useRef } from 'react';
import { useIsFocused, useTheme } from '@react-navigation/native';
import { View, Text, Button, StyleSheet, StatusBar, Pressable, ToastAndroid } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const HomeScreen = ({ navigation }) => {
    const theme = useTheme()
    //const [value, onChangeText] = React.useState(route.params.title);

    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: true,
    //         headerTitle: 'No title',
    //         headerTintColor: '#FFEB3B',
    //         headerStyle: {
    //             backgroundColor: "#3F51B5"
    //         }
    //     });
    // }, [navigation]);
    //const isFocused = useIsFocused()

    // React.useEffect(() => {
    //     const unsubscribe = navigation.addListener('focus', () => {
    //       // do something
    //       navigation.setOptions({
    //         headerShown: true,
    //         headerTitle: 'No title',
    //         headerTintColor: '#FFEB3B',
    //         headerStyle: {
    //             backgroundColor: "#3F51B5"
    //         }
    //     });
    //     });
    
    //     return unsubscribe;
    //   }, [navigation]);

    // useEffect(() => {
    //     navigation.setOptions({
    //         title: 'Hi',
    //     })
    // })

    // if(isFocused){
    //     navigation.setOptions({
    //         title: 'Hi' ,
    //     })
    //         // navigation.setOptions({ 
    //         //     headerShown: true,
    //         //     title: 'Hi' ,
    //         //     headerTintColor: '#FFEB3B'
    //         // })
    // }

    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerShown: true,
    //         headerTitle: 'Hi'
    //     });
    // });


    return (
        <SafeAreaView style={styles.container(theme)}>
            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary}
                barStyle='light-content'
                showHideTransition='fade'
            />
            <Text style={styles.homeTitle(theme)}>Home</Text>
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

export default HomeScreen