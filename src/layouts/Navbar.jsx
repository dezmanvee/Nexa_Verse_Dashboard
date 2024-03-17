import {
  AccountCircle,
  DarkMode,
  LightMode,
  MenuOpen,
} from "@mui/icons-material";
import SearchIcon from "@mui/icons-material/Search";
import {
  AppBar,
  Box,
  IconButton,
  InputBase,
  Menu,
  MenuItem,
  Modal,
  Toolbar,
  Tooltip,
  alpha,
  styled,
  useTheme,
} from "@mui/material";
import { useContext, useState } from "react";
import { ColorModeContext, shades } from "../theme";
import Sidebar from "./Sidebar";

const Navbar = ({ openModal, setOpenModal, drawerWidth }) => {
  const theme = useTheme();
  const colors = shades(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);
  const [openProfile, setOpenProfile] = useState(false);

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(1),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    width: "100%",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      [theme.breakpoints.up("sm")]: {
        width: "12ch",
        "&:focus": {
          width: "37ch",
        },
      },
    },
  }));

  const modalStyle = {
    position: "absolute",
    // width: drawerWidth,
    height: "100%",
    top: 0,
    left: 0,
    bgcolor: "background.paper",
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: colors.primary[500] }}>
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ display: "flex", alignItems: "center", flex: 1 }}>
          <Tooltip title="Open sidebar">
            <IconButton
              size="large"
              aria-label="sidebar toggler"
              aria-haspopup="true"
              onClick={() => setOpenModal(true)}
              color="inherit"
              sx={{ display: { xs: "flex", md: "none" } }}
            >
              <MenuOpen />
            </IconButton>
          </Tooltip>
          <Modal open={openModal} onClose={() => setOpenModal(false)}>
            <Box sx={modalStyle}>
              <Sidebar drawerWidth={drawerWidth} openModal={openModal} />
            </Box>
          </Modal>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search transactions, customers, subscriptions"
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Box>

        <Box marginLeft={2}>
          <Tooltip
            title={
              theme.palette.mode === "dark"
                ? "switch to light mode"
                : "switch to dark mode"
            }
          >
            <IconButton
              size="large"
              aria-label="Theme"
              onClick={colorMode.toggleColorMode}
              color="inherit"
            >
              {theme.palette.mode === "light" ? <DarkMode /> : <LightMode />}
            </IconButton>
          </Tooltip>
          {/* <Divider /> */}
          <Tooltip title="view profile">
            <IconButton
              size="large"
              aria-label="current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={() => setOpenProfile(true)}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Tooltip>
          <Menu
            id="menu-appbar"
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            keepMounted
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            open={openProfile}
            onClose={() => setOpenProfile(false)}
            sx={{
              "& .MuiMenu-paper": {
                backgroundColor: colors.primary[500],
              },
            }}
          >
            <MenuItem>Profile</MenuItem>
            <MenuItem>Settings</MenuItem>
            <MenuItem>Logout</MenuItem>
          </Menu>
        </Box>
      </Toolbar>
    </AppBar>
  );
};
export default Navbar;
