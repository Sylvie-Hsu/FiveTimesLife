import React from "react";
import { motion } from "framer-motion";
import { Box, Image } from "@chakra-ui/react";

const Workspace = ({ src, opacity = "100%" }) => {
    const cardVariants = {
        offscreen: {
            y: 500,
        },
        onscreen: {
            y: 20,
            rotate: 0,
            transition: {
                type: "spring",
                bounce: 0.4,
                duration: 1.0,
            },
        },
    };
    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, amount: 0.8 }}
        >
            <Box
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "100%",
                    paddingBottom: "20px",
                    opacity,
                }}
            >
                <motion.div className="card" variants={cardVariants}>
                    <Image
                        style={{ maxWidth: "400px" }}
                        src={src}
                        alt="Dan Abramov"
                        object-fit={"cover"}
                    />
                </motion.div>
            </Box>
        </motion.div>
    );
};

export default Workspace;
