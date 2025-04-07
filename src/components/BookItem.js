import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeStatus, removeStatus } from '../redux/booksSlice';
import { Picker } from '@react-native-picker/picker';
const BookItem = ({ book, allowDelete }) => {
  const dispatch = useDispatch();

  const handleStatusChange = (value) => {
    dispatch(changeStatus({ id: book.id, status: value }));
  };

  const handleRemove = () => {
    dispatch(removeStatus(book.id));
  };

  return (
    <View style={styles.item}>
      <Text style={styles.title}>{book.title}</Text>
      <Text style={styles.author}>{book.author}</Text>
      <View style={styles.pickerContainer}>
        <Picker
          selectedValue={book.status || ''}
          onValueChange={handleStatusChange}
          style={styles.picker}
        >
          <Picker.Item label="Select Status" value="" />
          <Picker.Item label="Reading" value="reading" />
          <Picker.Item label="Completed" value="completed" />
          <Picker.Item label="Wishlist" value="wishlist" />
        </Picker>
      </View>
      {allowDelete && (
        <Button title="Remove Status" onPress={handleRemove} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  item: {
    backgroundColor: '#f5f5f5',
    padding: 10,
    marginVertical: 5,
    borderRadius: 6,
  },
  title: { fontWeight: 'bold', fontSize: 16 },
  author: { color: '#666' },
  pickerContainer: {
    alignItems: 'flex-end',
    justifyContent: 'center',
  },
  picker: {
    height: 40,
    width: '100%',
    backgroundColor: '#fff',
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 6,
    color: '#000', // ensure text is visible
  },
});

export default BookItem;