import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Divider, Icon, IconButton, Menu } from 'native-base';
import { useUserContext } from '../../contexts';
import { FirebaseAuth } from '../../services';
import { StackNavigateProps } from '../../types';

const UserMenu = () => {
  const navigation = useNavigation<StackNavigateProps>();
  const { isLoggedIn, user } = useUserContext();
  const auth = new FirebaseAuth();

  return (
    <Menu
      width="160"
      offset={4}
      trigger={triggerProps => (
        <IconButton
          icon={<Icon as={Feather} name="user" size={'md'} color={'white'} />}
          variant={'solid'}
          {...(isLoggedIn
            ? { ...triggerProps }
            : { onPress: () => navigation.navigate('Auth') })}
        />
      )}
    >
      <Menu.Group title={user?.displayName || ''}>
        <Menu.Item>Account</Menu.Item>
      </Menu.Group>
      <Divider marginY={2} width="100%" />
      <Menu.Item onPress={() => auth.signOut()}>Sign out</Menu.Item>
    </Menu>
  );
};

export default UserMenu;
