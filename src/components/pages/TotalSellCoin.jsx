import React, { Fragment } from "react";
import "../../styles/TotalSellCoin.css";
import { DataGrid } from "@mui/x-data-grid";

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
    width: 150,
    headerClassName: "tableHeader",
  },
  {
    field: "name",
    headerName: "Name",
    width: 150,
    headerClassName: "tableHeader",
  },
  {
    field: "coins",
    headerName: "Coins",
    width: 130,
    headerClassName: "tableHeader",
  },
  {
    field: "rate",
    headerName: "Rate (₹)",
    width: 100,
    headerClassName: "tableHeader",
  },
  {
    field: "amount",
    headerName: "Amount (₹)",
    width: 130,
    headerClassName: "tableHeader",
  },
  {
    field: "date",
    headerName: "Date",
    width: 150,
    headerClassName: "tableHeader",
  },
  {
    field: "time",
    headerName: "Time",
    width: 130,
    headerClassName: "tableHeader",
  },
  {
    field: "status",
    headerName: "Status",
    width: 130,
    headerClassName: "tableHeader",
  },
];

const rows = [
  {
    srno: 1,
    id: "id1",
    name: "John Doe",
    coins: 100,
    rate: 3.5,
    amount: 350,
    date: "2023-07-01",
    time: "12:14 pm",
    status: "success",
  },
  {
    srno: 2,
    id: "id2",
    name: "Jane Smith",
    coins: 50,
    rate: 4.5,
    amount: 225,
    date: "2023-07-02",
    time: "09:00 am",
    status: "success",
  },
  {
    srno: 3,
    id: "id3",
    name: "Mike Johnson",
    coins: 150,
    rate: 1.5,
    amount: 225,
    date: "2023-07-03",
    time: "01:25 pm",
    status: "pending",
  },
  {
    srno: 4,
    id: "id4",
    name: "Sarah Williams",
    coins: 80,
    rate: 2.4,
    amount: 192,
    date: "2023-07-04",
    time: "02:04 am",
    status: "pending",
  },
  {
    srno: 5,
    id: "id5",
    name: "David Brown",
    coins: 120,
    rate: 9.9,
    amount: 1188,
    date: "2023-07-05",
    time: "12:30 pm",
    status: "pending",
  },
];

const TotalSellCoin = () => {
  const totalCoinsSold = rows.reduce((sum, row) => sum + row.coins, 0);
  const totalAmount = rows.reduce((sum, row) => sum + row.amount, 0);

  return (
    <Fragment>
      <div className="totalSellCoinContainer page">
        <h1 className="pageName">Total Sell Coin</h1>

        <p>
          Total Coin Sold: <span className="numberText">{totalCoinsSold}</span>
        </p>
        <p>
          Total amount: <span className="numberText">{totalAmount}</span>
        </p>

        <div className="sellHistory">
          <TotalSellHisory />
        </div>
      </div>
    </Fragment>
  );
};

export default TotalSellCoin;

const TotalSellHisory = () => {
  const customCellClassName = (params) => {
    return "custom-cell"; // CSS class for custom styling
  };

  return (
    <>
      <p className="tableHeading">Sell Coins History</p>
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
