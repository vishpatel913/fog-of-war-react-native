import React from 'react';
import { Heading, Icon, IconButton } from 'native-base';
import { useNavigation, useNavigationState } from '@react-navigation/native';
import { Feather } from '@expo/vector-icons';

import UserMenu from './UserMenu';
import { Header } from '../../components';
import { StackNavigateProps } from '../../types';

const AppHeader = () => {
  const navigation = useNavigation<StackNavigateProps>();
  const routeIndex = useNavigationState(state => state.index);

  return (
    <Header
      title={
        <Heading color={'gray.100'} size={'md'} textAlign={'center'}>
          fog of war
        </Heading>
      }
      left={
        routeIndex > 0 ? (
          <IconButton
            icon={
              <Icon
                as={Feather}
                name="chevron-left"
                size={'md'}
                color={'white'}
              />
            }
            variant={'solid'}
            onPress={() => navigation.goBack()}
          />
        ) : null
      }
      right={<UserMenu />}
    />
  );
};

export default AppHeader;
