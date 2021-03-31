import { Box } from "@chakra-ui/react";
// import CompanyDetails from "./CompanyDetails";
import NewProduct from "./NewProduct";
import { ColorModeSwitcher } from "./ColorModeSwitcher";

export default function App() {
  return (
    <>
      <Box textAlign="right" py={4} mr={12}>
        <ColorModeSwitcher />
      </Box>
      {/* <CompanyDetails /> */}
      <NewProduct />
    </>
  );
}
