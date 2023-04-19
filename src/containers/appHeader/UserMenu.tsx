import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';
import { Divider, Icon, IconButton, Menu } from 'native-base';
import { useUserContext } from '../../contexts';
import { FirebaseAuth } from '../../services';
import { StackNavigateProps } from '../../types';

const UserMenu = () => {
  const navigation = useNavigation<StackNavigateProps>();
  const { isLoggedIn } = useUserContext();
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
      <Menu.Item>Account</Menu.Item>
      <Divider mt="3" w="100%" />
      <Menu.Item onPress={() => auth.signOut()}>Sign out</Menu.Item>
    </Menu>
  );
};

export default UserMenu;
