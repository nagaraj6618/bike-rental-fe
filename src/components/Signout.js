import React, { useEffect, useContext } from 'react';
import { NavLink, useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory
import { UserContext } from '../App';

const Signout = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    fetch('/signout', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        localStorage.removeItem('User');
        navigate('/signin', { replace: true }); // Use navigate to change the route
        window.location.reload();
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  });

  return (
    <>
      <h1>Log Out</h1>
    </>
  );
};

export default Signout;
