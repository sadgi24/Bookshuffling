import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';
import { useDispatch } from 'react-redux';
import { changeStatus, removeStatus } from '../redux/booksSlice';
import { Picker } from '@react-native-picker/picker';
import SelectDropdown from 'react-native-select-dropdown';
import { MaterialCommunityIcons } from '@expo/vector-icons';
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
      <View>
        <Text style={styles.title}>{book.title}</Text>
        <Text style={styles.author}>{book.author}</Text>
      </View>
      {!allowDelete?  <View style={styles.pickerContainer}>
     <SelectDropdown
       data={['Reading','Completed','WishList']}
       defaultButtonText={book.status || 'Select'}
        onSelect={(selectedItem, index) => {
          handleStatusChange(selectedItem);
          }}
    renderButton={(selectedItem, isOpened) => {
      return (
        <View style={styles.dropdownButtonStyle}>
          <Text style={styles.dropdownButtonTxtStyle}>
            {selectedItem || book.status || 'Select'}
          </Text>
          <MaterialCommunityIcons name={isOpened ? 'chevron-up' : 'chevron-down'} style={styles.dropdownButtonArrowStyle} />
        </View>
      );
    }}
    renderItem={(item, index, isSelected) => {
      return (
        <View style={{...styles.dropdownItemStyle, ...(isSelected && {backgroundColor: '#D2D9DF'})}}>
          {/* <MaterialCommunityIcons name={item.icon} style={styles.dropdownItemIconStyle} /> */}
          <Text style={styles.dropdownItemTxtStyle}>{item}</Text>
        </View>
      );
    }}
    showsVerticalScrollIndicator={false}
    dropdownStyle={styles.dropdownMenuStyle}
  />
      </View>
       : (
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
    flexDirection:'row',
    justifyContent:'space-between'
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
  dropdownButtonStyle: {
    width: 200,
    height: 50,
    backgroundColor: '#E9ECEF',
    borderRadius: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 12,
  },
  dropdownButtonTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownButtonArrowStyle: {
    fontSize: 28,
  },
  dropdownButtonIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
  dropdownMenuStyle: {
    backgroundColor: '#E9ECEF',
    borderRadius: 8,
  },
  dropdownItemStyle: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 8,
  },
  dropdownItemTxtStyle: {
    flex: 1,
    fontSize: 18,
    fontWeight: '500',
    color: '#151E26',
  },
  dropdownItemIconStyle: {
    fontSize: 28,
    marginRight: 8,
  },
});

export default BookItem;