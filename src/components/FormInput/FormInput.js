import React from "react";

export default function FormInput({
  field,
  meta,
  type = "text",
  showError = false,
  className = "",
  ...restProps
}) {
  return (
    <React.Fragment>
      <div
        style={{
          display: "block",
        }}
        {...field}
        type={type}
        isInvalid={meta.error && meta.touched}
        {...restProps}
      >
      </div>
      {/* <FormFeedback name={field.name} /> */}
    </React.Fragment>
  );
}
