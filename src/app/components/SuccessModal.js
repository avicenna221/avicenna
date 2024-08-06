// components/SuccessModal.js
import React from "react";
import { Box, Modal, Typography, Button } from "@mui/material";
import { makeStyles } from "@mui/styles";
import theme from "../theme";
const useStyles = makeStyles(() => ({
  modalBox: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    backgroundColor: "white",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
    padding: theme.spacing(4),
    outline: 0,
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: "#001e60",
    color: "#fff",
    "&:hover": {
      backgroundColor: "#4b91f1",
    },
  },
}));

const SuccessModal = ({ open, handleClose }) => {
  const classes = useStyles();

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="success-modal-title"
      aria-describedby="success-modal-description"
    >
      <Box className={classes.modalBox}>
        <Typography id="success-modal-title" variant="h6" component="h2">
          Success
        </Typography>
        <Typography id="success-modal-description" sx={{ mt: 2 }}>
          Your application has been submitted successfully.
        </Typography>
        <Button
          className={classes.button}
          onClick={handleClose}
          variant="contained"
        >
          Close
        </Button>
      </Box>
    </Modal>
  );
};

export default SuccessModal;
