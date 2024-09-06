import Image from "next/image";
import styles from "./page.module.css";
import { Box, Button, Text } from "@mantine/core";
import { Navbar } from "./components/Navbar/Navbar";
import { HeroTitle } from "./components/HeroHeader/HeroHeader";
import { FooterCentered } from "./components/Footer/Footer";

export default function Home() {
  return (
    <Box>
    <Navbar/>
    <HeroTitle/>
    <FooterCentered/>
    </Box>
  );
}
