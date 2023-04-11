import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ThemeProvider } from "./contexts";
import { Auth, Home } from "./views";
import { AppHeader, AppLayout } from "./containers";
import { useTheme } from "native-base";

const App: React.FC = () => {
  const Stack = createNativeStackNavigator();

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
