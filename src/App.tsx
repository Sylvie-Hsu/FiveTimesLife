import React from "react";
import logo from "./logo.svg";
// import './App.css';
import { ChakraProvider } from "@chakra-ui/react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Fonts from "./components/Fonts";
import theme from "./lib/theme";

function App() {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout>
                <Home />
            </Layout>
        </ChakraProvider>
    );
}

export default App;
