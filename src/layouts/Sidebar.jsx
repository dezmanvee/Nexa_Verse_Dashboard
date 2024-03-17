import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Toolbar,
  Typography,
  useTheme,
} from "@mui/material";
import { menuItems } from "../utils/constants";
import { Logout } from "@mui/icons-material";
import { shades } from "../theme";
import { useNavigate } from "react-router-dom";


const Sidebar = ({ drawerWidth, openModal }) => {
  const theme = useTheme();
  const colors = shades(theme.palette.mode);


  const navigate = useNavigate();

  return (
    <Drawer
      sx={{
        width: {xs: `${openModal ? drawerWidth : 0}`, md: drawerWidth},
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: {xs: `${openModal ? drawerWidth : 0}`, md: drawerWidth},
          boxSizing: "border-box",
          display: "flex",
          backgroundColor: colors.primary[500],
        },
      }}
      variant="permanent"
      anchor="left"
    >
      <Toolbar />
      <Typography variant="h5" fontWeight={700} textAlign="center" gutterBottom>
        Nexa Verse
      </Typography>
      <Divider />
      <List>
        {menuItems.map((item) => (
          <ListItem key={item.text} disablePadding>
            <ListItemButton onClick={() => navigate(item.path)}>
              <ListItemIcon>{item.icon}</ListItemIcon>
              <ListItemText primary={item.text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        <ListItemButton>
          <ListItemIcon>
            <Logout />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItemButton>
      </List>
    </Drawer>
  );
};
export default Sidebar;
