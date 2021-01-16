import React from 'react';
import Form from "react-bootstrap/Form";

export const SelectField = ({
                              input,
                              meta: {touched, error},
                              id,
                              children
                            }) => (
  <div className="field">
    <div className="control">
      <div className={
        'select ' + (touched ? (error ? 'is-danger' : 'is-success') : '')
      }>
        <Form.Control as="select"  {...input}  id={id}>
          {children}
        </Form.Control>
        {touched && error && (
       <span style={{ fontSize: "10px", color: "red" }}>{error}</span>
      )}
      </div>
    </div>
  </div>
);