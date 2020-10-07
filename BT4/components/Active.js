import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Active = (props) => {

  const { navigation, route } = props;

  const { updatedTodo } = route.params ?? { foo: null, bar: null }
  return (
    <View style={styles.container}>
      <Text style={styles.headerText}>
        {updatedTodo.id}.{updatedTodo.status}
      </Text>
   <Text style={styles.bodyText}>{updatedTodo.body}</Text> 
    </View>
  );
};

export default Active;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  headerContainer: {
    flexDirection: 'row'
  },
  headerText: {
    fontSize: 30
  },
  bodyText: {
    fontSize: 50
  }
});