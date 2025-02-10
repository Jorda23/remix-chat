import { Drawer, List, ListItemButton, ListItemText, Typography } from "@mui/material";

const Sidebar = () => {
  return (
    <Drawer
      variant="permanent"
      sx={{
        width: 240,
        flexShrink: 0,
        "& .MuiDrawer-paper": { width: 240, bgcolor: "#222", color: "white" },
      }}
    >
      <Typography variant="h6" sx={{ p: 2, textAlign: "center", borderBottom: "1px solid #444" }}>
        ChatBot
      </Typography>
      <List>
        <ListItemButton>
          <ListItemText primary="Nuevo Chat" />
        </ListItemButton>
      </List>
    </Drawer>
  );
}

export default Sidebar;
