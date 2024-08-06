import {
  Container,
  Grid,
  Typography,
  Card,
  CardContent,
  CardMedia,
  Box,
  Button,
} from "@mui/material";

import Image from "next/image";
import PartnerComponet from "./PartnerComponet";

const CommunityPartners = () => {
  return (
    <>
      <Box sx={{ backgroundColor: "#001e60", color: "#fff", py: 6 }}>
        <Container maxWidth="lg">
          <Typography variant="h2" align="center" gutterBottom>
            Welcome to Avicenna International Medical University
          </Typography>
          <Typography variant="h5" align="center" paragraph>
            Connecting with Communities & Partners to Advance Medical Education
            and Healthcare
          </Typography>
          <Box display="flex" justifyContent="center" mt={4}>
            <Button variant="contained" color="secondary" size="large">
              Learn More
            </Button>
          </Box>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
        <Typography variant="h4" align="center" gutterBottom color="primary">
          Our Partners
        </Typography>

        <PartnerComponet />
      </Container>
    </>
  );
};

export default CommunityPartners;
