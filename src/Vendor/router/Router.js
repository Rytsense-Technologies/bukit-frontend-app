import React from 'react'
import { Route, Routes } from 'react-router-dom'
import EventList from '../pages/events/EventList'
import Login from '../pages/auth/Login'
import DashboardLayout from '../components/DashboardLayout'
import Register from '../pages/auth/Register'
import CreateEvent from '../pages/events/CreateEvent'
import OrderManagement from '../pages/orders/OrderManagement'
import MainPage from '../pages/MainPage'
import EventDashboard from '../components/events/dashboard/EventDashboard'
import OrderForm from '../pages/events/order-options/OrderForm'
import OrderConfirmation from '../pages/events/order-options/OrderConfirmation'
import WaitlistSettings from '../pages/events/order-options/WaitlistSettings'
import ManageAttendeeOrder from '../pages/events/manage-attendee/ManageAttendeeOrder'

const Router = () => {
  return (
    <Routes>
        <Route path='/events/list' element={<DashboardLayout><EventList/></DashboardLayout>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/create-event' element={<DashboardLayout><CreateEvent/></DashboardLayout>}/>
        <Route path='/orders' element={<DashboardLayout><OrderManagement/></DashboardLayout>}/>
        <Route path='/vendor' element={<DashboardLayout><MainPage/></DashboardLayout>}/>
        <Route path='/event-dashboard' element={<DashboardLayout><EventDashboard/></DashboardLayout>}/>
        <Route path='/order-form' element={<DashboardLayout><OrderForm/></DashboardLayout>}/>
        <Route path='/order-confirmation' element={<DashboardLayout><OrderConfirmation/></DashboardLayout>}/>
        <Route path='/waitlist-settings' element={<DashboardLayout><WaitlistSettings/></DashboardLayout>}/>
        <Route path='/manage-orders' element={<DashboardLayout><ManageAttendeeOrder/></DashboardLayout>}/>
    </Routes>
  )
}

export default Router