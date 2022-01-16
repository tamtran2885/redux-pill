import React from "react";
import { Form } from "react-bootstrap";
import { FaBath } from "react-icons/fa";

export default function BathRoom() {
  return (
    <Form>
      <Form.Label htmlFor="TextInput">
        Bathrooms{" "}
        <span>
          <FaBath />
        </span>
      </Form.Label>

      <div key="checkbox" className="mb-3">
        <Form.Check
          inline
          label="One"
          name="bathroom"
          type="checkbox"
          id="bathroom"
        />
        <Form.Check
          inline
          label="Two"
          name="bathroom"
          type="checkbox"
          id="bathroom"
        />
        <Form.Check
          inline
          label="More than 2+"
          type="checkbox"
          id="bathroom"
          name="bathroom"
        />
      </div>
    </Form>
  );
}
