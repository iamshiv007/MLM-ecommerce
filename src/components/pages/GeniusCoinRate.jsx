import React, { Fragment, useState } from "react";
import "../../styles/GeniusCoinRate.css";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Modal } from "@mui/material";

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
    field: "date",
    headerName: "Date",
    width: 180,
    headerClassName: "tableHeader",
  },
  {
    field: "time",
    headerName: "Time",
    width: 130,
    headerClassName: "tableHeader",
  },
  {
    field: "difference",
    headerName: "Difference",
    width: 130,
    headerClassName: "tableHeader",
  },
  {
    field: "geniusCoinRate",
    headerName: "Genius Coin Rate",
    width: 130,
    headerClassName: "tableHeader",
  },
];

const rows = [
  {
    srno: 1,
    id: "id1",
    date: "2023-07-01",
    time: "10:00 AM",
    difference: "+5",
    geniusCoinRate: "$18.50",
  },
  {
    srno: 2,
    id: "id2",
    date: "2023-07-02",
    time: "11:30 AM",
    difference: "-2.50",
    geniusCoinRate: "$16",
  },
  {
    srno: 3,
    id: "id3",
    date: "2023-07-03",
    time: "09:45 AM",
    difference: "+2.60",
    geniusCoinRate: "$18.60",
  },
  {
    srno: 4,
    id: "id4",
    date: "2023-07-04",
    time: "03:15 PM",
    difference: "+1",
    geniusCoinRate: "$19.60",
  },
  {
    srno: 5,
    id: "id5",
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
      <div className="geniusCoinRateContainer page">
        <h1 className="pageName">Genius Coin Rate</h1>
        <div>
          <p className="currentRate">
            Current Rate: <span className="numberText"> ${gCoinRate}</span>
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
      <p className="tableHeading">Genius Coin Rate History</p>
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
