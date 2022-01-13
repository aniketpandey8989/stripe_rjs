import React from "react";
import { useLocalStorage } from "react-use";
import { Redirect } from "react-router-dom";
import { removeUserDetailsFromApp } from "../../store/actions";
import Payment from "../../components/payment";

export default function Layout() {
  const [userDetails, setUserDetails] = useLocalStorage("userDetails", null);

  // if (!userDetails || !userDetails.id) {
  //   return <Redirect to="/login" />;
  // }

  const onLogout = () => {
    setUserDetails(null);
    removeUserDetailsFromApp();
  };

  return (
    <div>
      {/* <Payment/> */}
      <div>home</div>
      <button onClick={onLogout} variant="danger">
        Logout
      </button>
    </div>
  );
}
