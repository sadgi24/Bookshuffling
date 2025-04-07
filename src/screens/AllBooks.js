import React, { useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import SelectDropdown from 'react-native-select-dropdown';
import { updateBookStatus } from '../redux/bookSlice';

export default function AllBooks({ navigation }) {
    const dispatch = useDispatch();
    const books = useSelector((state) => state.books.books);
    const [showDropdown, setShowDropdown] = useState(null)

    const handleStatusChange = (bookId, newStatus) => {
        dispatch(updateBookStatus({ id: bookId, status: newStatus }));
        setShowDropdown(null); 
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <FlatList
                data={books}
                renderItem={({ item, index }) => {
                    return (
                        <View style={styles.bookContainer}>
                            <View style={styles.bookInfo}>
                                <Text style={styles.bookTitle}>
                                    {index + 1}.{item.title}
                                </Text>
                                <View style={styles.statusContainer}>
                                    <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
                                        {item.status}
                                    </Text>
                                    <AntDesign
                                        name="downcircle"
                                        size={24}
                                        color={'lightgrey'}
                                        style={styles.dropdownIcon}
                                        onPress={() => setShowDropdown(showDropdown === item.id ? null : item.id)}
                                    />
                                </View>
                            </View>
                            {showDropdown === item.id && (
                                <SelectDropdown
                                    data={['Completed', 'Reading', 'Wishlist']}
                                    onSelect={(selectedItem) => handleStatusChange(item.id, selectedItem)}
                                    defaultValue={item.status}
                                    buttonStyle={styles.dropdownButton}
                                    buttonTextStyle={styles.dropdownText}
                                    dropdownStyle={styles.dropdown}
                                    rowTextStyle={styles.dropdownRowText}
                                />
                            )}
                        </View>
                    );
                }}
            />
            <View style={styles.navigationButtons}>
                <TouchableOpacity onPress={() => navigation.navigate('Completed')} style={styles.button}>
                    <Text>Go To Completed</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('Wishlist')} style={styles.button}>
                    <Text>Go To Wishlist</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
}

const getStatusColor = (status) => {
    if (status === 'Reading') return 'orange';
    if (status === 'Completed') return 'green';
    return 'red'; // Default for Wishlist or others
};

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
    },
    bookContainer: {
        flex: 1,
    },
    bookInfo: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: 'grey',
        justifyContent: 'space-between',
    },
    bookTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: 'grey',
    },
    statusContainer: {
        flexDirection: 'row',
    },
    statusText: {
        fontSize: 18,
        fontWeight: '400',
    },
    dropdownIcon: {
        marginLeft: 10,
    },
    dropdownButton: {
        width: 120,
        height: 40,
        backgroundColor: 'white',
        borderColor: 'grey',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    dropdownText: {
        fontSize: 16,
        color: 'black',
    },
    dropdown: {
        borderRadius: 5,
        width: 120,
        height: 50,
    },
    dropdownRowText: {
        fontSize: 16,
        color: 'black',
        textAlign: 'center',
    },
    navigationButtons: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    button: {
        backgroundColor: 'lightblue',
        padding: 10,
        margin: 20,
    },
});
