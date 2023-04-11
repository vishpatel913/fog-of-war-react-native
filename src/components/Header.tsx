import React from 'react';
import { Box, HStack, Flex } from 'native-base';

type Props = {
  title: React.ReactNode;
  right?: React.ReactNode;
  left?: React.ReactNode;
};

const Header: React.FC<Props> = ({ title, right, left }) => {
  return (
    <Flex
      direction="row"
      justify="space-between"
      align={'center'}
      backgroundColor={'primary.600'}
      width={'100%'}
      height={12}
      padding={2}
      shadow={2}
    >
      <HStack
        width={10}
        height={'100%'}
        alignItems={'center'}
        justifyContent={'flex-start'}
      >
        {left}
      </HStack>
      <Box flexGrow={1}>{title}</Box>
      <HStack
        width={10}
        height={'100%'}
        alignItems={'center'}
        justifyContent={'flex-end'}
      >
        {right}
      </HStack>
    </Flex>
  );
};

export default Header;
