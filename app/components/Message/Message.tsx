import { Box, Typography } from "@mui/material";
import { useState, useEffect } from "react";

interface MessageProps {
  text: string;
  sender: "user" | "bot";
}

const Message = ({ text, sender }: MessageProps) => {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null; // Evita renderizado en servidor para prevenir "Hydration Failed"

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: sender === "user" ? "flex-end" : "flex-start",
        mb: 1,
      }}
    >
      <Box
        sx={{
          bgcolor: sender === "user" ? "#1E88E5" : "#333",
          color: "white",
          p: 2,
          borderRadius: 2,
          maxWidth: "75%",
        }}
      >
        <Typography variant="body1">{text}</Typography>
      </Box>
    </Box>
  );
}

export default Message;