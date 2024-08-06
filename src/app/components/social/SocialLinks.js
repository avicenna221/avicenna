import React from "react";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import TikTokIcon from "@mui/icons-material/LinkedIn";
import Fab from "@mui/material/Fab";
import { Box } from "@mui/material";
import Link from "next/link";
import Image from "next/image";
const SocialLinks = () => {
  return (
    <Box sx={{ display: "flex", gap: 2 }}>
      <Fab
        component={Link}
        href="https://www.facebook.com/avicenna.official.kg?mibextid=ZbWKwL"
        color="primary"
        aria-label="add"
      >
        <FacebookRoundedIcon />
      </Fab>
      <Fab
        color="primary"
        component={Link}
        href="https://www.instagram.com/avicennainternationalofficial?igsh=MWticGQzMzRjZnB4dA=="
        aria-label="add"
      >
        <InstagramIcon />
      </Fab>

      <Fab
        color="primary"
        component={Link}
        href="https://youtube.com/@avicennainternationalmedic8673?si=0njAQphCg3nNiaC8"
        aria-label="add"
      >
        <YouTubeIcon />
      </Fab>
      <Fab
        color="primary"
        component={Link}
        href="https://www.tiktok.com/@avicennaofficial?_t=8nu8ZXROdj3&_r=1"
        aria-label="add"
      >
        <Image src="/assets/icons.png" alt="sjs" width={20} height={20}/>
      </Fab>
    </Box>
  );
};

export default SocialLinks;
