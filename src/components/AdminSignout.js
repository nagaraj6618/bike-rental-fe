import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate instead of useHistory

const AdminSignout = () => {
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    fetch('/adminsignout', {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    })
      .then((res) => {
        localStorage.removeItem('Admin');
        navigate('/signin', { replace: true }); // Use navigate to change the route
        if (res.status !== 200) {
          const error = new Error(res.error);
          throw error;
        }
      })
      .catch((error) => {
        console.log(error);
      });
  }, [navigate]); // Include navigate as a dependency in the useEffect

  return (
    <>
      <h1>Log Out</h1>
    </>
  );
};

export default AdminSignout;
