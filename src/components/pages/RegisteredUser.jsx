import React, { Fragment } from "react";
import { DataGrid } from "@mui/x-data-grid";
import "../../styles/RegisteredUsers.css";

const columns = [
  {
    field: "srno",
    headerName: "Sr. NO.",
    width: 80,
    headerClassName: "tableHeader",
  },
  {
    field: "id",
    headerName: "Id",
    width: 80,
    headerClassName: "tableHeader",
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    headerClassName: "tableHeader",
  },
  {
    field: "mobileNumber",
    headerName: "Mobile NO.",
    width: 130,
    headerClassName: "tableHeader",
  },
  {
    field: "email",
    headerName: "Email Id",
    width: 220,
    headerClassName: "tableHeader",
  },
  {
    field: "wallet",
    headerName: "Wallet",
    width: 130,
    headerClassName: "tableHeader",
  },
];

const rows = [
  {
    srno: 1,
    id:"id1",
    name: "John Doe",
    mobileNumber: "1234567890",
    email: "john.doe@example.com",
    wallet: "$100",
  },
  {
    srno: 2,
    id:"id2",
    name: "Jane Smith",
    mobileNumber: "9876543210",
    email: "jane.smith@example.com",
    wallet: "$50",
  },
  {
    srno: 3,
    id:"id3",
    name: "Robert Johnson",
    mobileNumber: "5551234567",
    email: "robert.johnson@example.com",
    wallet: "$75",
  },
  {
    srno: 4,
    id:"id4",
    name: "Emily Davis",
    mobileNumber: "9998887777",
    email: "emily.davis@example.com",
    wallet: "$200",
  },
  {
    srno: 5,
    id:"id5",
    name: "Michael Wilson",
    mobileNumber: "7774445555",
    email: "michael.wilson@example.com",
    wallet: "$150",
  },
];

const RegisteredUsers = () => {
  const customCellClassName = (params) => {
    return "custom-cell"; // CSS class for custom styling
  };

  return (
    <Fragment>
      <div className="registeredUsersPage page">
        <div>
          <h1 className="pageName">Registered Users</h1>
        </div>

        <p>
          Total Users: <span className="numberText">{rows.length}</span>
        </p>

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
            getCellClassName={customCellClassName}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default RegisteredUsers;
