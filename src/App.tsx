import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { UserProvider, ThemeProvider } from './contexts';
import { AuthScreen, HomeScreen } from './views';
import { AppHeader } from './containers';
import { StackParamList } from './types';

import '../firebaseConfig';

const App: React.FC = () => {
  const Stack = createNativeStackNavigator<StackParamList>();

  return (
    <ThemeProvider>
      <UserProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ header: () => <AppHeader /> }}>
            <Stack.Screen name="Home" component={HomeScreen} />
            <Stack.Screen name="Auth" component={AuthScreen} />
          </Stack.Navigator>
        </NavigationContainer>
        <StatusBar style="auto" hidden />
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
