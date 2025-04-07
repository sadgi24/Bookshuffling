import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data } from '../api/data';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';

export default function Completed() {
    const [wishlist, setWishlist] = useState([])
    
    useEffect(() => {
        setWishlist(() => data.filter((item) => item.status == 'WishList'))
    }, [])
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={wishlist}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flexDirection: 'row', padding: 10, borderBottomWidth: 1, borderBottom: 1, borderColor: 'grey', justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey' }}>{index + 1}.{item.bookName}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18, fontWeight: '400', color: item.status == 'Reading' ? 'orange' : item.status == 'Completed' ? 'green' : 'red' }}>{item.status}</Text>
                                <Ionicons name='trash' size={24} color={'grey'} style={{ marginLeft: 10 }} onPress={() => {}} />
                            </View>
                        </View>
                    )
                }}
            />


        </SafeAreaView>
    );

}

const styles = StyleSheet.create({

})

