// src/components/BlogForm.js

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
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import MarkdownEditor from "react-markdown-editor-lite";
import ReactMarkdown from "react-markdown";
import "react-markdown-editor-lite/lib/index.css";
import Image from "next/image";

const validationSchema = Yup.object({
  title: Yup.string().required("Title is required"),
  slug: Yup.string().required("Slug is required"),
  description: Yup.string().required("Description is required"),
  blogCategory: Yup.string()
    .required("blogCategory are required"),
  status: Yup.string().required("Status is required"),
});

const BlogForm = ({ onSubmit }) => {
  const [image, setImage] = useState(null);
  const [imageView, setImageView] = useState(null);
  const formik = useFormik({
    initialValues: {
      bannerPhoto: null,
      title: "",
      slug: "",
      description: "",
      blogCategory: "",
    
      status: "draft",
      content: "",
      html: null,
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
          Create a New Blog
        </Typography>
        <form onSubmit={formik.handleSubmit}>
          <Box>
            <label>Upload banner :</label>
            <input
              type="file"
              onChange={(event) => {
                setImageView(event.currentTarget.files[0]);
                handleFileChange(event.currentTarget.files[0], setImage);
              }}
              accept="image/*"
            />
          </Box>
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
            id="slug"
            name="slug"
            label="Slug"
            margin="normal"
            value={formik.values.slug}
            onChange={formik.handleChange}
            error={formik.touched.slug && Boolean(formik.errors.slug)}
            helperText={formik.touched.slug && formik.errors.slug}
          />
          <TextField
            fullWidth
            id="description"
            name="description"
            label="Description"
            margin="normal"
            multiline
            rows={4}
            value={formik.values.description}
            onChange={formik.handleChange}
            error={
              formik.touched.description && Boolean(formik.errors.description)
            }
            helperText={formik.touched.description && formik.errors.description}
          />
          <Box sx={{ mt: 2 }}>
            <Typography variant="h6" gutterBottom>
              Content
            </Typography>
            <MarkdownEditor
              style={{ height: "500px" }}
              renderHTML={(text) => (
                <ReactMarkdown
                  components={{
                    code: ({ node, inline, className, children, ...props }) => {
                      const match = /language-(\w+)/.exec(className || "");
                      if (inline) {
                        return <code>{children}</code>;
                      } else if (match) {
                        return (
                          <div style={{ position: "relative" }}>
                            <pre
                              style={{
                                padding: "0",
                                borderRadius: "5px",
                                overflow: "auto",
                                whiteSpace: "pre-wrap",
                              }}
                              {...props}
                            >
                              <code>{children}</code>
                            </pre>
                            <button
                              style={{
                                position: "absolute",
                                zIndex: "1",
                                top: "0",
                                right: "0",
                              }}
                            >
                              copy code
                            </button>
                          </div>
                        );
                      } else {
                        return <code {...props}>{children}</code>;
                      }
                    },
                  }}
                >
                  {text}
                </ReactMarkdown>
              )}
              onChange={({ html, text }) => {
                formik.setFieldValue("content", text);
                formik.setFieldValue("html", html);
              }}
              value={formik.values.content}
            />
            {formik.touched.content && Boolean(formik.errors.content) && (
              <Typography color="error">{formik.errors.content}</Typography>
            )}
          </Box>

          <FormControl fullWidth margin="normal">
            <InputLabel id="blogCategory-label">blogCategory</InputLabel>
            <Select
              labelId="Blog Category"
              id="blogCategory"
              name="blogCategory"
            
              value={formik.values.blogCategory}
              onChange={formik.handleChange}
             
            
            >
              {["Technology", "Health", "Science", "Education", "Travel"].map(
                (tag) => (
                  <MenuItem key={tag} value={tag}>
                    {tag}
                  </MenuItem>
                )
              )}
            </Select>
            {formik.touched.blogCategory && Boolean(formik.errors.blogCategory) && (
              <Typography color="error">{formik.errors.blogCategory}</Typography>
            )}
          </FormControl>
          <FormControl fullWidth margin="normal">
            <InputLabel id="status-label">Status</InputLabel>
            <Select
              labelId="status-label"
              id="status"
              name="status"
              value={formik.values.status}
              onChange={formik.handleChange}
              label="Status"
            >
              <MenuItem value="draft">Draft</MenuItem>
              <MenuItem value="published">Published</MenuItem>
            </Select>
          </FormControl>

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

export default BlogForm;
