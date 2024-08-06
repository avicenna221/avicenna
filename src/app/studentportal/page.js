// pages/apply.js
"use client";
// pages/apply.js
import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Container,
  Stepper,
  Step,
  StepLabel,
  Typography,
  Grid,
  TextField,
  MenuItem,
  FormControl,
  Select,
  InputLabel,
  Avatar,
  IconButton,
  Paper,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import * as Yup from "yup";
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import PhotoCamera from "@mui/icons-material/PhotoCamera";
import FileUploadIcon from "@mui/icons-material/UploadFile";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import countries from "../utils/countriesList.json"; // Import countries from the JSON file
import LoadingButton from "@mui/lab/LoadingButton";
import Link from "next/link";
async function postRequest(param, data) {
  try {
    const response = await axios.post(param, data);

    return response;
  } catch (error) {
    console.error("Error creating post:", error);
    return error;
  }
}
const steps = [
  "Personal & Family Details",
  "Education Background & Admission Details",
  "Documents Submit",
];
const validationSchema = [
  Yup.object({
    profilePhoto: Yup.mixed().required("Profile photo is required"),
    fullName: Yup.string().required("Full name is required"),
    gender: Yup.string().required("Gender is required"),

    dob: Yup.date().required("Date of birth is required").nullable(),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    country: Yup.string().required("Country is required"),
    city: Yup.string().required("City is required"),

    currentAddress: Yup.string().required("Current address is required"),
    fatherName: Yup.string().required("Father name is required"),
    fatherOccupation: Yup.string().required("Father occupation is required"),
    fatherMobileNumber: Yup.string().required(
      "Father mobile number is required"
    ),
  }),
  Yup.object({
    matricInstitute: Yup.string().required("Institute name is required"),
    matricYearPassed: Yup.string().required("Year passed is required"),

    fscInstitute: Yup.string().required("Institute name is required"),
    fscYearPassed: Yup.string().required("Year passed is required"),

    program: Yup.string().required("Program is required"),
    session: Yup.string().required("Session is required"),
  }),
  Yup.object({
    passportCopy: Yup.mixed()
      .test(
        "fileSize",
        "File too large",
        (value) => value === null || (value && value.size <= 4000000)
      )
      .nullable(true),
    sscCertificate: Yup.mixed()
      .required("required")
      .test("fileSize", "File too large", (value) => value.size <= 4000000),

    hscCertificate: Yup.mixed().test(
      "fileSize",
      "File too large",
      (value) => value.size <= 4000000
    ),

    otherFiles: Yup.mixed()
      .test(
        "fileSize",
        "File too large",
        (value) => value === null || (value && value.size <= 4000000)
      )
      .nullable(true),
    disclaimer: Yup.boolean().oneOf([true], "You must accept the disclaimer"),
    remarks: Yup.string(),
  }),
];

