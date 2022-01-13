import React from "react";
import { login } from "../../store/actions";

export default function Login(props) {
  const onSubmit = (data) => {
    console.log(data, "form data");
    login(data).then((res) => {
      if (res && res.id) {
        props.history.push("/");
      }
    });
  };

  return (
    <div>
   this is the login page
    </div>
  );
}
