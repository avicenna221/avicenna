// components/StudentContactsTable.js
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
} from "@mui/material";
import { Delete, Edit, Visibility } from "@mui/icons-material";
import { deleteRequest, getRequest, postRequest } from "@/app/RequestsAPI/RequestsApi";

const createData = (name, email, address, dateTime) => {
  return { name, email, address, dateTime };
};

// Example student contact data
const rows = [
  createData(
    "John Doe",
    "john@example.com",
    "This is a sample message from John.",
    "2024-05-25 14:30"
  ),
  createData(
    "Jane Smith",
    "jane@example.com",
    "This is a sample message from Jane.",
    "2024-05-24 10:00"
  ),
  createData(
    "Alan Brown",
    "alan@example.com",
    "This is a sample message from Alan.",
    "2024-05-23 08:15"
  ),
  createData(
    "Emily White",
    "emily@example.com",
    "This is a sample message from Emily.",
    "2024-05-22 16:45"
  ),
  // Add more data to exceed 15 rows for testing pagination
  createData(
    "Chris Green",
    "chris@example.com",
    "This is a sample message from Chris.",
    "2024-05-21 11:00"
  ),
  createData(
    "Linda Black",
    "linda@example.com",
    "This is a sample message from Linda.",
    "2024-05-20 09:30"
  ),
  createData(
    "Sarah Blue",
    "sarah@example.com",
    "This is a sample message from Sarah.",
    "2024-05-19 13:45"
  ),
  createData(
    "Michael Red",
    "michael@example.com",
    "This is a sample message from Michael.",
    "2024-05-18 14:00"
  ),
  createData(
    "David Orange",
    "david@example.com",
    "This is a sample message from David.",
    "2024-05-17 15:30"
  ),
  createData(
    "Jessica Purple",
    "jessica@example.com",
    "This is a sample message from Jessica.",
    "2024-05-16 10:15"
  ),
  createData(
    "James Yellow",
    "james@example.com",
    "This is a sample message from James.",
    "2024-05-15 08:45"
  ),
  createData(
    "Emily Grey",
    "emilyg@example.com",
    "This is a sample message from Emily Grey.",
    "2024-05-14 11:30"
  ),
  createData(
    "Sophia Pink",
    "sophia@example.com",
    "This is a sample message from Sophia.",
    "2024-05-13 12:45"
  ),
  createData(
    "Lucas Brown",
    "lucas@example.com",
    "This is a sample message from Lucas.",
    "2024-05-12 10:00"
  ),
  createData(
    "Mia White",
    "mia@example.com",
    "This is a sample message from Mia.",
    "2024-05-11 13:30"
  ),
  createData(
    "Elijah Blue",
    "elijah@example.com",
    "This is a sample message from Elijah.",
    "2024-05-10 09:15"
  ),
  createData(
    "Oliver Black",
    "oliver@example.com",
    "This is a sample message from Oliver.",
    "2024-05-09 16:00"
  ),
];

const StudentContactsTable = (props) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredRows, setFilteredRows] = useState([]);
  const [selectedRow, setSelectedRow] = useState(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);
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
        row.firstName.toLowerCase().includes(query) ||
        row.lastName.toLowerCase().includes(query) ||
        row.email.toLowerCase().includes(query) ||
        row.message.toLowerCase().includes(query) ||
        row.createdAt.toLowerCase().includes(query)
    );

    setFilteredRows(filteredData);
  };

  const handleView = (row) => {
    setSelectedRow(row);
    setIsDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setIsDialogOpen(false);
    setSelectedRow(null);
  };

  const handleDelete = (rowToDelete) => {
   
    deleteData(rowToDelete._id);
    setFilteredRows(filteredRows.filter(row => row !== rowToDelete));
  };

  // Pagination handlers
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };
  const getData = async () => {
    const data = await getRequest("/api/contact");
    if (data.status == 200) {
      setFilteredRows(data.data.Data);
    }
  };
  const deleteData = async (id) => {
   
    const data = await postRequest(`/api/contact/delete`,{id:id,name:"jkns"});
    
    if (data.status == 200) window.alert("Data deleted Successfully");
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
        Student Contact Data
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
              <TableCell style={{ color: "white" }}>Address</TableCell>
              <TableCell style={{ color: "white" }}>Date & Time</TableCell>
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
                  <TableCell>{row.address}</TableCell>
                  <TableCell>{row.createdAt}</TableCell>
                  <TableCell align="right">
                    <IconButton onClick={() => handleView(row)}>
                      <Visibility style={{ color: "blue" }} />
                    </IconButton>
                    {/* <IconButton>
                    <Edit style={{ color: 'blue' }} />
                  </IconButton> */}
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
        <DialogTitle>View Contact</DialogTitle>
        {selectedRow && (
          <DialogContent>
            <Typography>
              fullName: {selectedRow.fullName} {selectedRow.lastName}
            </Typography>
            <Typography>Email: {selectedRow.email}</Typography>
            <Typography>Phone: {selectedRow.phone}</Typography>
            <Typography>Address: {selectedRow.address}</Typography>
            <Typography>Message: {selectedRow.message}</Typography>
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
    </Container>
  );
};

export default StudentContactsTable;
