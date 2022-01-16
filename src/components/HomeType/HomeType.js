import React from "react";
import { Form } from "react-bootstrap";

export default function HomeType() {
  return (
    <Form>
      <Form.Label htmlFor="TextInput">Type of Home</Form.Label>
      <div key="checkbox" className="mb-3">
        <Form.Check
          inline
          label="Flat/Apartment"
          name="homeType"
          type="checkbox"
          id="homeType"
        />
        <Form.Check
          inline
          label="Duplex"
          name="homeType"
          type="checkbox"
          id="homeType"
        />
        <Form.Check
          inline
          label="House"
          type="checkbox"
          id="homeType"
          name="homeType"
        />
        <Form.Check
          inline
          label="Penthouse"
          type="checkbox"
          id="homeType"
          name="homeType"
        />
      </div>
    </Form>
  );
}
