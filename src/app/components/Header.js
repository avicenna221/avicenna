"use client";
import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "next/link";
import Image from "next/image";
import { Fab, Stack } from "@mui/material";
import { usePathname } from "next/navigation";
import SearchIcon from '@mui/icons-material/Search';
import InstituteHandler from "./InstituteHandler";
import SearchAppBar from "./SearchAppBar";
import AdministrationMessages from "./AdministrationMessages";
const drawerWidth = 340;
const navItemsUp = [
  {name:"Licenses & Certifications",link:"/licenses-certifications"},
  {name:"Alumni", link:"/alumni"},
  {name:"Administration",link:"/administration"},
  
];
const navItems = [
  {name:"Home", link:"/"},
  {name:"Institute", link:"/institute"},
  {name:"Student Life", link:"/student-life"},
  {name:"About", link:"/about"},
  {name:"News", link:"/news"},
  {name:"Contact", link:"/contact"},
];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const [admin, setAdmin] = React.useState(false);
  const pathname = usePathname();
  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };
  React.useEffect(() => {
    if(pathname.search("dashboard")!=-1){
      setAdmin(true);
    }
  }, [pathname])
  

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
    <Box sx={{my:2}}>
    <Image src="/h-logo.jpg" width={270} height={50} alt="logo" />
    </Box>
    
      
      <Divider />
      <List>
      <Button
                variant="contained"
                color="primary"
                component={Link}
                href="studentportal"
                sx={{
                 marginLeft:"5px",
                  borderRadius: "30px",
                  maxHeight:"35px",
                  maxWidth:"100px",
                  display:{xs:"block",sm:"block"},
                  fontWeight: 700,
                  background: "#213b75",
                  "&:hover": {
                    background: "#001e60",
                  },
                }}
              >
                Apply
              </Button>
        
          <ListItem disablePadding>
          
            <ListItemButton  component={Link}
                href='/' sx={{ textAlign: "left" }}>
              <ListItemText primary="Home" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton  component={Link}
                href='/about' sx={{ textAlign: "left" }}>
              <ListItemText primary="about" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton  component={Link}
                href='/student-life/avicenna-students-council' sx={{ textAlign: "left" }}>
              <ListItemText primary="Avicenna students council" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton  component={Link}
                href='/student-life/our-publications' sx={{ textAlign: "left" }}>
              <ListItemText primary="Our Publications" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton  component={Link}
                href='/student-life/oath-of-the-student-of-avicenna' sx={{ textAlign: "left" }}>
              <ListItemText primary="Oath of the Student of Avicenna" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton  component={Link}
                href='/university-photos' sx={{ textAlign: "left" }}>
              <ListItemText primary="Gallary" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component={Link}
                href='/news' sx={{ textAlign: "left" }}>
              <ListItemText primary="News" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component={Link}
                href='/administration' sx={{ textAlign: "left" }}>
              <ListItemText primary="Administration" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component={Link}
                href='/alumni' sx={{ textAlign: "left" }}>
              <ListItemText primary="Alumni" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            <ListItemButton component={Link}
                href='/admission-offices' sx={{ textAlign: "left" }}>
              <ListItemText primary="Admission Offices" />
            </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
            
            <ListItemButton component={Link}
                href='/contact' sx={{ textAlign: "left" }}>
              <ListItemText primary="Contact us" />
            </ListItemButton>
          </ListItem>
       
       
      </List>
      <Divider />
      <List>
      {navItemsUp.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton component={Link}
                href={item.link} sx={{ textAlign: "left" }}>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return ( admin==false &&
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        component="nav"
        sx={{ background: "#ffffff", color: "#000000", padding: "10px" }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "block",md:"none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Image src="/h-logo.jpg" width={270} height={50} alt="logo" />

          <Stack direction="column" sx={{ ml: { xs: "auto", sm: "auto" } }}>
            <Box sx={{ display: { xs: "none", sm: "none",md: "flex" } }}>
              {navItemsUp.map((item) => (
                <Button
                component={Link}
                href={item.link}
                  key={item}
                  sx={{ color: "#000000", textTransform: "capitalize" }}
                >
                  {item.name}
                </Button>
              ))}
            </Box>
            <Stack direction="row">
              <Box sx={{ display: { xs: "none", sm: "none", md: "flex" } }}>
                <Button
                component={Link}
                href="/"
                  sx={{
                    color: "#000000",
                    ...(pathname == "/" && {
                      color: "#213b75",
                      fontWeight: 800,
                    }),
                  }}
                >
                  Home
                </Button>
                <InstituteHandler />
                
               
                <Button
                component={Link}
                href="/about"
                  sx={{
                    color: "#000000",
                    ...(pathname == "/about" && {
                      color: "#213b75",
                      fontWeight: 800,
                    }),
                  }}
                >
                  About
                </Button>
                <Button
                component={Link}
                href="/university-photos"
                  sx={{
                    color: "#000000",
                    ...(pathname == "/university-photos" && {
                      color: "#213b75",
                      fontWeight: 800,
                    }),
                  }}
                >
                  Gallary
                </Button>
                <Button
                component={Link}
                href="/news"
                  sx={{
                    color: "#000000",
                    ...(pathname == "/news" && {
                      color: "#213b75",
                      fontWeight: 800,
                    }),
                  }}
                >
                  News
                </Button>
                <AdministrationMessages/>
                {/* <Button
                component={Link}
                href="/contact"
                  sx={{
                    color: "#000000",
                    ...(pathname == "/contact" && {
                      color: "#213b75",
                      fontWeight: 800,
                    }),
                  }}
                >
                  Contact Us
                </Button> */}
              </Box>
              <Button
                variant="contained"
                color="primary"
                component={Link}
                href="studentportal"
                sx={{
                  ml: { xs: "auto", sm: "auto" },
                  borderRadius: "30px",
                  maxHeight:"35px",
                  display:{xs:"none",md:"block"},
                  fontWeight: 700,
                  background: "#213b75",
                  "&:hover": {
                    background: "#001e60",
                  },
                }}
              >
                Apply Now
              </Button>
            
            </Stack>
          </Stack>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "block",md:"none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
      <Box component="main" sx={{ pt: 3 }}>
      <Toolbar />
      
        

      </Box>
    </Box>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
