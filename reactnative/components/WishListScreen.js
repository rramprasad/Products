import React, { useState, useEffect, useCallback } from 'react';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { View, Image, Text, Button, StyleSheet, StatusBar, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const WishListScreen = ({ navigation }) => {
    const theme = useTheme()
    //const [loading, setLoading] = useState(true)
    const [refreshing, setRefreshing] = useState(false)
    const [wishListData, setWishListData] = useState([])

    useFocusEffect(
        useCallback(() => {
            setRefreshing(true)
            getWishList().then((responseData) => {
                setWishListData(responseData)
                setRefreshing(false)
            })
        },
    []))

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        getWishList().then((responseData) => {
            setWishListData(responseData)
            setRefreshing(false)
        })
    },[])

    return (
        <SafeAreaView style={styles.container(theme)}>
            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary}
                barStyle='light-content'
                showHideTransition='fade'
            />
            {/* <ActivityIndicator animating={loading} size="large" color={theme.colors.primary}/> */}
            <FlatList
                data={wishListData}
                renderItem={({item}) => (
                    <Card elevation={10} style={styles.cardItem(theme)}>
                        <Card.Content style={styles.cardContent}>
                            <Image source={require('../images/app-logo.png')}  style={styles.productImage}/>
                            <View style={styles.productDetailsContainer}>
                                <Text style={styles.productName(theme)}>{item.title}</Text>
                                <Text style={styles.productPrice(theme)}>Rs.{item.releaseYear}</Text>
                            </View>
                        </Card.Content>
                        <Card.Actions>
                            <MaterialCommunityIcons name="delete" color={theme.colors.primary} size={25}/>
                        </Card.Actions>
                    </Card>
                )}
                refreshControl = {
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                keyExtractor = {(item) => item.id}
                numColumns={2}
            />
        </SafeAreaView>
    )
}

const getWishList = async () => {
    try {
        const response = await fetch('https://reactnative.dev/movies.json');
        const json = await response.json();
        return json.movies;
    } catch (error) {
        console.error(error);
    }
}

const styles = StyleSheet.create({
    container: theme => ({
        flex: 1,
        justifyContent: 'center',
        backgroundColor: theme.colors.background
    }),
    cardItem: (theme) => ({
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 20,
        backgroundColor: theme.colors.card
    }),
    productDetailsContainer:{
        flex: 1
    },
    productImage: {
        width: 100,
        height: 100
    },
    productName: theme => ({
        fontSize: 30,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: theme.colors.primary
    }),
    productPrice: theme => ({
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: theme.colors.primary
    })
})

export default WishListScreen