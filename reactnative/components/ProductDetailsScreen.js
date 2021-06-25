import React, { useState, useCallback } from 'react';
import { useFocusEffect, useTheme } from '@react-navigation/native';
import { View, Image, Text, Button, StyleSheet, StatusBar, FlatList, RefreshControl } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Card } from 'react-native-paper';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Pressable from 'react-native/Libraries/Components/Pressable/Pressable';

const ProductDetailsScreen = ({ navigation,route }) => {
    const theme = useTheme()
    const productDetails = route.params
    
    return (
        <SafeAreaView style={styles.container(theme)}>
            <StatusBar
                animated={true}
                backgroundColor={theme.colors.primary}
                barStyle='light-content'
                showHideTransition='fade'
            />
            <Image source={{uri:productDetails.imageURL}}  style={styles.productImage}/>
            <Text style={styles.productName(theme)}>{productDetails.name}</Text>
            <Text style={styles.productPrice(theme)}>{productDetails.price}</Text>
            <Text style={styles.productAvailabilityTitle(theme)}>Availability:</Text>
            <Text style={styles.productAvailability(theme)}>{productDetails.availability}</Text>
            <Text style={styles.productDescriptionTitle(theme)}>Description:</Text>
            <Text style={styles.productDescription(theme)}>{productDetails.description}</Text>
            <View>
            <Pressable>
                <Text>Add To Cart</Text>
            </Pressable>
            <Pressable>
                <Text>Buy Now</Text>
            </Pressable>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: theme => ({
        flex: 1,
    }),
    productImage: {
        width: '100%',
        height: '30%',
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
    productAvailabilityTitle: theme => ({
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: 'red',
        marginTop : 20
    }),
    productAvailability: theme => ({
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: theme.colors.primary,
        marginTop : 20
    }),
    productDescriptionTitle: theme => ({
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'bold',
        color: 'red',
        marginTop : 20
    }),
    productDescription: theme => ({
        fontSize: 14,
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: theme.colors.primary,
        marginTop : 20
    })
})

export default ProductDetailsScreen