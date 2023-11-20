"use client";

import { Container } from "../app/components/Container";
import { Chat } from "./components/Chat";
import { ChatProvider } from "./contexts/ChatContext";

const Page = () => {
    return (
        <ChatProvider>
            <Container>
                <Chat></Chat>
            </Container> 
        </ChatProvider>    
    );
}

export default Page;