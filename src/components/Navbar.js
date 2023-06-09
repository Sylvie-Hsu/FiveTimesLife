import {
    Container,
    Box,
    Heading,
    Flex,
    Button,
    ButtonGroup,
    useColorModeValue,
} from "@chakra-ui/react";
import { useTranslation } from "react-i18next";
import ThemeToggleButton from "./ThemeToggleButton";

const lngs = {
    zh: { nativeName: "zh" },
    en: { nativeName: "en" },
};

const Navbar = (props) => {
    const { i18n } = useTranslation();

    return (
        <Box
            position="fixed"
            as="nav"
            w="100%"
            bg={useColorModeValue("#ffffff40", "#20202380")}
            css={{ backdropFilter: "blur(10px)" }}
            zIndex={2}
            {...props}
        >
            <Container
                display="flex"
                p={2}
                maxW="container.md"
                wrap="wrap"
                align="center"
                justify="space-between"
            >
                <Flex align="center" mr={5}>
                    <Heading as="h1" size="sm" letterSpacing={"tighter"}>
                        FiveTimesYourLife
                    </Heading>
                </Flex>

                <Box flex={1} align="right">
                    <ButtonGroup spacing="0" style={{ marginRight: "10px" }}>
                        {Object.keys(lngs).map((lng) => {
                            return (
                                <Button
                                    size="xs"
                                    key={lng}
                                    onClick={() => i18n.changeLanguage(lng)}
                                    disabled={i18n.resolvedLanguage === lng}
                                >
                                    {lngs[lng].nativeName.toUpperCase()}
                                </Button>
                            );
                        })}
                    </ButtonGroup>
                    <ThemeToggleButton />
                </Box>
            </Container>
        </Box>
    );
};

export default Navbar;
