"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import FacebookIcon from "@mui/icons-material/Facebook";

import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/X";
import logo from "../../../public/footer-logo.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import SocialLinks from "./social/SocialLinks";

const logoStyle = {
  width: "200px",
  height: "auto",
};

function Copyright() {
  return (
    <Typography variant="body2" color="#ffffff" mt={1}>
      {"Copyright © "}
      <Link href="https://mui.com/">Avicenna&nbsp;</Link>
      {new Date().getFullYear()}. All rights reserved.
    </Typography>
  );
}

export default function Footer() {
  const pathname = usePathname();
  const [admin, setAdmin] = React.useState(false);
  React.useEffect(() => {
    if (pathname.search("dashboard") != -1) {
      setAdmin(true);
    }
  }, [pathname]);

  return (
    admin == false && (
      <Box sx={{ background: "#001e60" }}>
        <Container
          sx={{
            display: "flex",
            flexDirection: "column",
            color: "#ffffff",
            alignItems: "center",
            gap: { xs: 4, sm: 8 },
            py: { xs: 8, sm: 10 },
            textAlign: { sm: "center", md: "left" },
          }}
        >
          <Box sx={{display:"flex",flexDirection:"column",alignItems:"center",gap:2}}>
          <Typography variant="h5">
            Follow Us
          </Typography>
            <SocialLinks />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              width: "100%",
              justifyContent: "space-between",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 4,
                minWidth: { xs: "100%", sm: "60%" },
              }}
            >
              <Box sx={{ width: { xs: "100%", sm: "60%" } }}>
                <Box sx={{ ml: "-15px", display:"flex",flexDirection:"row",justifyContent:"center" }}>
                  <Image src={logo} style={logoStyle} alt="logo of sitemark" />
                </Box>
                
                <Typography variant="body2" color="#ffffff" mb={2} mt={2}>
                  Avicenna International Medical University was established in
                  2019 and registered with the Ministry of Justice of the Kyrgyz
                  Republic at the address: Avenue shabdan batir 74 Bishkek city Kyrgyz Republic.
                  Avicenna International Medical University is listed in World
                  Health Organization Directory (W.H.O), Avicenna Directory, and
                  FAIMER. Such students holding medical qualifications are
                  eligible for the screening tests in any country of the world
                  and subsequent recognition of their degree.
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                display:  "flex",

                flexDirection: {md:"column",xs:"row"},
                justifyContent:{md:"top",xs:"center"},
                gap: 2,
                width: { xs: "100%", sm: "100%" }
              }}
            >
              <Typography variant="body" fontWeight={600} sx={{display:  {md:"block",xs:"none"},}}>
                Important Links
              </Typography>
             
              <Link color="#ffffff" href="/">
                Home
              </Link>
              <Link color="#ffffff" href="/about">
                About
              </Link>
              <Link color="#ffffff" href="/gallary">
                Gallary
              </Link>
              <Link color="#ffffff" href="/news">
                News
              </Link>
              <Link color="#ffffff" href="/contact" >
                Contact us
              </Link>
              
            </Box>
            <Box
              sx={{
                display:  {md:"flex",xs:"none"},

                flexDirection: {md:"column",xs:"row"},
                justifyContent:{md:"none",xs:"center"},
                gap: 2,
                width: { xs: "100%", sm: "100%" }
              }}
            >
             
             
              <Link color="#ffffff" href="/alumni">
                Alumni
              </Link>
              <Link color="#ffffff" href="/licenses-certifications">
              Licenses & Certifications
              </Link>
              <Link color="#ffffff" href="/administration">
              Administration
              </Link>
              <Link color="#ffffff" href="/admission-offices">
                Admission Offices
              </Link>
            </Box>
           
          
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection:"row",
              justifyContent: "center",
              pt: { xs: 4, sm: 8 },
              width: "100%",
              borderTop: "1px solid",
              borderColor: "divider",
            }}
          >
           
             
              <Copyright />
           
           
          </Box>
        </Container>
      </Box>
    )
  );
}
