import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import BookItem from '../components/BookItem';

const WishlistScreen = () => {
  const books = useSelector(state =>
    state.books.filter(b => b.status === 'WishList')
  );

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookItem book={item} allowDelete={true} />}
      />
    </View>
  );
};

export default WishlistScreen;