import React from "react";
import { FaRegQuestionCircle } from "react-icons/fa";
import { RiExternalLinkLine } from "react-icons/ri";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const OrderManagement = () => {
  return (
    <div className="min-h-screen  p-6">
      <div className="px-20 py-10 mx-auto">
        <h1 className="text-5xl font-bold text-white">Order Management</h1>
        <p className="mt-2 text-lg text-gray-300">
          Manage all orders, including editing buyer info, resending tickets,
          and processing refunds. To download a list of orders, view the{" "}
          <a href="/orders-report" className="text-indigo-600 hover:underline">
            Orders report
          </a>
          .
        </p>

        <div className="mt-6 flex flex-col space-y-4 md:flex-row md:space-y-0 md:space-x-4">
          <form className="">
            <label
              htmlFor="default-search"
              className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  className="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-96 p-4 ps-10 text-sm text-gray-900 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search order number, email, or name"
                required
              />
            </div>
          </form>

          <div>
            <Box sx={{ minWidth: 220 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="select-label"
                  sx={{
                    color: "white",
                    "&.Mui-focused": {
                      color: "white", 
                    },
                    backgroundColor: "black", 
                    padding: "0 4px", 
                  }}
                >
                  Search by
                </InputLabel>

                <Select
                  labelId="select-label"
                  id="select"
                  value=""
                  label="Search by"
                  sx={{
                    color: "white",
                    border: "1px solid white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  }}
                >
                  <MenuItem value="Buyer">Buyer</MenuItem>
                  <MenuItem value="Order">Order</MenuItem>
                  <MenuItem value="Status">Status</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
          <div>
            <Box sx={{ minWidth: 280 }}>
              <FormControl fullWidth>
                <InputLabel
                  id="date-range-label"
                  sx={{
                    color: "white",
                    "&.Mui-focused": {
                      color: "white", 
                    },
                    backgroundColor: "black", 
                    padding: "0 4px", 
                  }}
                >
                  Date range
                </InputLabel>
                <Select
                  labelId="date-range-label"
                  id="date-range"
                  value=""
                  label="Date range"
                  sx={{
                    color: "white",
                    border: "1px solid white",
                    "& .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "&:hover .MuiOutlinedInput-notchedOutline": {
                      borderColor: "white",
                    },
                    "& .MuiSvgIcon-root": {
                      color: "white",
                    },
                  }}
                >
                  <MenuItem value="Past 7 days">Past 7 days</MenuItem>
                  <MenuItem value="Past 1 month">Past 1 month</MenuItem>
                  <MenuItem value="Past 3 months">Past 3 months</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </div>
        </div>

        <div className="mt-10 text-center">
          <div className="flex justify-center items-center h-48">
            <div className="flex flex-col items-center">
              <div className="text-gray-400 text-6xl">🧾</div>
              <p className="text-gray-300 text-xl font-bold mt-4">
                No orders to show
              </p>
            </div>
          </div>
        </div>
        <div className="mt-4 bg-[#101012] p-2 max-w-md rounded-full ">
          <a
            href="/learn-more"
            className="text-indigo-300 hover:underline flex items-center space-x-1"
          >
            <FaRegQuestionCircle />
            <span>Learn more about</span>
            <span className="font-bold">managing orders</span>
            <RiExternalLinkLine />
          </a>
        </div>
      </div>
    </div>
  );
};

export default OrderManagement;