const Apply = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [image, setImage] = useState(null);
  const [pdf, setPdf] = useState(null);
  const [passportPdf, setPassportPdf] = useState(null);
  const [otherFile, setOtherFile] = useState(null);
  const [colloegecertificatePdf, setColloegeCertificatePdf] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [id, setId] = useState("669e3aa08fa2b695c5973dc4");
  const [copySuccess, setCopySuccess] = useState('');
  const [open, setOpen] = useState(false);
  console.log("image", image);
  console.log("pdf", pdf);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  // copy id
  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(id);
      setCopySuccess('Text copied to clipboard!');
    } catch (err) {
      setCopySuccess('Failed to copy text.');
    }
  };
  const initialValues = {
    profilePhoto: null,
    fullName: "",
    gender: "",
    email: "",
    phone: "",
    country: "",
    city: "",
    dob: null,
    currentAddress: "",
    fatherName: "",
    fatherOccupation: "",
    fatherMobileNumber: "",

    matricDegree: "10th class/ SSC",
    matricInstitute: "",
    matricYearPassed: "",

    fscDegree: "12th class/ HSC",
    fscInstitute: "",
    fscYearPassed: "",

    program: "",
    session: "",

    passportCopy: null,
    sscCertificate: null,
    hscCertificate: null,
    otherFiles: null,
    disclaimer: false,
    remarks: "",
  };
  const handleFileChange = (e, setFile) => {
    const file = e;
    const reader = new FileReader();
    reader.onloadend = () => {
      setFile(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = async (values) => {
    try {
      const formData = new FormData();
      formData.append("fullName", values.fullName);
      formData.append("profilePhoto", image);
      formData.append("gender", values.gender);
      formData.append("religion", values.religion);
      formData.append("email", values.email);
      formData.append("phone", values.phone);
      formData.append("country", values.country);
      formData.append("city", values.city);
      formData.append("dob", values.dob);
      formData.append("currentAddress", values.currentAddress);
      formData.append("fatherName", values.fatherName);
      formData.append("fatherOccupation", values.fatherOccupation);
      formData.append("fatherMobileNumber", values.fatherMobileNumber);

      formData.append("matricDegree", values.matricDegree);
      formData.append("matricInstitute", values.matricInstitute);
      formData.append("matricYearPassed", values.matricYearPassed);

      formData.append("fscDegree", values.fscDegree);
      formData.append("fscInstitute", values.fscInstitute);
      formData.append("fscYearPassed", values.fscYearPassed);

      formData.append("program", values.program);
      formData.append("session", values.session);
      formData.append("passportCopy", passportPdf);
      formData.append("sscCertificate", pdf);
      formData.append("hscCertificate", colloegecertificatePdf);
      formData.append("otherFiles", otherFile);
      formData.append("remarks", values.remarks);
      setLoading(true);
      const data = await postRequest("/api/application", formData);

      if (data.status == 201) {
        console.log("mmmmdata:  ",data);
        setLoading(false);
        setSuccess(true);
        setId(data.data.Data._id);
        
      } else setLoading(false);
      handleOpen();
      // Submit form data
    } catch (err) {
      console.log("err", err);
    }
  };

  return (
    <div>
      <Box
        sx={{
          backgroundColor: "#001e60",
          color: "white",
          paddingTop: "30px",
          paddingBottom: "30px",
          textAlign: "center",
        }}
      >
        <Container>
          <Typography variant="h2" component="h1" gutterBottom>
            Apply Now
          </Typography>
          <Typography variant="h5">
            Welcome to the Avicenna International Medical University! Our
            mission is to provide excellent medical education and research
            opportunities.
          </Typography>
        </Container>
        <Button component={Link} href="/application-status" variant="contained" color="success" mt={3}>
          check Application Status
        </Button>
      </Box>
      {success ? (
        <Container component="main" maxWidth="md">
        <Paper variant="outlined" sx={{ my: 3, p: 3 }}>
        <Typography variant="h4" component="h1" gutterBottom fontWeight={700} textAlign="center">
            Thanks for Apply
          </Typography>
          <Typography variant="h6" textAlign="center">
            Copy this ID for checking your application status 
          </Typography>
          <Box sx={{display:"flex",flexDirection:"row",justifyContent:"center", gap:2}}>
          <Typography  textAlign="center" fontWeight={700} color="success">
          {id}
          </Typography>
<ContentCopyIcon onClick={copyToClipboard} sx={{cursor:"pointer"}}/>
          </Box>
          
          {copySuccess && <Typography  textAlign="center"  color="grey">{copySuccess}</Typography>}
        </Paper>
       
        </Container>
      ) : (
        <Container component="main" maxWidth="md">
          <Paper variant="outlined" sx={{ my: 3, p: 3 }}>
            <Box sx={{ backgroundColor: "#" }}>
              <Typography component="h1" variant="h4" align="center">
                Online Application Form
              </Typography>
            </Box>

            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
            <Box my={5}>
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema[activeStep]}
                onSubmit={(values) => {
                  if (activeStep === steps.length - 1) {
                    handleSubmit(values);
                  } else {
                    handleNext();
                  }
                }}
              >
                {({ setFieldValue, values }) => (
                  <Form>
                    {activeStep === 0 && (
                      <Box>
                        <Grid container spacing={2}>
                          <Grid item xs={12} align="center">
                            <Avatar
                              src={
                                values.profilePhoto
                                  ? URL.createObjectURL(values.profilePhoto)
                                  : ""
                              }
                              sx={{ width: 100, height: 100, mb: 2 }}
                            />
                            <input
                              accept="image/*"
                              style={{ display: "none" }}
                              id="profilePhoto"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "profilePhoto",
                                  event.currentTarget.files[0]
                                );
                                handleFileChange(
                                  event.currentTarget.files[0],
                                  setImage
                                );
                              }}
                            />
                            <label htmlFor="profilePhoto">
                              <IconButton
                                color="primary"
                                aria-label="upload picture"
                                component="span"
                              >
                                <PhotoCamera />
                              </IconButton>
                            </label>
                            <ErrorMessage
                              name="profilePhoto"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Field
                              name="fullName"
                              as={TextField}
                              label="Full Name"
                              fullWidth
                              variant="outlined"
                            />
                            <ErrorMessage
                              name="fullName"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Field
                              name="gender"
                              as={TextField}
                              select
                              label="Gender"
                              fullWidth
                              variant="outlined"
                            >
                              <MenuItem value="Male">Male</MenuItem>
                              <MenuItem value="Female">Female</MenuItem>
                            </Field>
                            <ErrorMessage
                              name="gender"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                              <DatePicker
                                label="Date of Birth"
                                value={values.dob}
                                onChange={(date) => setFieldValue("dob", date)}
                                renderInput={(params) => (
                                  <TextField
                                    {...params}
                                    margin="normal"
                                    error={touched.dob && Boolean(errors.dob)}
                                    helperText={touched.dob && errors.dob}
                                  />
                                )}
                              />
                            </LocalizationProvider>
                          </Grid>

                          <Grid item xs={12} sm={6}>
                            <Field
                              as={TextField}
                              label="Email"
                              variant="outlined"
                              fullWidth
                              name="email"
                              required
                            />
                            <ErrorMessage
                              name="email"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Field
                              as={TextField}
                              label="Phone Number"
                              variant="outlined"
                              fullWidth
                              name="phone"
                              required
                            />
                            <ErrorMessage
                              name="phone"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <FormControl variant="outlined" fullWidth required>
                              <InputLabel id="country-label">
                                Country
                              </InputLabel>
                              <Field
                                as={Select}
                                labelId="country-label"
                                label="Country"
                                name="country"
                              >
                                {countries.map((country) => (
                                  <MenuItem key={country} value={country}>
                                    {country}
                                  </MenuItem>
                                ))}
                              </Field>
                            </FormControl>
                            <ErrorMessage
                              name="country"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                          <Grid item xs={12} sm={6}>
                            <Field
                              as={TextField}
                              label="City"
                              variant="outlined"
                              fullWidth
                              name="city"
                              required
                            />
                            <ErrorMessage
                              name="city"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Field
                              as={TextField}
                              label="Current Address"
                              variant="outlined"
                              fullWidth
                              name="currentAddress"
                              required
                            />
                            <ErrorMessage
                              name="currentAddress"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <Typography
                              variant="h5"
                              component="h1"
                              gutterBottom
                            >
                              Family Detail
                            </Typography>
                          </Grid>
                          <Grid item xs={12}>
                            <Field
                              name="fatherName"
                              as={TextField}
                              label="Father's Name"
                              fullWidth
                              variant="outlined"
                            />
                            <ErrorMessage
                              name="fatherName"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                          <Grid item xs={6}>
                            <Field
                              name="fatherOccupation"
                              as={TextField}
                              label="Father's Occupation"
                              fullWidth
                              variant="outlined"
                            />
                            <ErrorMessage
                              name="fatherOccupation"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>

                          <Grid item xs={6}>
                            <Field
                              name="fatherMobileNumber"
                              as={TextField}
                              label="Father's Mobile Number"
                              fullWidth
                              variant="outlined"
                            />
                            <ErrorMessage
                              name="fatherMobileNumber"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    )}
                    {activeStep === 1 && (
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Education Background
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12}>
                            <FormControl fullWidth>
                              <InputLabel>Select Degree</InputLabel>
                              <Field
                                name="matricDegree"
                                as={Select}
                                label="Select Degree"
                                value="matric"
                              >
                                <MenuItem value="matric">
                                  10th class/ SSC
                                </MenuItem>
                              </Field>
                              <ErrorMessage
                                component="div"
                                style={{ color: "red" }}
                                name="matricDegree"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={4}>
                            <Field
                              name="matricInstitute"
                              as={TextField}
                              label="Institute Name"
                              fullWidth
                              variant="outlined"
                            />
                            <ErrorMessage
                              component="div"
                              style={{ color: "red" }}
                              name="matricInstitute"
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <Field
                              name="matricYearPassed"
                              as={TextField}
                              label="Year Passed"
                              fullWidth
                              variant="outlined"
                            />
                            <ErrorMessage
                              component="div"
                              style={{ color: "red" }}
                              name="matricYearPassed"
                            />
                          </Grid>
                        </Grid>
                        <Grid container spacing={2}>
                          <Grid item xs={12} md={12} mt={5}>
                            <FormControl fullWidth>
                              <InputLabel>Select Degree</InputLabel>
                              <Field
                                name="fscDegree"
                                as={Select}
                                label="Select Degree"
                                value="fsc"
                              >
                                <MenuItem value="fsc">12th class/ HSC</MenuItem>
                              </Field>
                              <ErrorMessage
                                component="div"
                                style={{ color: "red" }}
                                name="fscDegree"
                              />
                            </FormControl>
                          </Grid>
                          <Grid item xs={4}>
                            <Field
                              name="fscInstitute"
                              as={TextField}
                              label="Institute Name"
                              fullWidth
                              variant="outlined"
                            />
                            <ErrorMessage
                              component="div"
                              style={{ color: "red" }}
                              name="fscInstitute"
                            />
                          </Grid>
                          <Grid item xs={4}>
                            <Field
                              name="fscYearPassed"
                              as={TextField}
                              label="Year Passed"
                              fullWidth
                              variant="outlined"
                            />
                            <ErrorMessage
                              component="div"
                              style={{ color: "red" }}
                              name="fscYearPassed"
                            />
                          </Grid>
                        </Grid>
                        <Box sx={{ mt: 4 }}>
                          <Typography variant="h6" gutterBottom>
                            Admission Details
                          </Typography>
                          <Grid container spacing={2}>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel>Select Program</InputLabel>
                                <Field
                                  name="program"
                                  as={Select}
                                  label="Select Program"
                                >
                                  <MenuItem value="MBBS">MBBS</MenuItem>
                                  <MenuItem value="BDS">BDS</MenuItem>
                                  <MenuItem value="PHARMACY">PHARMACY</MenuItem>
                                  <MenuItem value="Post Graduation">
                                    Post Graduation
                                  </MenuItem>
                                </Field>
                                <ErrorMessage
                                  component="div"
                                  style={{ color: "red" }}
                                  name="program"
                                />
                              </FormControl>
                            </Grid>
                            <Grid item xs={6}>
                              <FormControl fullWidth>
                                <InputLabel>Session</InputLabel>
                                <Field
                                  name="session"
                                  as={Select}
                                  label="Session"
                                >
                                  <MenuItem value="September-2024">
                                    September-2024
                                  </MenuItem>
                                  <MenuItem value="March-2024">
                                    March-2024
                                  </MenuItem>
                                </Field>
                                <ErrorMessage
                                  component="div"
                                  style={{ color: "red" }}
                                  name="session"
                                />
                              </FormControl>
                            </Grid>
                          </Grid>
                        </Box>
                      </Box>
                    )}
                    {activeStep === 2 && (
                      <Box>
                        <Typography variant="h6" gutterBottom>
                          Documents Submit
                        </Typography>
                        <Grid container spacing={2}>
                          <Grid item xs={12}>
                            <input
                              accept=".pdf,.doc,.docx"
                              style={{
                                display: "block",
                                float: "right",
                                marginTop: "10px",
                              }}
                              id="passportCopy"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "passportCopy",
                                  event.currentTarget.files[0]
                                );
                                handleFileChange(
                                  event.currentTarget.files[0],
                                  setPassportPdf
                                );
                              }}
                            />
                            <label htmlFor="passportCopy">
                              <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                startIcon={<FileUploadIcon />}
                              >
                                Upload Passport
                              </Button>
                            </label>
                            <ErrorMessage
                              name="passportCopy"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <input
                              accept=".pdf,.doc,.docx"
                              style={{
                                display: "block",
                                float: "right",
                                marginTop: "10px",
                              }}
                              id="sscCertificate"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "sscCertificate",
                                  event.currentTarget.files[0]
                                );
                                handleFileChange(
                                  event.currentTarget.files[0],
                                  setPdf
                                );
                              }}
                            />
                            <label htmlFor="sscCertificate">
                              <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                startIcon={<FileUploadIcon />}
                              >
                                Upload 10th Class/SSC/Equivalent Certificate *
                              </Button>
                            </label>
                            <ErrorMessage
                              name="sscCertificate"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <input
                              accept=".pdf,.doc,.docx"
                              style={{
                                display: "block",
                                float: "right",
                                marginTop: "10px",
                              }}
                              id="hscCertificate"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "hscCertificate",
                                  event.currentTarget.files[0]
                                );
                                handleFileChange(
                                  event.currentTarget.files[0],
                                  setColloegeCertificatePdf
                                );
                              }}
                            />
                            <label htmlFor="hscCertificate">
                              <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                startIcon={<FileUploadIcon />}
                              >
                                Upload 12th Class/HSC/Equivalent Certificate *
                              </Button>
                            </label>
                            <ErrorMessage
                              name="hscCertificate"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <input
                              accept=".pdf,.doc,.docx"
                              style={{
                                display: "block",
                                float: "right",
                                marginTop: "10px",
                              }}
                              id="otherFiles"
                              type="file"
                              onChange={(event) => {
                                setFieldValue(
                                  "otherFiles",
                                  event.currentTarget.files[0]
                                );
                                handleFileChange(
                                  event.currentTarget.files[0],
                                  setOtherFile
                                );
                              }}
                            />
                            <label htmlFor="otherFiles">
                              <Button
                                variant="contained"
                                color="primary"
                                component="span"
                                startIcon={<FileUploadIcon />}
                              >
                                Upload Other Files
                              </Button>
                            </label>
                            <ErrorMessage
                              name="otherFiles"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>

                          <Grid item xs={12}>
                            <Field
                              name="remarks"
                              as={TextField}
                              label="Remarks"
                              fullWidth
                              variant="outlined"
                              multiline
                              rows={4}
                            />
                            <ErrorMessage
                              name="remarks"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                          <Grid item xs={12}>
                            <FormControlLabel
                              control={
                                <Field name="disclaimer" as={Checkbox} />
                              }
                              label="I hereby affirm that, I have reviewed the above information, all information and materials provided here are true and correct to the best of my knowledge."
                            />
                            <ErrorMessage
                              name="disclaimer"
                              component="div"
                              style={{ color: "red" }}
                            />
                          </Grid>
                        </Grid>
                      </Box>
                    )}

                    <Box mt={3}>
                      <Button
                        disabled={activeStep === 0}
                        onClick={handleBack}
                        variant="contained"
                        color="secondary"
                        style={{ marginRight: 8 }}
                      >
                        Back
                      </Button>
                      {loading == false ? (
                        <Button
                          type="submit"
                          variant="contained"
                          color="primary"
                        >
                          {activeStep === steps.length - 1 ? "Submit" : "Next"}
                        </Button>
                      ) : (
                        <LoadingButton
                          loading
                          variant="outlined"
                          sx={{
                            borderRadius: "30px",
                            maxHeight: "40px",

                            fontWeight: 700,
                            width: "120px",
                          }}
                        >
                          Submit
                        </LoadingButton>
                      )}
                    </Box>
                  </Form>
                )}
              </Formik>
            </Box>
          </Paper>
          {/* <SuccessModal open={open} handleClose={handleClose} /> */}
        </Container>
      )}
    </div>
  );
};

export default Apply;
