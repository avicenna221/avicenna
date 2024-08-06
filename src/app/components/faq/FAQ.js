import React from "react";
import {
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Typography,
  Container,
  Box,
  CssBaseline,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

const faqs = [
  {
    question: "What is the admission process?",
    answer:
      "The admission process involves filling out an online application, submitting required documents, and attending an interview.",
  },
  {
    question: "What are the tuition fees?",
    answer:
      "Tuition fees vary depending on the program and degree level. Please refer to our tuition fee schedule on the website for detailed information.",
  },
  {
    question: "Are scholarships available?",
    answer:
      "Yes, we offer a variety of scholarships based on academic merit and financial need. You can apply for scholarships during the admission process.",
  },
  {
    question: "What programs do you offer?",
    answer:
      "We offer a range of undergraduate and postgraduate programs in medicine, dentistry, pharmacy, and nursing.",
  },
  {
    question: "How can I contact the admissions office?",
    answer:
      "You can contact the admissions office via email at admissions@university.com or call us at (123) 456-7890.",
  },
];

const theme = createTheme({
  palette: {
    primary: {
      main: "#001e60",
    },
    background: {
      default: "#001e60", // Dark blue background
    },
    text: {
      primary: "#ffffff", // White text
    },
  },
  typography: {
    fontFamily: "Arial, sans-serif",
  },
});

const FAQ = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
     
        <Box sx={{ mt: 4, mb: 4 }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            sx={{ color: "primary.main", textAlign: "center" }}
          >
            Frequently Asked Questions
          </Typography>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{ backgroundColor: "#001e60", color: "#ffffff" }}
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon sx={{ color: "#ffffff" }} />}
                aria-controls={`panel${index}-content`}
                id={`panel${index}-header`}
              >
                <Typography>{faq.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
     
    </ThemeProvider>
  );
};

export default FAQ;
