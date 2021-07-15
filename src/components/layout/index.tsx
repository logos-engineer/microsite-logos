import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";


import Footer from "./Footer";
import Meta from "./Meta";

type LayoutProps = {
  children: ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <Box w="full">
      <Meta />
      {children}
      <Footer/>
    </Box>
  );
};

export default Layout;
