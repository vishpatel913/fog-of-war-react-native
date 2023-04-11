import React from 'react';
import { Divider, Icon, IconButton, Menu } from 'native-base';
import { Feather } from '@expo/vector-icons';
import { useAuthentication } from '../../hooks';

const UserMenu = () => {
  const { isLoggedIn, logout, loginWithCredential } = useAuthentication();

  return (
    <Menu
      width="160"
      offset={4}
      trigger={triggerProps => (
        <IconButton
          icon={<Icon as={Feather} name="user" size={'md'} color={'white'} />}
          variant={'solid'}
          // disabled={!isLoggedIn}
          {...triggerProps}
        />
      )}
    >
      <Menu.Item
        onPress={() =>
          loginWithCredential('vishpatel913@googlemail.com', 'testfog')
        }
      >
        Test sign in
      </Menu.Item>
      <Menu.Item>Account</Menu.Item>
      <Divider mt="3" w="100%" />
      <Menu.Item onPress={() => logout()}>Sign out</Menu.Item>
    </Menu>
  );
};

export default UserMenu;
