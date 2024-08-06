"use client"
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  TextField,
  Container,
  Typography,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  IconButton,
  useMediaQuery,
  useTheme,
  TablePagination,
  Avatar,
  FormControl,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import {
  deleteRequest,
  getRequest,
  patchRequest,
  postRequest,
} from "@/app/RequestsAPI/RequestsApi";
// import Base64Downloader from "common-base64-downloader-react";

import LoadingButton from "@mui/lab/LoadingButton";
const createData = (fullName, email, status, dateTime) => {
  return { fullName, email, status, dateTime };
};

// Example student contact data


const ApplicationTable = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [selectedRow2, setSelectedRow2] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [isDialogOpen2, setIsDialogOpen2] = useState(false);
  const [status, setStatus] = useState("");
  const [updateId, setUpdateId] = useState("");
  const [loading, setLoading] = useState(false);
  const handleChange = (event) => {
    setStatus(event.target.value);
  };
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("sm"));
  console.log(filteredRows);
  // Pagination state
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleSearch = (event) => {
    const query = event.target.value.toLowerCase();
    setSearchQuery(query);

    const filteredData = filteredRows.filter(
      (row) =>
        row.fullName.toLowerCase().includes(query) ||
        row.email.toLowerCase().includes(query) ||
        row.status.toLowerCase().includes(query) ||
        row.createdAt.toLowerCase().includes(query)
    );

    setFilteredRows(filteredData);
  };

  const handleView = (row) => {
    setSelectedRow(row);
    setIsDialogOpen(true);
  };
  const handleViewEdite = (row) => {
    setSelectedRow2(row);
    setIsDialogOpen2(true);
    setStatus(row.status);
    setUpdateId(row._id);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedRow(null);
  };
  const handleCloseDialogEdite = async () => {
    await updateData();
    setIsDialogOpen2(false);
    setSelectedRow2(null);
    setLoading(false);
  };

  const handleDelete = (rowToDelete) => {
    deleteData(rowToDelete);
    setFilteredRows(filteredRows.filter((row) => row !== rowToDelete));
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const updateData = async () => {
    setLoading(true);
    const formData = new FormData();
    formData.append("id", updateId);
    formData.append("status", status);
    const data = await patchRequest("/api/application", formData);
    if (data.status == 201) {
      setFilteredRows(data.data.Data);
    }
  };
  const getData = async () => {
    const data = await getRequest("/api/application");
    if (data.status == 200) {
      setFilteredRows(data.data.Data);
    }
  };
  const deleteData = async (payload) => {
    console.log("payload",payload);
    let url=null;
    if(payload.bannerPhoto!=undefined)
      url=payload.bannerPhoto
    const formData = new FormData();
    formData.append("id",payload._id);
    formData.append("url",url);
    const data = await postRequest(`/api/application/delete`,formData);
  
  };
  useEffect(() => {
    getData();
  }, []);

  return (
    <Container>
      <Typography
        variant="h4"
        gutterBottom
        sx={{ fontWeight: 700, lineHeight: "1.2em", color: "#382153" }}
      >
        All Applications
      </Typography>
      <TextField
        label="Search"
        variant="outlined"
        fullWidth
        margin="normal"
        value={searchQuery}
        onChange={handleSearch}
      />
      <TableContainer component={Paper}>
        <Table aria-label="student contact table">
          <TableHead>
            <TableRow style={{ backgroundColor: "#382153" }}>
              <TableCell style={{ color: "white" }}>Name</TableCell>
              <TableCell style={{ color: "white" }}>Email</TableCell>
              <TableCell style={{ color: "white" }}>Country</TableCell>
              <TableCell style={{ color: "white" }}>Status</TableCell>
              <TableCell align="right" style={{ color: "white" }}>
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {filteredRows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row, index) => (
                <TableRow key={index}>
                  <TableCell>
                    {row.fullName} {row.lastName}
                  </TableCell>

                  <TableCell>{row.email}</TableCell>
                  <TableCell>{row.country}</TableCell>
                  {row.status=="accept" && <TableCell sx={{color:"#00FF00", fontWeight:700}}>{row.status} </TableCell>}
                  {row.status=="pending" && <TableCell sx={{color:"grey", fontWeight:700}}>{row.status} </TableCell>}
                  {row.status=="reject" && <TableCell sx={{color:"#FF0000", fontWeight:700}}>{row.status} </TableCell>}
                  <TableCell align="right">
                    <IconButton onClick={() => handleView(row)}>
                      <Visibility style={{ color: "blue" }} />
                    </IconButton>
                    <IconButton onClick={() => handleViewEdite(row)}>
                      <Edit style={{ color: "blue" }} />
                    </IconButton>
                    <IconButton onClick={() => handleDelete(row)}>
                      <Delete style={{ color: "red" }} />
                    </IconButton>
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <TablePagination
          rowsPerPageOptions={[10, 30, 45]}
          component="div"
          count={filteredRows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          style={{ backgroundColor: "#382153", color: "white" }}
        />
      </TableContainer>

      <Dialog
        open={isDialogOpen}
        onClose={handleCloseDialog}
        fullScreen={fullScreen}
        maxWidth="md"
        PaperProps={{
          style: {
            backgroundColor: "#382153",
            color: "white",
            width: fullScreen ? "97%" : "40%",
          },
        }}
      >
        <DialogTitle>View Detail</DialogTitle>
        {selectedRow && (
          <DialogContent>
            <Avatar
              src={selectedRow.profilePhoto.url}
              alt={selectedRow.userName}
              sx={{
                width: "80px",
                height: "80px",
                mt: 5,
                mb: 5,
              }}
            />
            <Typography>
              ID:  {selectedRow._id}
            </Typography>
            <Typography>
              Full Name: {selectedRow.fullName} {selectedRow.lastName}
            </Typography>
            <Typography>Email: {selectedRow.email}</Typography>
            <Typography>Phone: {selectedRow.phone}</Typography>
            <Typography>Address: {selectedRow.currentAddress}</Typography>
            <Typography>City: {selectedRow.city}</Typography>
            <Typography>Country: {selectedRow.country}</Typography>
            <Typography>fatherName: {selectedRow.fatherName}</Typography>
            <Typography>
              fatherOccupation: {selectedRow.fatherOccupation}
            </Typography>
            <Typography>
              fatherMobileNumber: {selectedRow.fatherMobileNumber}
            </Typography>
            <Typography>matricDegree: {selectedRow.matricDegree}</Typography>
            <Typography>
              matricInstitute: {selectedRow.matricInstitute}
            </Typography>
            <Typography>
              matricYearPassed: {selectedRow.matricYearPassed}
            </Typography>
            <Typography>fscDegree: {selectedRow.fscDegree}</Typography>
            <Typography>fscInstitute: {selectedRow.fscInstitute}</Typography>
            <Typography>fscYearPassed: {selectedRow.fscYearPassed}</Typography>
            <Typography>remarks: {selectedRow.remarks}</Typography>
            <Typography>program: {selectedRow.program}</Typography>
            <Typography>session: {selectedRow.session}</Typography>
            <Typography>status: {selectedRow.status}</Typography>
            {/* <Base64Downloader
              base64={selectedRow.sscCertificate}
              downloadName="matric"
            >
              Download Matric/ssc
            </Base64Downloader>
            <br></br>
            
            <Base64Downloader
              base64={selectedRow.hscCertificate}
              downloadName="hsc"
            >
              Download Fsc/hsc
            </Base64Downloader>
            <br></br>
            {selectedRow.otherFiles!="null"? <Base64Downloader
              base64={selectedRow.otherFiles}
              downloadName="other files"
            >
              Other Files
            </Base64Downloader>:null}
            <br></br>
            {selectedRow.passportCopy!="null" && <Base64Downloader
              base64={selectedRow.passportCopy}
              downloadName="passport"
            >
              Passport Copy
            </Base64Downloader>} */}
            <Typography>Date & Time: {selectedRow.createdAt}</Typography>
          </DialogContent>
        )}
        <DialogActions>
          <Button
            onClick={handleCloseDialog}
            sx={{
              backgroundColor: "#ffffff",
              "&:hover": {
                backgroundColor: "#fff",
              },
            }}
            color="primary"
          >
            Close
          </Button>
        </DialogActions>
      </Dialog>
      <Dialog
        open={isDialogOpen2}
        onClose={handleCloseDialog}
        fullScreen={fullScreen}
        maxWidth="md"
        PaperProps={{
          style: {
            width: fullScreen ? "97%" : "40%",
          },
        }}
      >
        <DialogTitle>View Detail</DialogTitle>
        {selectedRow2 && (
          <DialogContent>
            <FormControl sx={{ m: 1, minWidth: 120 }} size="small">
              <InputLabel id="demo-select-small-label">Status</InputLabel>
              <Select
                labelId="demo-select-small-label"
                id="demo-select-small"
                value={status}
                label="Status"
                onChange={handleChange}
              >
                <MenuItem value="pending">Pending</MenuItem>
                <MenuItem value="accept">Accepted</MenuItem>
                <MenuItem value="reject">Rejected</MenuItem>
                <MenuItem value="student">Student</MenuItem>
              </Select>
            </FormControl>
          </DialogContent>
        )}
        <DialogActions>
          {loading == false ? (
            <Button
              onClick={handleCloseDialogEdite}
              sx={{
                backgroundColor: "#ffffff",
                "&:hover": {
                  backgroundColor: "#fff",
                },
              }}
              color="primary"
            >
              Update
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
              Update
            </LoadingButton>
          )}
        </DialogActions>
      </Dialog>
    </Container>
  );
};

export default ApplicationTable;
