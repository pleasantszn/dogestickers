import React, { useState } from 'react'
import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    FormControl,
  FormLabel,
  Input,
  Text,
  Textarea
  } from "@chakra-ui/react"
import { AddIcon } from '@chakra-ui/icons'

const CreateBuckModal = ({ closeEvent, openState }) => {
    const [ commands, setCommands ] = useState({
        1: {
            operation : '',
            id: 1
        }
    })

    const addNewCommand = () => {
        const newId = Number(Object.keys(commands).pop()) + 1   
        setCommands({
            ...commands,
            [newId]: {
                operation: '',
                id: newId
            }
        })
      }

      console.log(Object.values(commands))
    
      const editCommand = (e, id) => {
        const command_data = commands[id]  
        setCommands(commands => (
            {
                ...commands,
                [id]: {
                    ...command_data,
                    operation: e.target.value
                }
            }
        )) 
      }
    return (
        <Modal size="xl" isCentered isOpen={openState} onClose={closeEvent}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create a New Handy Buck Tool</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <form>
                <FormControl id="buck-name" isRequired>
                    <FormLabel>Buck Name</FormLabel>
                    <Input placeholder="First name" />
                </FormControl>
                <FormControl mt="4"  id="buck-commands" isRequired>
                    <FormLabel>Commands To be Stored</FormLabel>
                    {
                        Object.values(commands).map(command => {
                            return (
                                <Input my="1.5" placeholder='Enter the command keyword' onChange={(e) => editCommand(e, command.id)} value={command.operation} />
                            )
                        })
                    }
                    <Button onClick={addNewCommand} background="green.500" colorScheme="green" color="white">
                        <AddIcon />
                        <Text fontSize="12" pl="3" >Add Command</Text>
                    </Button>
                </FormControl>
                <FormControl mt="3" id="buck-description" isRequired>
                    <FormLabel>Buck Description</FormLabel>
                    <Textarea placeholder="First name" />
                </FormControl>
                <FormControl mt="3" id="buck-exectuor" isRequired>
                    <FormLabel>Executor Command</FormLabel>
                    <Input placeholder="Command to execute the buck groupings" />
                </FormControl>
            </form>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={closeEvent}>
              Submit
            </Button>
            <Button onClick={closeEvent} variant="ghost">Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    )
}

export default CreateBuckModal