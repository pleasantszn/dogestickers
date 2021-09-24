import {  CopyIcon, StarIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, Badge, Heading, Button, useDisclosure, Drawer, DrawerOverlay, DrawerHeader, DrawerBody, DrawerContent, DrawerCloseButton, useToast, IconButton } from "@chakra-ui/react";


const BuckFeedCard = ({ title, commands }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast()
    return (
        <Box my="6" background="gray.700" borderRadius="8" px="5" py="4" minHeight="190" maxHeight="250">
            <Heading fontSize="xl" mb="4" fontWeight='bold'>Buck Command One</Heading>
            <Box>
                <Text mb="2">Commands Stored</Text>
                <Flex wrap="wrap">
                    <Badge colorScheme="green" color="#fff" my="2" p='2' mr="2" size="lg">
                        git add .
                    </Badge>
                    <Badge colorScheme="green" color="fff" my="2"  p="2" mr="2" size="lg">
                        git commit -m "this is baba montairu"
                    </Badge>
                    <Badge colorScheme="green" color="#fff" my="2"  p='2' mr="2" size="lg">
                        git status
                    </Badge>
                    <Badge colorScheme="green" color="#fff" my="2"  p='2' mr="2" size="lg">
                        git push origin master
                    </Badge>
                </Flex>
            </Box>
            <Box d="flex" mt="4" alignItems="center" justifyContent="flex-end">
                
                <IconButton 
                    icon={<StarIcon />}
                    mr="4"
                    w="25"
                    onClick={() =>
                        toast({
                        title: "Starred",
                        description: "You've starred the buck-et",
                        status: "success",
                        duration: 9000,
                        isClosable: true,
                        })
                    }     
                />
                <Button onClick={onOpen} background="green.500" colorScheme="green" color="white">
                    <CopyIcon />
                    <Text fontSize="12" pl="3" >Copy Buck Command</Text>
                </Button>
            </Box>
            <Drawer placement={'top'} onClose={onClose} isOpen={isOpen}>
                <DrawerOverlay />
                <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader borderBottomWidth="1px">Basic Drawer</DrawerHeader>
                <DrawerBody>
                    <Text>Buck Command Copied!</Text>
                </DrawerBody>
                </DrawerContent>
            </Drawer>
        </Box>
    )
}

export default BuckFeedCard