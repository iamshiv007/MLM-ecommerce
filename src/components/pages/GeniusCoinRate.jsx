import React, { Fragment, useState } from "react";
import "../../styles/GeniusCoinRate.css";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Modal } from "@mui/material";

const columns = [
  {
    field: "id",
    headerName: "Sr. NO.",
    width: 120,
    headerClassName: "usersHeader",
  },
  {
    field: "date",
    headerName: "Date",
    width: 180,
    headerClassName: "usersHeader",
  },
  {
    field: "time",
    headerName: "Time",
    width: 130,
    headerClassName: "usersHeader",
  },
  {
    field: "difference",
    headerName: "Difference",
    width: 130,
    headerClassName: "usersHeader",
  },
  {
    field: "geniusCoinRate",
    headerName: "Genius Coin Rate",
    width: 130,
    headerClassName: "usersHeader",
  },
];

const rows = [
  {
    id: 1,
    date: "2023-07-01",
    time: "10:00 AM",
    difference: "+5",
    geniusCoinRate: "$18.50",
  },
  {
    id: 2,
    date: "2023-07-02",
    time: "11:30 AM",
    difference: "-2.50",
    geniusCoinRate: "$16",
  },
  {
    id: 3,
    date: "2023-07-03",
    time: "09:45 AM",
    difference: "+2.60",
    geniusCoinRate: "$18.60",
  },
  {
    id: 4,
    date: "2023-07-04",
    time: "03:15 PM",
    difference: "+1",
    geniusCoinRate: "$19.60",
  },
  {
    id: 5,
    date: "2023-07-05",
    time: "08:20 AM",
    difference: "-10.90",
    geniusCoinRate: "$8.60",
  },
];

const GeniusCoinRate = () => {
  const [gCoinRate, setGCoinRate] = useState(8.6);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Fragment>
      <div className="geniusCoinRateContainer">
        <h1 style={{ marginBottom: "20px", color: "white" }}>
          Genius Coin Rate
        </h1>
        <div>
          <p className="currentRate">
            Current Rate: <span> ${gCoinRate}</span>
          </p>

          <Button onClick={handleOpen} variant="contained" color="primary">
            Edit Rate
          </Button>
        </div>

        <div className="rateHistory">
          <RateHistoryTable />
        </div>

        <div>
          <EditRateModal
            handleClose={handleClose}
            open={open}
            gCoinRate={gCoinRate}
            setGCoinRate={setGCoinRate}
          />
        </div>
      </div>
    </Fragment>
  );
};

export default GeniusCoinRate;

const RateHistoryTable = () => {
  const customCellClassName = (params) => {
    return "custom-cell"; // CSS class for custom styling
  };

  return (
    <>
      <p className="">Genius Coin Rate History</p>
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

const EditRateModal = ({ handleClose, open, setGCoinRate, gCoinRate }) => {
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
      <div className="editRateModal">
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box sx={style}>
            <h2 style={{ marginBottom: "20px", textAlign: "center" }}>
              Edit Genius Coin Rate
            </h2>

            <input
              className="editRateInput"
              onChange={(e) => setGCoinRate(e.target.value)}
              type="Number"
              value={gCoinRate}
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
