import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icona from 'react-native-vector-icons/FontAwesome'
import AllScreen from './components/All';
import Active from './components/Active';
import Complete from './components/Complete';
import { createStackNavigator } from '@react-navigation/stack';
const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'All') {
                iconName = 'smile-o';
              } else if (route.name === 'Complete') {
                iconName = 'hand-paper-o';
              } else if (route.name === 'Active') {
                iconName = 'hand-scissors-o'
              }

              return <Icona name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
          }}  
        >
        
          <Tab.Screen name="Complete" component={Complete} />
          <Tab.Screen name="All" component={AllScreen} />
          <Tab.Screen name="Active" component={Active} />
        </Tab.Navigator>
    </NavigationContainer>
  );
}

