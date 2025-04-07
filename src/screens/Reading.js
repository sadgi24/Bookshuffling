import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { data } from '../api/data';
import { AntDesign, Ionicons } from '@expo/vector-icons';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch } from 'react-redux';

export default function Reading() {
    const [reading, setReading] = useState([])
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books); // Access the books from the Redux store
    useEffect(() => {
        setReading(() => books.filter((item) => item.status === 'Reading'));
      }, [books]);
    return (
        <SafeAreaView style={{ flex: 1 }}>
            <FlatList
                data={reading}
                renderItem={({ item, index }) => {
                    return (
                        <View style={{ flexDirection: 'row', padding: 10,backgroundColor:'lighterblue',margin:10, borderColor: 'grey', justifyContent: 'space-between',borderRadius:5 }}>
                            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey' }}>{index + 1}.{item.title}</Text>
                            <View style={{ flexDirection: 'row' }}>
                                <Text style={{ fontSize: 18, fontWeight: '400', color: item.status == 'Reading' ? 'orange' : item.status == 'Completed' ? 'green' : 'red' }}>{item.status}</Text>
                                <Ionicons name='trash' size={24} color={'grey'} style={{ marginLeft: 10 }} onPress={() => { }} />
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

