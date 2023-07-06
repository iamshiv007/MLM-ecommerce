import React, { Fragment } from "react";
import "../../styles/TotalSellCoin.css";
import { DataGrid } from "@mui/x-data-grid";

const columns = [
  {
    field: "id",
    headerName: "Sr. NO.",
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
    field: "date",
    headerName: "Date",
    width: 180,
    headerClassName: "tableHeader",
  },
  {
    field: "coins",
    headerName: "Coins",
    width: 130,
    headerClassName: "tableHeader",
  },
  {
    field: "coinsValue",
    headerName: "Coins Value",
    width: 130,
    headerClassName: "tableHeader",
  },
];

const rows = [
  {
    id: 1,
    name: "John Doe",
    email: "johndoe@example.com",
    date: "2023-07-01",
    coins: 10,
    coinsValue: "$2,300",
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "janesmith@example.com",
    date: "2023-07-02",
    coins: 5,
    coinsValue: "$1000",
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mikejohnson@example.com",
    date: "2023-07-03",
    coins: 15,
    coinsValue: "$1,500",
  },
  {
    id: 4,
    name: "Sarah Williams",
    email: "sarahwilliams@example.com",
    date: "2023-07-04",
    coins: 8,
    coinsValue: "$1800",
  },
  {
    id: 5,
    name: "David Brown",
    email: "davidbrown@example.com",
    date: "2023-07-05",
    coins: 12,
    coinsValue: "$1,200",
  },
];

const TotalSellCoin = () => {
  return (
    <Fragment>
      <div className="totalSellCoinContainer page">
        <h1 className="pageName">Total Sell Coin</h1>

        <p>
          Total Coin Sold: <span className="numberText">50</span>
        </p>
        <p>
          Total Value: <span className="numberText">$7800</span>
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
      <p className="tableHeading">Coin Sell History</p>
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
