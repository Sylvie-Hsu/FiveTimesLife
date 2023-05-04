import React, { ReactNode } from "react";
import { Box, Container } from "@chakra-ui/react";
import NavBar from "./Navbar";
import Footer from "./Footer";

interface Props {
    children?: ReactNode;
    router?: any;
}

const Layout = ({ children, router }: Props) => {
    return (
        <Box as="main" pb={8}>
            <NavBar />
            <Container maxW="container.md" pt={14}>
                {/* <LazyVoxelDog /> */}
                {children}
                <Footer />
            </Container>
        </Box>
    );
};

export default Layout;
