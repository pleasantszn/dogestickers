import { AddIcon } from '@chakra-ui/icons';
import { Route, Switch, useRouteMatch, BrowserRouter } from 'react-router-dom'
import { RoutedTabs, NavTab } from 'react-router-tabs';
import { Box, Button, Text, Container, Grid, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import CreateBuckModal from '../components/CreateBuckModal';
import { HeaderController } from '../general/Meta';
import './style.css'
import MyCommands from './MyCommands';
import Feeds from './Feed';


const MainApp = () => {
    const match = useRouteMatch()
    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <Container maxW="container.lg" centerContent>
        <HeaderController title="Bucket Interface" />
        
            <Grid mt="8" w='100%' gridTemplateColumns="1fr 20%">
                <Box pt="12">
                <BrowserRouter>
                    <RoutedTabs
                        className="buck-web-tabs "
                        startPathWith={match.path}
                        tabClassName="buck-tabs"
                        activeTabClassName="buck-tab-active"
                    >
                        <NavTab exact={true} to="/">Feed</NavTab>
                        <NavTab exact={true} to={`/my-commands`}>My Commands</NavTab>
                        <Switch>
                            <Route exact path={`${match.path}/my-commands`}>
                               <MyCommands />
                            </Route>
                            <Route exact path={match.path}>
                                <Feeds />
                            </Route>
                        </Switch>
                    </RoutedTabs>
                    </BrowserRouter>
                </Box>
                <Box >
                    <Button onClick={onOpen} ml="10" position="fixed" background="red.500" colorScheme="red.300" color="white">
                        <AddIcon />
                        <Text pl="3" >Create a Buck Command</Text>
                    </Button>
                </Box>
            </Grid>
            <CreateBuckModal openState={isOpen} closeEvent={onClose} />
        </Container>
    )
}

export default MainApp