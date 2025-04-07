import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useDispatch, useSelector } from 'react-redux';
import { Ionicons } from '@expo/vector-icons';
import { updateBookStatus, deleteBook } from '../redux/bookSlice';

export default function Completed() {
  const dispatch = useDispatch();
  const books = useSelector((state) => state.books.books); // Access the books from the Redux store
  const [completed, setCompleted] = useState([]);

  useEffect(() => {
    setCompleted(() => books.filter((item) => item.status === 'Completed'));
  }, [books]);

  const handleDelete = (item) => {
    const previousStatus = item.status === 'Completed' ? 'Reading' : 'Wishlist';
    dispatch(updateBookStatus({ id: item.id, status: previousStatus }));
    dispatch(deleteBook(item.id));
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        data={completed}
        renderItem={({ item, index }) => (
          <View
            style={{
              flexDirection: 'row',
              padding: 10,
              backgroundColor: 'lightblue',
              margin: 10,
              borderColor: 'grey',
              justifyContent: 'space-between',
              borderRadius: 5,
            }}
          >
            <Text style={{ fontSize: 18, fontWeight: 'bold', color: 'grey' }}>
              {index + 1}. {item.title}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Text
                style={{
                  fontSize: 18,
                  fontWeight: '400',
                  color:
                    item.status === 'Reading'
                      ? 'orange'
                      : item.status === 'Completed'
                      ? 'green'
                      : 'red',
                }}
              >
                {item.status}
              </Text>
              <Ionicons
                name="trash"
                size={24}
                color={'grey'}
                style={{ marginLeft: 10 }}
                onPress={() => handleDelete(item)} // Trigger delete
              />
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
