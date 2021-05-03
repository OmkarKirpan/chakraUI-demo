import { useState, useEffect } from "react";
import useToggle from "./utils/hooks/useToggle";

import {
  Box,
  Flex,
  Spacer,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Switch,
  Select,
  Textarea,
  Button,
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
  const [isTaxable, toggleIsTaxable] = useToggle(false);
  const [description, setDescription] = useState("");
  const [note, setNote] = useState("");

  const [error, setError] = useState("");
  const [isloading, setIsLoading] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      await userSubmit({
        name,
        code,
        buyPrice,
        salePrice,
        unit,
        defaultQty,
        stock,
        isTaxable,
        description,
        note,
      });
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
                  type="text"
                  name="name"
                  placeholder="Product Name"
                  onChange={(event) => setName(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Code (Barcode/SKU)</FormLabel>
                <Input
                  type="text"
                  name="code"
                  placeholder="Product Code"
                  onChange={(event) => setCode(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Buy Price</FormLabel>
                <Input
                  type="text"
                  name="buyPrice"
                  placeholder="Buy Price"
                  onChange={(event) => setBuyPrice(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Sale Price</FormLabel>
                <Input
                  type="text"
                  name="salePrice"
                  placeholder="Sale Price"
                  onChange={(event) => setSalePrice(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Unit</FormLabel>
                <Input
                  type="text"
                  name="unit"
                  placeholder="Unit"
                  onChange={(event) => setUnit(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Default Quantity</FormLabel>
                <Input
                  type="text"
                  name="defaultQty"
                  placeholder="Default Quantity"
                  onChange={(event) => setDefaultQty(event.currentTarget.value)}
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Stock</FormLabel>
                <Input
                  type="text"
                  name="stock"
                  placeholder="Stock"
                  onChange={(event) => setStock(event.currentTarget.value)}
                />
              </FormControl>

              <FormControl mt={4} display="flex" alignItems="center">
                <FormLabel htmlFor="isTaxable" mb="0">
                  Taxable
                </FormLabel>
                <Switch
                  id="isTaxable"
                  colorScheme="teal"
                  onChange={() => {
                    toggleIsTaxable();
                  }}
                />
                <Spacer />
                {isTaxable && (
                  <Select
                    placeholder="Select Tax"
                    size="sm"
                    width="40%"
                    onChange={(event) => {
                      console.log(event.target.value);
                    }}
                  >
                    <option value="option1">Option 1</option>
                    <option value="option2">Option 2</option>
                    <option value="option3">Option 3</option>
                    <option value="option3">Option 3</option>
                  </Select>
                )}
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Description</FormLabel>
                <Textarea
                  name="description"
                  placeholder="Description"
                  onChange={(event) =>
                    setDescription(event.currentTarget.value)
                  }
                />
              </FormControl>
              <FormControl mt={2}>
                <FormLabel>Note</FormLabel>
                <Textarea
                  name="note"
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
            code,
            buyPrice,
            salePrice,
            unit,
            defaultQty,
            stock,
            isTaxable,
            description,
            note,
          })}
        </Box>
      </Flex>
    </>
  );
}
