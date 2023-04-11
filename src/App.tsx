import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { ThemeProvider } from './contexts';
import { Auth, Home } from './views';
import { AppHeader } from './containers';
import { StackParamList } from './types';

import '../firebaseConfig';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <ThemeProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Auth" component={Auth} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" hidden />
    </ThemeProvider>
  );
};

export default App;
