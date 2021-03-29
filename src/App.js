import { useState } from "react";

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
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";
import { ColorModeSwitcher } from "./ColorModeSwitcher";
import ErrorMessage from "./ErrorMessage";
import userSubmit from "../utils/mockApi";

export default function App() {
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");
  const [tel, setTel] = useState("");
  const [alttel, setAlttel] = useState("");
  const [gstNum, setGstNum] = useState("");
  const [website, setWebsite] = useState("");

  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      await userSubmit({ name, address, email, tel, alttel, gstNum, website });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError("Something went wrong.");
      setIsLoading(false);
    }
  };

  return (
    <>
      <Box textAlign="right" py={4} mr={12}>
        <ColorModeSwitcher />
      </Box>
      <Flex p={4} width="full" align="center" justifyContent="center">
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
          {/* <ErrorMessage message={"Error Message"} /> */}
          {error && <ErrorMessage message={error} />}
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl mt={2}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="name"
                  placeholder="Company Name"
                  onChange={(event) => setName(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Address</FormLabel>
                <Textarea
                  type="address"
                  placeholder="Company Address"
                  onChange={(event) => setAddress(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Email</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<EmailIcon color="gray.300" />}
                  />
                  <Input
                    type="email"
                    placeholder="test@test.com"
                    onChange={(event) => setEmail(event.currentTarget.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Phone</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Input
                    type="tel"
                    placeholder="Company Phone number"
                    onChange={(event) => setTel(event.currentTarget.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Alternate Phone</FormLabel>
                <InputGroup>
                  <InputLeftElement
                    pointerEvents="none"
                    children={<PhoneIcon color="gray.300" />}
                  />
                  <Input
                    type="alttel"
                    placeholder="Company Alternate Phone number"
                    onChange={(event) => setAlttel(event.currentTarget.value)}
                  />
                </InputGroup>
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>GST Number</FormLabel>
                <Input
                  type="gstNum"
                  placeholder="Company GST Number"
                  onChange={(event) => setGstNum(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Website</FormLabel>
                <Input
                  type="website"
                  placeholder="Company Website"
                  onChange={(event) => setWebsite(event.currentTarget.value)}
                />
              </FormControl>
              <Button
                isLoading={isloading}
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
