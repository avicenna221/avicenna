// src/components/PublicationForm.js

import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Chip,
  OutlinedInput,
  Container,
  Avatar,
  IconButton,
  Grid,
} from "@mui/material";

import "react-markdown-editor-lite/lib/index.css";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  link: Yup.string().required("Slug is required"),
 
});

const PublicationForm = ({ onSubmit }) => {
  const [image, setImage] = useState(null);
  const [imageView, setImageView] = useState(null);
  const formik = useFormik({
    initialValues: {
     
      title: "",
      link: "",
      
    },
    validationSchema,
    onSubmit,
  });

  const handleFileChange = (e, setFile) => {
    const file = e;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
      formik.setFieldValue("bannerPhoto",reader.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <Container maxWidth="md">
      <Box sx={{ mt: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Create a New Publication
        </Typography>
        <form onSubmit={formik.handleSubmit}>
         
          <TextField
            fullWidth
            id="title"
            name="title"
            label="Title"
            margin="normal"
            value={formik.values.title}
            onChange={formik.handleChange}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
        
          <TextField
            fullWidth
            id="link"
            name="link"
            label="link"
            margin="normal"
            multiline
            rows={4}
            value={formik.values.link}
            onChange={formik.handleChange}
            error={
              formik.touched.link && Boolean(formik.errors.link)
            }
            helperText={formik.touched.link && formik.errors.link}
          />
         

     

          <Button
            color="primary"
            variant="contained"
            fullWidth
            type="submit"
            sx={{ mt: 2 }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Container>
  );
};

export default PublicationForm;
