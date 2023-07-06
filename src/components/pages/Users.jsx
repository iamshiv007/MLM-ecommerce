import React, { Fragment, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../../styles/Users.css";
import { Box, Button, Modal, TextField, Container, Grid } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "Sr. NO.",
    width: 60,
    headerClassName: "tableHeader",
  },
  {
    field: "name",
    headerName: "Name",
    width: 130,
    headerClassName: "tableHeader",
  },
  {
    field: "mobileNumber",
    headerName: "Mobile NO.",
    width: 110,
    headerClassName: "tableHeader",
  },
  {
    field: "email",
    headerName: "Email Id",
    width: 220,
    headerClassName: "tableHeader",
  },
  {
    field: "referCode",
    headerName: "Refer Code",
    width: 110,
    headerClassName: "tableHeader",
  },
  {
    field: "wallet",
    headerName: "Wallet",
    width: 100,
    headerClassName: "tableHeader",
  },
  {
    field: "myTeam",
    headerName: "My Team",
    width: 100,
    headerClassName: "tableHeader",
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
    headerClassName: "tableHeader",
  },
  {
    field: "showPassword",
    headerName: "Show Password",
    width: 130,
    headerClassName: "tableHeader",
  },
  {
    field: "showSecretKey",
    headerName: "Show Secret Key",
    width: 150,
    headerClassName: "tableHeader",
    autoWidth: true,
  },
  {
    field: "changePassword",
    headerName: "Change Password",
    width: 130,
    headerClassName: "tableHeader",
    renderCell: (params) => (
      <Button
        variant="contained"
        color="warning"
        onClick={() => changePassword(params.id)}
      >
        Edit
      </Button>
    ),
  },
  {
    field: "blockUnblock",
    headerName: "Block/Unblock",
    width: 140,
    headerClassName: "tableHeader",
    autoWidth: true,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleBlock(params.id)}
      >
        Block
      </Button>
    ),
  },
  {
    field: "delete",
    headerName: "Delete",
    width: 100,
    headerClassName: "tableHeader",
    autoWidth: true,
    renderCell: (params) => (
      <Button
        variant="contained"
        color="secondary"
        style={{ backgroundColor: "red" }}
        onClick={() => handleDelete(params.id)}
      >
        Delete
      </Button>
    ),
  },
];

const handleDelete = (id) => {
  // Handle the delete action for the corresponding row with the provided ID
};

const handleBlock = (id) => {
  // Handle the block toggle action for the corresponding row with the provided ID
};

const changePassword = () => {
  // Handle the change password action for the corresponding row with the provided ID
};

