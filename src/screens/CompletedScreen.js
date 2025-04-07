import React from 'react';
import { FlatList, View } from 'react-native';
import { useSelector } from 'react-redux';
import BookItem from '../components/BookItem';

const CompletedScreen = () => {
  const completedBooks = useSelector(state => state.books.filter(book => book.status === 'Completed'));

  return (
    <View style={{ flex: 1, padding: 10 }}>
      <FlatList
        data={completedBooks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <BookItem book={item} allowDelete={true} />}
      />
    </View>
  );
};

export default CompletedScreen;