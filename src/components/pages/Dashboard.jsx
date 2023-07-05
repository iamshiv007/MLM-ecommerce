import React, { Fragment } from "react";
import "../../styles/Dashboard.css";
import SimpleLineChart from "../charts/SimpleLineChart";
import MyBarChart from "../charts/BarChart";
import MyPieChart from "../charts/PieChart";

const Dashboard = () => {
  return (
    <Fragment>
      <div className="dashboard">
        <h1 style={{ marginBottom: "12px", color: "white" }}>Dashboard</h1>
        <div className="summary">
          <div className="card">
            <h4>App Users</h4>
            <p>
              19000 <span className="negative">-18%</span>
            </p>
          </div>
          <div className="card">
            <h4>Genius Coin Rate</h4>
            <p>
              $10 <span className="positive">+4%</span>{" "}
            </p>
          </div>
          <div className="card">
            <h4>Total Sell Coin</h4>
            <p>
              5000 <span className="negative">-7%</span>
            </p>
          </div>
          <div className="card">
            <h4>Total Registered Users</h4>
            <p>
              5000 <span className="positive">+12%</span>
            </p>
          </div>
        </div>

        <div className="chartsContainer">
          <div>
            <SimpleLineChart />
          </div>

          <div>
            <MyBarChart />
          </div>

          <div>
            <MyPieChart />
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Dashboard;
