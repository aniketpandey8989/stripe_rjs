import React from "react";
import { useLocalStorage } from "react-use";
import { Redirect } from "react-router-dom";
import { removeUserDetailsFromApp } from "../../store/actions";

export default function Layout() {
  const [userDetails, setUserDetails] = useLocalStorage("userDetails", null);

  if (!userDetails || !userDetails.id) {
    return <Redirect to="/login" />;
  }

  const onLogout = () => {
    setUserDetails(null);
    removeUserDetailsFromApp();
  };

  return (
    <div>
      <div>Home</div>
      <button onClick={onLogout} variant="danger">
        Logout
      </button>
    </div>
  );
}
