"use client";
import { Container } from "../app/components/Container";
import { ThemeProvider } from "../app/contexts/ThemeContext";

const Page = () => {
    return(
        <ThemeProvider>
            <Container></Container>
        </ThemeProvider>
    )
}

export default Page;