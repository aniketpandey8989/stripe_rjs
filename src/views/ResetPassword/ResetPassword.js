import React, { useState } from "react";
import { updatePassword, getEmailByToken } from "../../store/actions";

export default function ResetPassword(props) {
  const [email, setEmail] = useState("");
  const onSubmit = (data) => {
    updatePassword(data).then((res) => {
      if (res && res.id) {
        props.history.push("/login");
      }
    });
  };

  React.useEffect(() => {
    getEmail();
  }, []);

  const getEmail = async () => {
    if (props.match.params.token) {
      const res = await getEmailByToken(props.match.params.token);
      if (res && res.email) {
        setEmail(res.email);
      }
    }
  };

  return (
   <div>
     this is the reset password page
   </div>
  );
}
