"use client";
import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Image from "next/image";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ProfileSelect from "./dashboard/ProfileSelect";
import { useEffect, useState } from "react";
import ArticleIcon from "@mui/icons-material/Article";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import SchoolIcon from "@mui/icons-material/School";
import RssFeedIcon from "@mui/icons-material/RssFeed";
import AssistantIcon from "@mui/icons-material/Assistant";
import { usePathname, useRouter } from "next/navigation";

// meta export
export const meta = () => ({
  title: "Dashboard | Berry - React Material Admin Dashboard Template",
  description:
    "Start your next React project with Berry admin template. It build with Reactjs, Material-UI, Redux, and Hook for faster web development.",
});
const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Admin({ children }) {
  const pathname = usePathname();
  const router = useRouter();
  const theme = useTheme();
  const [open, setOpen] = React.useState(true);

  const [isLoading, setLoading] = useState(true);
  const handleClick = (val) => {
    router.push(val);
  };
  useEffect(() => {
    setLoading(false);
  }, []);
  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          background: "#ffffff",
          color: "#000000",
          padding: "10px",
          boxShadow: "none",
          borderBottom: "1px solid rgba(0, 0, 0, 0.12)",
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{
              marginRight: 5,
              ...(open && { display: "none" }),
            }}
          >
            <MenuIcon />
          </IconButton>
          <Image src="/h-logo.jpg" width={270} height={50} alt="logo" />

          <ProfileSelect />
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          <ListItem disablePadding sx={{ display: "block" }}
          onClick={() => handleClick("/admin/dashboard")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ...(pathname == "/admin/dashboard" && {
                  color: "white",
                  backgroundColor: "#382153",
                }),
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#382153",
                  ...(pathname == "/admin/dashboard" && {
                    color: "white",
                  }),
                }}
              >
                <DashboardIcon />
              </ListItemIcon>
              <ListItemText
                primary="Dashboard"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}
          onClick={() => handleClick("/admin/dashboard/students")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ...(pathname == "/admin/dashboard/students" && {
                  color: "white",
                  backgroundColor: "#382153",
                }),
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  ...(pathname == "/admin/dashboard/students" && {
                    color: "white",
                  }),
                }}
              >
                <LocalLibraryIcon />
              </ListItemIcon>
              <ListItemText primary="Students" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          {/* <ListItem disablePadding sx={{ display: "block" }}
          onClick={() => handleClick("/admin/dashboard/teachers")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ...(pathname == "/admin/dashboard/teachers" && {
                  color: "white",
                  backgroundColor: "#382153",
                }),
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  ...(pathname == "/admin/dashboard/teachers" && {
                    color: "white",
                  }),
                }}
              >
                <SchoolIcon />
              </ListItemIcon>
              <ListItemText primary="Teachers" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding sx={{ display: "block" }}
          onClick={() => handleClick("/admin/dashboard/applications")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ...(pathname == "/admin/dashboard/applications" && {
                  color: "white",
                  backgroundColor: "#382153",
                }),
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  ...(pathname == "/admin/dashboard/applications" && {
                    color: "white",
                  }),
                }}
              >
                <ArticleIcon />
              </ListItemIcon>
              <ListItemText
                primary="Applications"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        <List>
          {/* <ListItem disablePadding sx={{ display: "block" }}
          onClick={() => handleClick("/admin/dashboard/contact")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ...(pathname == "/admin/dashboard" && {
                  color: "white",
                  backgroundColor: "#382153",
                }),
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  ...(pathname == "/admin/dashboard/contact" && {
                    color: "white",
                  }),
                }}
              >
                <AssistantIcon />
              </ListItemIcon>
              <ListItemText
                primary="Prospectus"
                sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </ListItem> */}
          <ListItem disablePadding sx={{ display: "block" }}
          onClick={() => handleClick("/admin/dashboard/news")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ...(pathname == "/admin/dashboard/news" && {
                  color: "white",
                  backgroundColor: "#382153",
                }),
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  ...(pathname == "/admin/dashboard/news" && {
                    color: "white",
                  }),
                }}
              >
                <RssFeedIcon />
              </ListItemIcon>
              <ListItemText primary="News" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding sx={{ display: "block" }}
          onClick={() => handleClick("/admin/dashboard/publication")}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ...(pathname == "/admin/dashboard/publication" && {
                  color: "white",
                  backgroundColor: "#382153",
                }),
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  ...(pathname == "/admin/dashboard/publication" && {
                    color: "white",
                  }),
                }}
              >
                <RssFeedIcon />
              </ListItemIcon>
              <ListItemText primary="Publication" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
          <ListItem
            disablePadding
            sx={{ display: "block" }}
            onClick={() => handleClick("/admin/dashboard/contact")}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
                ...(pathname == "/admin/dashboard/contact" && {
                  color: "white",
                  backgroundColor: "#382153",
                }),
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  ...(pathname == "/admin/dashboard/contact" && {
                    color: "white",
                  }),
                }}
              >
                <MailIcon />
              </ListItemIcon>
              <ListItemText primary="Contacts" sx={{ opacity: open ? 1 : 0 }} />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3, background: "#EEF2F6" }}>
        <DrawerHeader />
        {children}
      </Box>
    </Box>
  );
}
