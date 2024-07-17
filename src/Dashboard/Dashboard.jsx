// import { useContext, useEffect, useState } from "react";
// import { NavLink, Outlet } from "react-router-dom";
// import { AuthContext } from "../Providers/AuthProviders";

import { useState } from "react";
import { Link, NavLink, Outlet } from "react-router-dom";

const Dashboard = () => {
  // const { user } = useContext(AuthContext);
  // const [loading, setLoading] = useState(true);
  const [isAdmin, setIsAdmin] = useState(false);
  const [isAgent, setIsAgent] = useState(false);

  // useEffect(() => {
  //   fetch("https://medical-camp-management-server-a12.vercel.app/users")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       const currentUser = data?.find((u) => u.email === user?.email);
  //       setIsAdmin(currentUser?.role === "admin");
  //       setIsAgent(currentUser?.role === "agent");
  //       setLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching users:", error);
  //       setLoading(false);
  //     });
  // }, [user]);

  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="flex flex-col lg:flex-row">
      <div className="w-full lg:w-64 min-h-screen  bg-pink-100">
        <ul className="menu space-y-3 font-bold p-4">
          {isAdmin ? (
            <>
              <li>
                <NavLink to="/dashboard/userManagement">User Management</NavLink>
              </li>
              <li className="mt-2 mb-2">
                <NavLink to="/dashboard/systemMonitoring">System Monitoring</NavLink>
              </li>
            </>
          ) : isAgent ? (
            <>
              <li>
                <NavLink to="/dashboard/transactionManagement">Transaction Management</NavLink>
              </li>
              <li className="mt-2 mb-2">
                <NavLink to="/dashboard/balanceInquiry">Balance Inquiry</NavLink>
              </li>
              <li className="mb-2">
                <NavLink to="/dashboard/transactionHistory">Transaction History</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/dashboard/sendMoney">Send Money</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cashOut">Cash Out</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cashIn">Cash In</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/balanceInquiry">Balance Inquiry</NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/balanceInquiry">Transaction History</NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
        </ul>
      </div>
     <div className="flex-1">
          <Outlet></Outlet>
     </div>
    </div>
  );
};

export default Dashboard;
