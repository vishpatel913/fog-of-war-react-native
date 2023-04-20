import React, { useEffect, useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import { Box, Button } from 'native-base';
import { AppLayout } from '../containers';
import { useUserContext } from '../contexts';
import { FirebaseAuth } from '../services';
import { StackNavigateProps } from '../types';

const Auth: React.FC = () => {
  const [isLoading, setLoading] = useState(false);
  const navigation = useNavigation<StackNavigateProps>();
  const { isLoggedIn } = useUserContext();
  const auth = new FirebaseAuth();

  const handleLogin = async () => {
    setLoading(true);
    await auth.signInWithEmailAndPassword('vish@vishpatel.com', 'testfog');
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
