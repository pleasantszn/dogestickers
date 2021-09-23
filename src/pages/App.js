import { AddIcon } from '@chakra-ui/icons';
import { Box, Button, Text, Container, Grid, Heading, useDisclosure } from '@chakra-ui/react';
import React from 'react';
import BuckCard from '../components/BuckCard/BuckCard';
import CreateBuckModal from '../components/CreateBuckModal';
import { HeaderController } from '../general/Meta';

const MainApp = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    return (
        <Container maxW="container.lg" centerContent>
        <HeaderController title="Bucket Interface" />
            <Grid mt="8" w='100%' gridTemplateColumns="1fr 20%">
                <Box pt="12">
                    <Text><Heading>Hey Pleasant-Tech, </Heading>This are your stored buck commands </Text>
                    <Box mt='8' backgroundColor="#242c37" colorScheme="grey.100" p='6' d="flex" flexDirection="column">
                        <BuckCard />
                        <BuckCard />
                        <BuckCard />
                        <BuckCard />
                        <BuckCard />
                        <BuckCard />
                        <BuckCard />
                    </Box>
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