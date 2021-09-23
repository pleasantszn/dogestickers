import { Button, Text } from '@chakra-ui/react';
import React from 'react'
import { useHistory } from 'react-router-dom';

export const LoginButton = ({
    children,
    type,
    to,
  }) => {
    const history = useHistory()
    return (
      <Button
        px="3"
        py='4'
        mt="6"
        justifyContent="center"
        d="flex"
        colorScheme="gray"
        _hover={{
          background: 'transparent',
          borderColor:"gray.500",
          borderWidth: 2
        }}
        onClick={type === 'link' ? () => history.push(to) : null}
      >
        <Text
          className="grid gap-4"
          color
          style={{
            gridTemplateColumns: "1fr auto 1fr",
          }}
        >
          {children}
          <div />
        </Text>
      </Button>
    );
  };