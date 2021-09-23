import { Box, Container, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { ReactComponent as Logo } from '../assets/buck.svg'
import { LoginButton } from "../components/LoginButton";
import { HeaderController } from "../general/Meta";


export const LoginPage = () => {
  return (
    <>
      <Grid
        w="100%"
        minHeight="100vh"
        justifyContent="center"
        alignItems="center"
      >
        <HeaderController title="Login" />
        <Container centerContent>
          <Box d="flex" justifyContent="center" alignSelf="center">
            <Logo />
          </Box>
          <Box d="flex" m="auto" flexDirection="column" padding={6} color="primary.500" w="100%">
            <Box d="flex" gridGap="2" flexDirection="column">
              <Text fontSize="3xl" textAlign="center" color="primary.100" fontWeight="bold">Welcome to Buck Web.</Text>
              <Box color="brand.thick" className="text-primary-100 flex-wrap">
                <Text>By logging in you accept our Terms and Conditions for using this tool.</Text>
              </Box>
            </Box>
            <Box d="flex" flexDirection="column" gridRowGap="4">
              <LoginButton type="link" to="/app"
              >
                Log in with GitHub
              </LoginButton>
            </Box>
          </Box>
        </Container>
      </Grid>
    </>
  );
};
