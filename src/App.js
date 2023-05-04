import React, { Component } from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Login from './components/login.component'
import SignUp from './components/signup.component'
import CsvUploadFlight from './components/flightdata';
import CsvUploadHotel from './components/hoteldata';
import CsvUploadPackage from './components/packagedata';
import UserTable from './components/usertable';
import FlightTable from './components/flighttable';
import HotelTable from './components/hoteltable';
import PackageTable from './components/packagetable';
import Dashboard from './components/dashboard';


function App() {
  return (
    <Router>
      <div className="App">
        <nav className="navbar navbar-expand-lg navbar-light fixed-top">
          <div className="container">
            <Link className="navbar-brand" to={'/dashboard'}>
              HolidayCentral
            </Link>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-in'}>
                    Login
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/sign-up'}>
                    New User
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/ftable'}>
                    User Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Flight-Csv'}>
                    Flight CSV Upload
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/flighttable'}>
                    Flight Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Hotel-Csv'}>
                    Hotel CSV Upload
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/hoteltable'}>
                    Hotel Details
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/Package-Csv'}>
                    Package CSV Upload
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to={'/packagetable'}>
                    Package Details
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <div className="auth-wrapper">
          <div className="auth-inner">
            <Routes>
              <Route exact path="/dashboard" element={<Dashboard />} />
              <Route path="/sign-in" element={<Login />} />
              <Route path="/sign-up" element={<SignUp />} />
              <Route path="/Flight-Csv" element={<CsvUploadFlight/>} />
              <Route path="/Hotel-Csv" element={<CsvUploadHotel/>} />
              <Route path="/Package-Csv" element={<CsvUploadPackage/>} />
              <Route path="/ftable" element={<UserTable/>} />
              <Route path="/flighttable" element={<FlightTable/>} />
              <Route path="/hoteltable" element={<HotelTable/>} />
              <Route path="/packagetable" element={<PackageTable/>} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  )
}
export default App