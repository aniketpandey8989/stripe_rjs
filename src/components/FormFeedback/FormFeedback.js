import { ErrorMessage } from "formik";
import React from "react";

export default function FormFeedback({ name, type = "error", className = "" }) {
  return (
    <React.Fragment>
      {type === "error" && (
        <ErrorMessage name={name}>
          {(err) => (
            <div className={className} type="invalid">
              {err}
            </div>
          )}
        </ErrorMessage>
      )}
    </React.Fragment>
  );
}
