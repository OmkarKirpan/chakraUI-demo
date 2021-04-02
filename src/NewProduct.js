import { useState, useEffect } from "react";

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

import ErrorMessage from "./ErrorMessage";
import userSubmit from "./utils/mockApi";

export default function NewProduct() {
  const [name, setName] = useState("");
  const [code, setCode] = useState("");
  const [buyPrice, setBuyPrice] = useState("");
  const [salePrice, setSalePrice] = useState("");
  const [unit, setUnit] = useState("");
  const [defaultQty, setDefaultQty] = useState("");
  const [stock, setStock] = useState("");
  const [isTaxable, setIsTaxable] = useState("");
  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");


  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
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
            <Heading>New Product</Heading>
          </Box>
          {/* <ErrorMessage message={"Error Message"} /> */}
          {error && <ErrorMessage message={error} />}
          <Box my={4} textAlign="left">
            <form onSubmit={handleSubmit}>
              <FormControl mt={2}>
                <FormLabel>Name</FormLabel>
                <Input
                  type="name"
                  placeholder="Product Name"
                  onChange={(event) => setName(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Code (Barcode/SKU)</FormLabel>
                <Textarea
                  type="code"
                  placeholder="Product Code"
                  onChange={(event) => setCode(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Buy Price</FormLabel>
                <Textarea
                  type="buyPrice"
                  placeholder="Buy Price"
                  onChange={(event) => setBuyPrice(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Sale Price</FormLabel>
                <Textarea
                  type="salePrice"
                  placeholder="Sale Price"
                  onChange={(event) => setSalePrice(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Unit</FormLabel>
                <Textarea
                  type="unit"
                  placeholder="Unit"
                  onChange={(event) => setUnit(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Default Quantity</FormLabel>
                <Textarea
                  type="defaultQty"
                  placeholder="Default Quantity"
                  onChange={(event) => setDefaultQty(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Stock</FormLabel>
                <Input
                  type="stock"
                  placeholder="Stock"
                  onChange={(event) => setStock(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Description</FormLabel>
                <Input
                  type="description"
                  placeholder="Description"
                  onChange={(event) => setDescription(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Note</FormLabel>
                <Input
                  type="note"
                  placeholder="Note"
                  onChange={(event) => setNote(event.currentTarget.value)}
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
          {JSON.stringify({
            name,
            address,
            email,
            tel,
            alttel,
            gstNum,
            website
          })}
        </Box>
      </Flex>
    </>
  );
}
