import { Box, TextField, IconButton } from "@mui/material";
import { useState, useEffect } from "react";

interface InputBoxProps {
  onSend: (message: string) => void;
}

const InputBox = ({ onSend }: InputBoxProps) => {
  const [message, setMessage] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true); 
  }, []);

  const handleSend = () => {
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  if (!isClient) return null; // Evita renderizado en servidor para prevenir "Hydration Failed"

  return (
    <Box sx={{ display: "flex", p: 2, borderTop: "1px solid #333" }}>
      <TextField
        fullWidth
        variant="outlined"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Escribe un mensaje..."
        onKeyPress={(e) => e.key === "Enter" && handleSend()}
      />
      <IconButton onClick={handleSend} color="primary">
        Enviar
      </IconButton>
    </Box>
  );
};

export default InputBox;
