import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import SearchScreen from './src/screens/SearchScreen';
import DetailsScreen from './src/screens/DetailsScreen';
import { Provider as PaperProvider } from 'react-native-paper';
import Header from './src/components/Header'


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        header:(props) => <Header {...props} />
      }}
    >
      <Stack.Screen name="Home" component={SearchScreen} />
      <Stack.Screen name="Details" component={DetailsScreen} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <PaperProvider>
    <NavigationContainer>
      
        <MyStack />
      
    </NavigationContainer>
    </PaperProvider>
  );
}
