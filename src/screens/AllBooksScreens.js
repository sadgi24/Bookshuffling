import React from 'react';
import { FlatList, View, TouchableOpacity, Text } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import BookItem from '../components/BookItem';

const AllBooksScreen = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const books = useSelector(state => state.books);


  return (
    <View style={{ flex: 1, padding: 10 }}>
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10 }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Reading')}
          style={{ backgroundColor: '#ADD8E6', padding: 10, borderRadius: 5 }}
        >
          <Text>Reading</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Completed')}
          style={{ backgroundColor: '#90EE90', padding: 10, borderRadius: 5 }}
        >
          <Text>Completed</Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigation.navigate('Wishlist')}
          style={{ backgroundColor: '#FFD700', padding: 10, borderRadius: 5 }}
        >
          <Text>Wishlist</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookItem book={item} allowDelete={false} />}
      />
    </View>
  );
};

export default AllBooksScreen;