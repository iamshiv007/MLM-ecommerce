import { Box, Button, Modal } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import React, { Fragment, useState } from "react";

const rows = [
  {
    srno: 1,
    id: "id1",
    name: "John Doe",
    email: "johndoe@example.com",
    coins: 10,
  },
  {
    srno: 2,
    id: "id2",
    name: "Jane Smith",
    email: "janesmith@example.com",
    coins: 5,
  },
  {
    srno: 3,
    id: "id3",
    name: "Mike Johnson",
    email: "mikejohnson@example.com",
    coins: 15,
  },
  {
    srno: 4,
    id: "id4",
    name: "Sarah Williams",
    email: "sarahwilliams@example.com",
    coins: 8,
  },
  {
    srno: 5,
    id: "id5",
    name: "David Brown",
    email: "davidbrown@example.com",
    coins: 12,
  },
];

const UserCoins = () => {
  const [id, setId] = useState();
  const [userCoins, setUserCoins] = useState("");

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleUserId = (id) => {
    setId(id);
    setUserCoins(rows.filter((user) => user.id === id)[0].coins);
  };

  const columns = [
    {
      field: "srno",
      headerName: "Sr. NO.",
      width: 120,
      headerClassName: "tableHeader",
    },
    {
      field: "id",
      headerName: "Id",
      width: 120,
      headerClassName: "tableHeader",
    },
    {
      field: "name",
      headerName: "Name",
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
      field: "coins",
      headerName: "Coins",
      width: 130,
      headerClassName: "tableHeader",
    },
    {
      field: "edit",
      headerName: "Edit",
      width: 130,
      headerClassName: "tableHeader",
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            handleOpen();
            handleUserId(params.id);
          }}
        >
          Edit Coins
        </Button>
      ),
    },
  ];

  return (
    <Fragment>
      <div className="userCoinContainer page">
        <h1 className="pageName">User Coins</h1>

        <div>
          <UserCoinTable columns={columns} />
        </div>

        <div>
          <EditUserCoinsModal
            rows={rows}
            id={id}
            handleClose={handleClose}
            open={open}
            userCoins={userCoins}
            setUserCoins={setUserCoins}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default UserCoins;

const UserCoinTable = ({ columns }) => {
  const customCellClassName = (params) => {
    return "custom-cell"; // CSS class for custom styling
  };

  return (
    <>
      {/* <p className="tableHeading">Genius Coin Rate History</p> */}
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
    </>
  );
};

const EditUserCoinsModal = ({
  handleClose,
  open,
  id,
  rows,
  setUserCoins,
  userCoins,
}) => {
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
    <>
      <div className="editUserCoinsModal">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2
              style={{
                marginBottom: "20px",
                textAlign: "center",
              }}
            >
              Edit User Coins
            </h2>

            <input
              className="editRateInput"
              onChange={(e) => setUserCoins(e.target.value)}
              type="Number"
              value={userCoins}
            />

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
                Save
              </Button>
            </div>
          </Box>
        </Modal>
      </div>
    </>
  );
};
