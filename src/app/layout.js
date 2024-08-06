
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { Box } from "@mui/material";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Avicenna",
  icons:{icon:['/favicon.ico?v4'],
    apple:['apple-touch-icon.png?v4'],
    shortcut:['apple-touch-icon.png?v4']
  },
  description: "Avicenna International Medical University was established in 2019 and registered with the Ministry of Justice of the Kyrgyz Republic",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
   
    
      <body className={inter.className}>
      <Box sx={{ display: 'flex', flexDirection:"column",justifyContent:"stretch" }}>
     <Header/>
      
     <Box>{children}</Box>
      <Box>
      <Footer/>
      </Box>
      
      </Box>
      
      
      </body>
    </html>
  );
}
