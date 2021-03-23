import {
  Box,
  Flex,
  Heading,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button
} from "@chakra-ui/react";
import { PhoneIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import ErrorMessage from "./ErrorMessage";
export default function App() {
  return (
    <>
      <Box textAlign="right" py={4} mr={12}>
        <ColorModeSwitcher />
      </Box>
      <Flex width="full" align="center" justifyContent="center">
        <Box
          p={8}
          width="60%"
          maxWidth="1200px"
          borderWidth={1}
          borderRadius={8}
          boxShadow="lg"
        >
          <Box textAlign="center">
            <Heading>Company Details</Heading>
          </Box>
          <ErrorMessage message={"Error Message"} />
          {/* {error && <ErrorMessage message={error} />} */}
          <Box my={4} textAlign="left">
            <form>
              <FormControl mt={2}>
                <FormLabel>Name</FormLabel>
                <Input type="name" placeholder="Company Name" />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Address</FormLabel>
                <Textarea type="address" placeholder="Company Address" />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Email</FormLabel>
                <Input type="email" placeholder="test@test.com" />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Phone</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Input type="tel" placeholder="Company Phone number" />
                </InputGroup>
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>GST Number</FormLabel>
                <Input type="gstNum" placeholder="Company GST Number" />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Website</FormLabel>
                <Input type="website" placeholder="Company Website" />
              </FormControl>
              <Button
                // isLoading
                loadingText="Submitting"
                variant="outline"
                colorScheme="teal"
                width="full"
                mt={4}
                type="submit"
              >
                Save
              </Button>
            </form>
          </Box>
        </Box>
      </Flex>
    </>
  );
}
