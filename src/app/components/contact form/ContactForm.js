"use client";
import React, { useState } from "react";

// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { postRequest } from "../../RequestsAPI/RequestsApi";
import LoadingButton from "@mui/lab/LoadingButton";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  return (
    <Formik
      initialValues={{
        fullName: "",

        email: "",
        phone: "",
        address: "",
        message: "",
      }}
      validationSchema={Yup.object().shape({
        fullName: Yup.string().required("Full name is required"),

        phone: Yup.string().required("Phone number is required"),
        address: Yup.string().required("Address is required"),
        email: Yup.string()
          .email("Must be a valid email")
          .max(255)
          .required("Email is required"),
        message: Yup.string().max(255).required("Message is required"),
      })}
      onSubmit={async (
        values,
        { setErrors, setStatus, setSubmitting, resetForm }
      ) => {
        try {
          setStatus({ success: true });
          setLoading(true);
          setSubmitting(true);
          resetForm();

          const data = await postRequest("/api/contact", values);

          if (data.status == 200) {
            setLoading(false);
            setSuccess(true);
          } else setLoading(false);
        } catch (err) {
          console.error(err);
          setStatus({ success: false });
          setErrors({ submit: err.message });
          setSubmitting(false);
          setLoading(false);
        }
      }}
    >
      {({
        errors,
        handleBlur,
        handleChange,
        handleSubmit,
        isSubmitting,
        touched,
        values,
      }) => (
        <form noValidate onSubmit={handleSubmit}>
          <Grid container spacing={3}>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="fullName-signup">Full Name*</InputLabel>
                <OutlinedInput
                  id="fullName-signup"
                  size="small"
                  type="fullName"
                  value={values.firstName}
                  name="fullName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="John smith"
                  fullWidth
                  error={Boolean(touched.fullName && errors.fullName)}
                />
                {touched.fullName && errors.fullName && (
                  <FormHelperText error id="helper-text-fullName-signup">
                    {errors.fullName}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="phone-signup">Phone Number*</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.phone && errors.phone)}
                  id="phone-signup"
                  type="phone"
                  value={values.phone}
                  size="small"
                  name="phone"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="+00 00000000"
                  inputProps={{}}
                />
                {touched.phone && errors.phone && (
                  <FormHelperText error id="helper-text-phone-signup">
                    {errors.phone}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="email-login">Email Address</InputLabel>
                <OutlinedInput
                  id="email-login"
                  type="email"
                  value={values.email}
                  name="email"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Enter email address"
                  fullWidth
                  error={Boolean(touched.email && errors.email)}
                />
                {touched.email && errors.email && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-email-login"
                  >
                    {errors.email}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack spacing={1}>
                <InputLabel htmlFor="address-signup">Address*</InputLabel>
                <OutlinedInput
                  fullWidth
                  error={Boolean(touched.address && errors.address)}
                  id="address-signup"
                  type="address"
                  value={values.address}
                  size="small"
                  name="address"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="Address.."
                  inputProps={{}}
                />
                {touched.address && errors.address && (
                  <FormHelperText error id="helper-text-address-signup">
                    {errors.address}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12} md={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="message-signup">Message*</InputLabel>
                <OutlinedInput
                  id="message"
                  size="small"
                  type="message"
                  value={values.message}
                  name="message"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="John"
                  multiline
                  rows={4}
                  fullWidth
                  error={Boolean(touched.message && errors.message)}
                />
                {touched.message && errors.message && (
                  <FormHelperText error id="helper-text-message-signup">
                    {errors.message}
                  </FormHelperText>
                )}
              </Stack>
            </Grid>
            <Grid item xs={12}>
              {loading == false ? (
                <Button
                  disableElevation
                  disabled={isSubmitting}
                  fullWidth
                  size="large"
                  type="submit"
                  variant="contained"
                  color="primary"
                  sx={{
                    borderRadius: "30px",
                    maxHeight: "40px",

                    fontWeight: 700,
                    width: "120px",
                    background: "#213b75",
                    "&:hover": {
                      background: "#001e60",
                    },
                  }}
                >
                  Submit
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
            </Grid>
            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}
            {success == true && (
              <Grid item xs={12}>
                <Typography padding={5} sx={{ backgroundColor: "#e9fc7c" }}>
                  <b>Thank you for getting in touch!</b>
                  <br></br>
                  We appreciate you contacting us. One of our customer happiness
                  members will be getting back to you within a few hours.
                  <br></br>
                  In the meantime, you can check out the following resources:
                  <br></br>
                  Have a great day ahead!
                </Typography>
              </Grid>
            )}
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default ContactForm;