const rows = [
  {
    id: 1,
    name: "John Doe",
    mobileNumber: "1234567890",
    email: "john.doe@example.com",
    referCode: "ABC123",
    wallet: "$100",
    myTeam: "Team A",
    address: "123 Main St, City",
    showPassword: "john@123",
    showSecretKey: "example_secret_key",
    changePassword: false,
  },
  {
    id: 2,
    name: "Jane Smith",
    mobileNumber: "9876543210",
    email: "jane.smith@example.com",
    referCode: "DEF456",
    wallet: "$50",
    myTeam: "Team B",
    address: "456 Elm St, City",
    showPassword: "jane@123",
    showSecretKey: "example_secret_key",
    changePassword: true,
  },
  {
    id: 3,
    name: "Robert Johnson",
    mobileNumber: "5551234567",
    email: "robert.johnson@example.com",
    referCode: "GHI789",
    wallet: "$75",
    myTeam: "Team C",
    address: "789 Oak St, City",
    showPassword: "robert@123",
    showSecretKey: "example_secret_key",
    changePassword: true,
  },
  {
    id: 4,
    name: "Emily Davis",
    mobileNumber: "9998887777",
    email: "emily.davis@example.com",
    referCode: "JKL012",
    wallet: "$200",
    myTeam: "Team D",
    address: "321 Pine St, City",
    showPassword: "emily@123",
    showSecretKey: "example_secret_key",
    changePassword: false,
  },
  {
    id: 5,
    name: "Michael Wilson",
    mobileNumber: "7774445555",
    email: "michael.wilson@example.com",
    referCode: "MNO345",
    wallet: "$150",
    myTeam: "Team E",
    address: "987 Cedar St, City",
    showPassword: "michael@123",
    showSecretKey: "example_secret_key",
    changePassword: false,
  },
  {
    id: 6,
    name: "Sarah Thompson",
    mobileNumber: "2223334444",
    email: "sarah.thompson@example.com",
    referCode: "PQR678",
    wallet: "$50",
    myTeam: "Team F",
    address: "654 Birch St, City",
    showPassword: "sarah@123",
    showSecretKey: "example_secret_key",
    changePassword: true,
  },
  {
    id: 7,
    name: "David Anderson",
    mobileNumber: "8885556666",
    email: "david.anderson@example.com",
    referCode: "STU901",
    wallet: "$80",
    myTeam: "Team G",
    address: "789 Maple St, City",
    showPassword: "david@123",
    showSecretKey: "example_secret_key",
    changePassword: true,
  },
  {
    id: 8,
    name: "Olivia Lee",
    mobileNumber: "4447778888",
    email: "olivia.lee@example.com",
    referCode: "VWX234",
    wallet: "$120",
    myTeam: "Team H",
    address: "456 Walnut St, City",
    showPassword: "olivia@123",
    showSecretKey: "example_secret_key",
    changePassword: false,
  },
  {
    id: 9,
    name: "Daniel Hernandez",
    mobileNumber: "1112223333",
    email: "daniel.hernandez@example.com",
    referCode: "YZA567",
    wallet: "$90",
    myTeam: "Team I",
    address: "321 Cherry St, City",
    showPassword: "daniel@123",
    showSecretKey: "example_secret_key",
    changePassword: false,
  },
  {
    id: 10,
    name: "Sophia Taylor",
    mobileNumber: "6669990000",
    email: "sophia.taylor@example.com",
    referCode: "BCD890",
    wallet: "$60",
    myTeam: "Team J",
    address: "987 Spruce St, City",
    showPassword: "sophia@123",
    showSecretKey: "example_secret_key",
    changePassword: true,
  },
  // Add more rows as needed...
];

const Users = () => {
  const customCellClassName = (params) => {
    return "custom-cell"; // CSS class for custom styling
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <div className="usersPage page">
        <div>
          <h1 className="pageName">Users</h1>
          <Button onClick={handleOpen} variant="contained" color="primary">
            + Add New User
          </Button>
        </div>
        <div style={{ height: "100%", width: "100%" }}>
          <DataGrid
            rows={rows}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
            }}
            pageSizeOptions={[5, 10]}
            // checkboxSelection
            getCellClassName={customCellClassName}
          />
        </div>

        <div className="newUserModal">
          <NewUserModal handleClose={handleClose} open={open} />
        </div>
      </div>
    </Fragment>
  );
};

export default Users;

const NewUserModal = ({ handleClose, open }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 2,
    borderRadius: 2,
  };

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <h2 style={{ marginBottom: "20px", textAlign: "center" }}>New User</h2>

        <AddUserForm handleClose={handleClose} />
      </Box>
    </Modal>
  );
};

const AddUserForm = ({ handleClose }) => {
  const [formData, setFormData] = useState({
    name: "",
    mobileNo: "",
    email: "",
    password: "",
    confirmPassword: "",
    referCode: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add logic to handle form submission (e.g., validation, API calls)
    console.log(formData);
  };

  return (
    <Container maxWidth="sm">
      <form onSubmit={handleSubmit}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <TextField
              name="name"
              label="Name"
              fullWidth
              value={formData.name}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="mobileNo"
              label="Mobile No"
              fullWidth
              value={formData.mobileNo}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="email"
              label="Email ID"
              fullWidth
              value={formData.email}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="password"
              label="Password"
              type="password"
              fullWidth
              value={formData.password}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="confirmPassword"
              label="Confirm Password"
              type="password"
              fullWidth
              value={formData.confirmPassword}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              name="referCode"
              label="Refer Code"
              fullWidth
              value={formData.referCode}
              onChange={handleChange}
            />
            <Grid item xs={12}>
              <div className="modalButtons">
                <Button
                  onClick={handleClose}
                  variant="contained"
                  style={{ backgroundColor: "grey" }}
                >
                  Cancel
                </Button>
                <Button
                  type="submit"
                  onClick={handleClose}
                  variant="contained"
                  color="primary"
                >
                  Add User
                </Button>
              </div>
            </Grid>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
};
