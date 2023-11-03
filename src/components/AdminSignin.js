import React, { useState, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { AdminContext } from '../App';

const AdminSignin = () => {
  const { adminstate, dispatchadmin } = useContext(AdminContext);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  const [adminName, setAdminName] = useState('');
  const [adminPassword, setAdminPassword] = useState('');

  const signinAdmin = async (e) => {
    e.preventDefault();

    const res = await fetch('/signinAdmin', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        adminName,
        adminPassword,
      }),
    });
    const data = await res.json(); // Await the response JSON data

    if (res.status === 400 || !data) {
      window.alert('Invalid Credentials');
    } else {
      dispatchadmin({ type: 'ADMIN', payload: true });
      window.alert('Signin Successful');
      navigate('/dashboard'); // Use navigate to change the route
    }
  };

  return (
    <>
      <header className="header">
        <div id="menu-btn" className="fas fa-bars"></div>
        <a href="#" className="logo">
          <span>Bike</span>Book
        </a>
        <nav className="navbar">
          <NavLink className="nav-link" to="/">
            Home
          </NavLink>
          <a href="/#contact">Contact</a>
        </nav>
        <div id="login-btn">
          <button className="btn">
            <NavLink className="nav-link" to="/signin">
              login
            </NavLink>
          </button>
        </div>
      </header>
      <div className="maincontainer">
        <div className="firstcontainer">
          <div className="titled"></div>
          <div id="adminsignin" className="content">
            <h2>Signin As Admin</h2>
            <form method="POST">
              <div className="user-details">
                <div className="input-box">
                  <span className="details">User Name</span>
                  <input
                    type="text"
                    value={adminName}
                    onChange={(e) => setAdminName(e.target.value)}
                    placeholder="Enter your user name"
                  />
                </div>
                <div className="input-box">
                  <span className="details">Password</span>
                  <input
                    type="password"
                    value={adminPassword}
                    onChange={(e) => setAdminPassword(e.target.value)}
                    placeholder="Enter your password"
                  />
                </div>
              </div>
              <div className="button">
                <input type="submit" value="signin" onClick={signinAdmin} />
              </div>
            </form>
            <button className="btn">
              <NavLink className="nav-link" to="/signin">
                Signin As User
              </NavLink>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminSignin;
