import React from "react";

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
  InputGroup,
  FormHelperText,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";

function Contact() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Contact Us</Button>
      <Modal
        isCentered
        onClose={onClose}
        isOpen={isOpen}
        motionPreset="slideInBottom"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalCloseButton />
          <ModalBody>
            <FormControl isRequired>
              <FormLabel htmlFor="text">Name:</FormLabel>
              <Input id="text" type="text" />
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="email">Email address:</FormLabel>
              <Input id="email" type="email" />
              <FormHelperText>We'll never share your email.</FormHelperText>
            </FormControl>
            <FormControl isRequired>
              <FormLabel htmlFor="text">Message:</FormLabel>
              <Input id="text" type="text" />
              <FormHelperText>We'll never share your message.</FormHelperText>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Submit</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
export default Contact;
