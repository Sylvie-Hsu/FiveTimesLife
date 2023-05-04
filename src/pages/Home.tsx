import React from "react";
import "../utils/i18n";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import {
    Container,
    Heading,
    Box,
    Avatar,
    Image,
    Center,
} from "@chakra-ui/react";
import Logo from "../lib/logo.png";
import QRcode from "../lib/QRcode.png";

export default function Home() {
    const { t, i18n } = useTranslation();

    const splitText = (text: string) => {
        return text.split("\n").map((str, index) => <p key={index}>{str}</p>);
    };

    return (
        <Container>
            <Box display={{ md: "flex" }}>
                <Box flexGrow={1}>
                    <Heading as="h2" variant="page-title">
                        {t("title")}
                    </Heading>
                    <p>{t("slogan")}</p>
                </Box>
                <Box
                    flexShrink={0}
                    mt={{ base: 4, md: 0 }}
                    ml={{ md: 6 }}
                    textAlign="center"
                >
                    <Avatar size="xl" name="Prosper Otemuyiwa" src={Logo} />
                </Box>
            </Box>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    {t("introduction.title")}
                </Heading>
                <Paragraph>
                    {splitText(t("introduction.description"))}
                </Paragraph>
            </Section>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    {t("productOverview.title")}
                </Heading>
                <Heading as="h4" variant="subsection-title">
                    {t("productOverview.lifeGuide.title")}
                </Heading>
                <Paragraph>
                    {splitText(t("productOverview.lifeGuide.description"))}
                </Paragraph>
                <Heading as="h4" variant="subsection-title">
                    {t("productOverview.scriptInsight.title")}
                </Heading>
                <Paragraph>
                    {splitText(t("productOverview.scriptInsight.description"))}
                </Paragraph>
            </Section>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    {t("contactInfo.title")}
                </Heading>
                <Box
                    display={{ md: "flex" }}
                    style={{ justifyContent: "center" }}
                >
                    <Box
                        // flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        textAlign="center"
                    >
                        <Image src={QRcode} boxSize="120px" />
                    </Box>
                </Box>
            </Section>
        </Container>
    );
}
