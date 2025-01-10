import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './index.css';

import Home from './User/components/Home';
import Events from './User/components/Events';
import Plays from './User/components/Plays';
import Sports from './User/components/Sports';
import Activities from './User/components/Activities';
import Booking from './User/components/Booking';

import { LabelProvider } from './User/components/LabelContext';
import EventDetail from './User/components/DetailComponents/EventDetail';
import { eventsData } from './User/Databases/EventData';

import EventList from './Vendor/pages/events/EventList'
import Login from './Vendor/pages/auth/Login'
import DashboardLayout from './Vendor/components/DashboardLayout'
import Register from './Vendor/pages/auth/Register'
import CreateEvent from './Vendor/pages/events/CreateEvent'
import OrderManagement from './Vendor/pages/orders/OrderManagement'
import MainPage from './Vendor/pages/MainPage'
import EventDashboard from './Vendor/components/events/dashboard/EventDashboard'
import OrderForm from './Vendor/pages/events/order-options/OrderForm'
import OrderConfirmation from './Vendor/pages/events/order-options/OrderConfirmation'
import WaitlistSettings from './Vendor/pages/events/order-options/WaitlistSettings'
import ManageAttendeeOrder from './Vendor/pages/events/manage-attendee/ManageAttendeeOrder'


// const router = createBrowserRouter([
//   { path: '/', element: <Home /> },
//   { path: '/events', element: <Events /> },
//   { path: '/plays', element: <Plays /> },
//   { path: '/sports', element: <Sports /> },
//   { path: '/activities', element: <Activities /> },
//   { path: '/event/:id', element: <EventDetail events={eventsData} /> },
// ]);

const router = createBrowserRouter([
  { path: '/', element: <Home /> },
  { path: '/events', element: <Events /> },
  { path: '/plays', element: <Plays /> },
  { path: '/sports', element: <Sports /> },
  { path: '/activities', element: <Activities /> },
  { path: '/event/:id', element: <EventDetail events={eventsData} /> },
  { path: '/booking/:id', element: <Booking events={eventsData} /> },

  { path: '/events/list', element: <DashboardLayout><EventList /></DashboardLayout> },
  { path: '/login', element: <Login /> },
  { path: '/register', element: <Register /> },
  { path: '/create-event', element: <DashboardLayout><CreateEvent /></DashboardLayout> },
  { path: '/orders', element: <DashboardLayout><OrderManagement /></DashboardLayout> },
  { path: '/vendor', element: <DashboardLayout><MainPage /></DashboardLayout> },
  { path: '/event-dashboard', element: <DashboardLayout><EventDashboard /></DashboardLayout> },
  { path: '/order-form', element: <DashboardLayout><OrderForm /></DashboardLayout> },
  { path: '/order-confirmation', element: <DashboardLayout><OrderConfirmation /></DashboardLayout> },
  { path: '/waitlist-settings', element: <DashboardLayout><WaitlistSettings /></DashboardLayout> },
  { path: '/manage-orders', element: <DashboardLayout><ManageAttendeeOrder /></DashboardLayout> },
]);


function App() {
  return (
    <div className="App">
      <LabelProvider>
        <RouterProvider router={router} />
      </LabelProvider>
    </div>
  );
}

export default App;
