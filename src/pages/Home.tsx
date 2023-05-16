import React from "react";
import "../utils/i18n";
import { useTranslation } from "react-i18next";
import Section from "../components/Section";
import Paragraph from "../components/Paragraph";
import ImageWrapper from "../components/ImageWrapper";
import { Container, Heading, Box, Avatar } from "@chakra-ui/react";
import Logo from "../lib/logo.png";
import QRcode from "../lib/QRcode.png";
import Workspace from "../lib/workspace.png";
import Roadmap from "../lib/roadmap.png";
import Meditate from "../lib/meditate.png";

export default function Home() {
    const { t } = useTranslation();

    const splitText = (text: string) => {
        return text.split("\n").map((str, index) => <p key={index}>{str}</p>);
    };

    return (
        <Container>
            <Section delay={0.1}>
                <Box
                    display={{ md: "flex" }}
                    style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            {t("title")}
                        </Heading>
                        <div>{t("slogan")}</div>
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
            </Section>

            <Section delay={0.1}>
                <ImageWrapper src={Workspace} />
            </Section>

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
                <ImageWrapper src={Roadmap} opacity={"90%"} />
                <Paragraph>
                    {splitText(t("productOverview.lifeGuide.description"))}
                </Paragraph>
                <Heading as="h4" variant="subsection-title">
                    {t("productOverview.scriptInsight.title")}
                </Heading>
                <ImageWrapper src={Meditate} opacity={"90%"} />
                <Paragraph>
                    {splitText(t("productOverview.scriptInsight.description"))}
                </Paragraph>
            </Section>

            <Section delay={0.1}>
                <Heading as="h3" variant="section-title">
                    {t("contactInfo.title")}
                </Heading>
                <ImageWrapper src={QRcode} opacity={"90%"} />
            </Section>
        </Container>
    );
}
