import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/dist/FontAwesome';

const Ostos = ({item, deleteItem}) => {
  return (
    <TouchableOpacity style={styles.listItem}>
      <View style={styles.lisItemView}>
        <Text style={styles.text}>{item}</Text>
        <TouchableOpacity onPress={() => deleteItem(item)}>
          <Icon name="remove" size={30} color="#C70438" />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: 'black',
    fontSize: 25,
    paddingLeft: 10,
  },
  listItem: {
    padding: 15,
    borderBottomWidth: 2,
    borderBottomColor: 'rgba(165,71,104, 0.2)',
  },
  lisItemView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});

export default Ostos;
