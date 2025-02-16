import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const DATA = Array.from({ length: 10000 }, (_, i) => ({ id: i, title: `Item ${i}` }));

const FlatListSolution = () => {
  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={DATA}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  item: {
    padding: 10,
    fontSize: 18,
  },
  separator: {
    height: 1,
    backgroundColor: 'lightgray',
  },
});

export default FlatListSolution;