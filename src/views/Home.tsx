import React from 'react';
import { Box } from 'native-base';
import { AppLayout } from '../containers';
import { useUserContext } from '../contexts';

const Main: React.FC = () => {
  const { user } = useUserContext();
  return (
    <AppLayout>
      Map will go here
      {user ? <Box>Logged In User: {JSON.stringify(user)}</Box> : null}
    </AppLayout>
  );
};

export default Main;
