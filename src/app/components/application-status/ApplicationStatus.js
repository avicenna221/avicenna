"use client";
import React, { useState } from "react";

// material-ui
import {
  Button,
  FormHelperText,
  Grid,
  InputLabel,
  OutlinedInput,
  Paper,
  Stack,
  Typography,
} from "@mui/material";

// third party
import * as Yup from "yup";
import { Formik } from "formik";
import { getRequest, postRequest } from "../../RequestsAPI/RequestsApi";
import LoadingButton from "@mui/lab/LoadingButton";

const ApplicationStatus = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(0);
  const [data, setData] = useState(null);
  console.log("data", data);
  return (
    <Formik
      initialValues={{
        id: "",
      }}
      validationSchema={Yup.object().shape({
        id: Yup.string().required("Full name is required"),
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

          const data = await getRequest(
            `/api/application/status?id=${values.id}`
          );
          console.log("mdata", data);
          if (data.status == 200) {
            setLoading(false);
            setSuccess(1);
            setData(data.data.Data);
          } else {
            setLoading(false);
            setSuccess(2);
          }
        } catch (err) {
          console.error(err);
          setSuccess(2);
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
            <Grid item xs={12} md={12}>
              <Stack spacing={1}>
                <InputLabel htmlFor="id">Status ID*</InputLabel>
                <OutlinedInput
                  id="id"
                  size="small"
                  type="id"
                  value={values.firstName}
                  name="id"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  placeholder="936hd...."
                  fullWidth
                  error={Boolean(touched.id && errors.id)}
                />
                {touched.id && errors.id && (
                  <FormHelperText error id="helper-text-id">
                    {errors.id}
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
                  Check
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
                  Check
                </LoadingButton>
              )}
            </Grid>
            {errors.submit && (
              <Grid item xs={12}>
                <FormHelperText error>{errors.submit}</FormHelperText>
              </Grid>
            )}
            {success == 1 && (
                <Grid item xs={12}>
                <Paper variant="outlined" sx={{ my: 3, p: 3 }} mt={12}>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                <Typography  >
                  <b>Status : {data.status}</b>
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography  >
                  Full Name : {data.fullName}
                </Typography>
              </Grid>
              <Grid item xs={12} md={6}>
                <Typography  >
                  Father Name : {data.fatherName}
                </Typography>
              </Grid>
                </Grid>
              
              </Paper>
              </Grid>
            )}
            {success == 2 && (
                <Grid item xs={12}>
                <Paper variant="outlined" sx={{ my: 3, p: 3 }} mt={12}>
                <Grid container spacing={3}>
                <Grid item xs={12}>
                <Typography  >
                  <b>Not Found</b>
                </Typography>
              </Grid>
             
              </Grid>
              </Paper>
              </Grid>
            )}
          </Grid>
        </form>
      )}
    </Formik>
  );
};

export default ApplicationStatus;
