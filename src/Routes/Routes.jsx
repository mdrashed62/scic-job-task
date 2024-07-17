import {
    createBrowserRouter,
  } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home";
import Dashboard from "../Dashboard/Dashboard";
import BkashUi from "../Dashboard/BkashUi";
import SendMoney from "../Pages/UserComponents/SendMoney";


  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <Dashboard></Dashboard>,
         children: [
            {
              path: 'bkashUi',
              element: <BkashUi></BkashUi>
            },
            {
              path: 'sendMoney',
              element: <SendMoney></SendMoney>
            }
         ]
    }
  ]);