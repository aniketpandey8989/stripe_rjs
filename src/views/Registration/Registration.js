import React from "react";
import { signUp } from "../../store/actions";

export default function Registration(props) {
  const onSubmit = (data) => {
    console.log(data, "form data");
    signUp(data).then((res) => {
      if (res && res.id) {
        props.history.push("/login");
      }
    });
  };
  return (
    <div>
      this is registration page
    </div>
  );
}
