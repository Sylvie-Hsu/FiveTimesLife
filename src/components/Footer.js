import { Box } from "@chakra-ui/react";

const Footer = () => {
    return (
        <Box align="center" opacity={0.4} fontSize="sm">
            &copy; {new Date().getFullYear()} 五倍人生 滇ICP备2023000871号-1
        </Box>
    );
};

export default Footer;
