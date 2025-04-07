// BookItem.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { AntDesign, Ionicons } from '@expo/vector-icons';

const BookItem = ({ item, index, handleDelete, screen }) => {
    return (
        <View style={styles.bookContainer}>
            <Text style={styles.bookTitle}>
                {index + 1}. {item.title}
            </Text>
            <View style={styles.statusContainer}>
                <Text style={[styles.statusText, { color: getStatusColor(item.status) }]}>
                    {item.status}
                </Text>
                {screen == 'AllBooks' ?
                    <AntDesign
                        name="downcircle"
                        size={24}
                        color={'lightgrey'}
                        style={styles.dropdownIcon}
                        onPress={onPressDropDown}
                    />
                    : <Ionicons
                        name="trash"
                        size={24}
                        color={'grey'}
                        style={styles.trashIcon}
                        onPress={() => handleDelete(item)} // Trigger delete
                    />}
            </View>
        </View>
    );
};

const getStatusColor = (status) => {
    switch (status) {
        case 'Reading':
            return 'orange';
        case 'Completed':
            return 'green';
        default:
            return 'red';
    }
};

const styles = StyleSheet.create({
    bookContainer: {
        flexDirection: 'row',
        padding: 10,
        // backgroundColor: 'lightblue',
        margin: 10,
        borderColor: 'grey',
        justifyContent: 'space-between',
        borderRadius: 5,
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
    trashIcon: {
        marginLeft: 10,
    },
});

export default BookItem;
