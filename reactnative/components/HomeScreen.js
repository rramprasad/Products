import React, { useState, useCallback } from 'react';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { View, Image, Text, Button, StyleSheet, StatusBar, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const HomeScreen = ({ navigation }) => {
    const theme = useTheme()
    const [refreshing, setRefreshing] = useState(false)
    const [productsListData, setProductsListData] = useState([])

    useFocusEffect(
        useCallback(() => {
            setRefreshing(true)
            getProductsList().then((responseData) => {
                setProductsListData(responseData)
                setRefreshing(false)
            })
        },
    []))

    const onRefresh = useCallback(() => {
        setRefreshing(true)
        getProductsList().then((responseData) => {
            setProductsListData(responseData)
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
            <FlatList
                data={productsListData}
                renderItem={({item}) => (
                    <Card onPress={() => { navigation.navigate('ProductDetailsScreen',item)}} elevation={10} style={styles.cardItem(theme)}>
                        <View style={styles.cardContent(theme)}>
                            <Image source={{uri:item.imageURL}}  style={styles.productImage}/>
                            <View style={styles.productDetailsContainer}>
                                <Text style={styles.productName(theme)}>{item.name}</Text>
                                <Text style={styles.productPrice(theme)}>{item.price}</Text>
                                <Text style={styles.productAvailability(theme)}>Availability : {item.availability}</Text>
                            </View>
                        </View>
                    </Card>
                )}
                refreshControl = {
                    <RefreshControl refreshing={refreshing} onRefresh={onRefresh}/>
                }
                keyExtractor = {(item) => item.id}
                numColumns={1}
            />
        </SafeAreaView>
    )
}

const getProductsList = async () => {
    try {
        const response = await fetch('https://raw.githubusercontent.com/rramprasad/BloomAppAssets/main/products_list.json');
        const json = await response.json();
        return json;
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
        margin: 20,
        padding: 0,
        backgroundColor: theme.colors.card
    }),
    cardContent: (theme) => ({
        flexDirection : 'row',
        padding: 0,
        minHeight : 150
    }),
    productDetailsContainer:{
        margin : 20
    },
    productImage: {
        width: '35%',
        height: '100%',
        resizeMode: "cover"
    },
    productName: theme => ({
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: theme.colors.primary
    }),
    productPrice: theme => ({
        fontSize: 20,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: theme.colors.primary,
        marginTop : 10
    }),
    productAvailability: theme => ({
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: theme.colors.primary,
        marginTop : 20
    })
})

export default HomeScreen