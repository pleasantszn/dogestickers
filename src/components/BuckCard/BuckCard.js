import { AddIcon } from "@chakra-ui/icons";
import { Box, Text, Flex, Badge, Heading, Button, ButtonGroup, Modal, ModalOverlay, ModalContent, ModalCloseButton, ModalBody, ModalFooter, ModalHeader, useDisclosure } from "@chakra-ui/react";


const BuckCard = ({ title, commands }) => {
    const { isOpen, onOpen, onClose } = useDisclosure()
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
            <ButtonGroup d="flex" mt="4" justifyContent="flex-end">
                <Button onClick={onOpen} background="red.500" colorScheme="red" color="white">
                    <AddIcon />
                    <Text fontSize="12"  pl="3" >Delete Buck Command</Text>
                </Button>
                <Button background="green.500" colorScheme="green" color="white">
                    <AddIcon />
                    <Text fontSize="12" pl="3" >Edit Buck Command</Text>
                </Button>
            </ButtonGroup>
            <Modal onClose={onClose} size={'sm'} isOpen={isOpen}>
            <ModalOverlay />
            <ModalContent>
              <ModalHeader color="red.300">Delete this command</ModalHeader>
              <ModalCloseButton />
              <ModalBody>
                <Text>Are you sure you want to delete this buck command</Text>
              </ModalBody>
              <ModalFooter>
                <Button onClick={onClose}>Close</Button>
                <Button ml="2" onClick={onClose}>Delete</Button>
              </ModalFooter>
            </ModalContent>
          </Modal>
        </Box>
    )
}

export default BuckCard