import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

function CompleteItem() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Complete</Text>
      </View>
    );
  }
  
export default function Complete() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Complete"
        component={CompleteItem}
        options={{ title: 'My Complete' }}
      /> 
    </Stack.Navigator>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#fff',
    justifyContent: 'center'
  }
});