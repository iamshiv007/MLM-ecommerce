import React, { Fragment } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../../styles/Users.css";
import { Button } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "Sr. NO.",
    width: 60,
    headerClassName: "usersHeader",
  },
  {
    field: "name",
    headerName: "Name",
    width: 130,
    headerClassName: "usersHeader",
  },
  {
    field: "mobileNumber",
    headerName: "Mobile NO.",
    width: 110,
    headerClassName: "usersHeader",
  },
  {
    field: "email",
    headerName: "Email Id",
    width: 220,
    headerClassName: "usersHeader",
  },
  {
    field: "referCode",
    headerName: "Refer Code",
    width: 110,
    headerClassName: "usersHeader",
  },
  {
    field: "wallet",
    headerName: "Wallet",
    width: 100,
    headerClassName: "usersHeader",
  },
  {
    field: "myTeam",
    headerName: "My Team",
    width: 100,
    headerClassName: "usersHeader",
  },
  {
    field: "address",
    headerName: "Address",
    width: 150,
    headerClassName: "usersHeader",
  },
  {
    field: "showPassword",
    headerName: "Show Password",
    width: 130,
    headerClassName: "usersHeader",
  },
  {
    field: "showSecretKey",
    headerName: "Show Secret Key",
    width: 150,
    headerClassName: "usersHeader",
    autoWidth: true,
  },
  {
    field: "changePassword",
    headerName: "Change Password",
    width: 130,
    headerClassName: "usersHeader",
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
    headerClassName: "usersHeader",
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
    headerClassName: "usersHeader",
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
  return (
    <Fragment>
      <div className="usersPage">
        <h1 style={{ marginBottom: "12px", color: "white" }}>Users</h1>
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
      </div>
    </Fragment>
  );
};

export default Users;