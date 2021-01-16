import React from "react";
import Form from "react-bootstrap/Form";

export const input = ({
  input,
  type,
  placeholder,
  id,
  meta: { touched, error },
  ...rest
}) => {

  return (
	 <div>
      <Form.Control {...input} type={type} placeholder={placeholder} id={id} />
      {touched && error && (
       <span style={{ fontSize: "10px", color: "red" }}>{error}</span>
      )}
    </div>
  );
};