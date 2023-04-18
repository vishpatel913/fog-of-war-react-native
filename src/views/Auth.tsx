import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Button } from 'native-base';
import { AppLayout } from '../containers';
import { useFirebaseAuth } from '../contexts';
import { StackNavigateProps } from '../types';

const Auth: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation<StackNavigateProps>();
  const { logInWithEmailAndPassword, isLoggedIn } = useFirebaseAuth();

  const handleLogin = async () => {
    setLoading(true);
    await logInWithEmailAndPassword('vishpatel913@googlemail.com', 'testfog');
  };

  useEffect(() => {
    if (isLoggedIn) {
      navigation.navigate('Home');
    }
  }, [isLoggedIn, navigation]);

  return (
    <AppLayout>
      <Box>Auth will go here</Box>
      <Box margin={4}>
        <Button
          isLoading={isLoading}
          isLoadingText="Authenticating"
          onPress={handleLogin}
        >
          Sign in with test account
        </Button>
      </Box>
    </AppLayout>
  );
};

export default Auth;
