import { Box } from "@mui/material";
import { useState } from "react";
import { Message, InputBox } from "~/components";


export default function Index() {
  const [messages, setMessages] = useState<{ text: string; sender: "user" | "bot" }[]>([
    { text: "Hola, ¿en qué puedo ayudarte?", sender: "bot" },
  ]);

  const handleSend = (message: string) => {
    setMessages([...messages, { text: message, sender: "user" }]);
    setTimeout(() => {
      setMessages((prev) => [...prev, { text: "Procesando tu solicitud...", sender: "bot" }]);
    }, 1000);
  };

  return (
    <Box sx={{ flex: 1, display: "flex", flexDirection: "column", p: 2, overflowY: "auto" }}>
      {messages.map((msg, index) => (
        <Message key={index} text={msg.text} sender={msg.sender} />
      ))}
      <InputBox onSend={handleSend} />
    </Box>
  );
}
