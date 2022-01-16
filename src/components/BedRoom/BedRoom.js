import React from "react";
import { Form } from "react-bootstrap";
import { FaBed } from "react-icons/fa";

export default function BedRoom() {
  return (
    <Form>
      <Form.Label htmlFor="TextInput">
        Bedrooms{" "}
        <span>
          <FaBed />
        </span>
      </Form.Label>
      <div key="checkbox" className="mb-3">
        <Form.Check
          inline
          label="0/Studio"
          name="bedroom"
          type="checkbox"
          id="bedroom"
        />
        <Form.Check
          inline
          label="One"
          name="bedroom"
          type="checkbox"
          id="bedroom"
        />
        <Form.Check
          inline
          label="Two"
          type="checkbox"
          id="bedroom"
          name="bedroom"
        />
        <Form.Check
          inline
          label="Three"
          name="bedroom"
          type="checkbox"
          id="bedroom"
        />
        <Form.Check
          inline
          label="More than 3+"
          name="otherFilter"
          type="checkbox"
          id="otherFilter"
        />
      </div>
    </Form>
  );
}
