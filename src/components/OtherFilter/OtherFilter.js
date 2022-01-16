import React from "react";
import { Form } from "react-bootstrap";

export default function OtherFilter() {
  return (
    <Form>
      <Form.Label htmlFor="TextInput">Other Filters</Form.Label>
      <div key="checkbox" className="mb-3">
        <Form.Check
          inline
          label="Pet Allowed"
          name="otherFilter"
          type="checkbox"
          id="otherFilter"
        />
        <Form.Check
          inline
          label="Lift"
          name="otherFilter"
          type="checkbox"
          id="otherFilter"
        />
        <Form.Check
          inline
          label="Garden"
          type="checkbox"
          id="otherFilter"
          name="otherFilter"
        />
        <Form.Check
          inline
          label="Air Conditioning"
          name="otherFilter"
          type="checkbox"
          id="otherFilter"
        />
        <Form.Check
          inline
          label="Swimming Pool"
          name="otherFilter"
          type="checkbox"
          id="otherFilter"
        />
        <Form.Check
          inline
          label="Terrace"
          type="checkbox"
          id="otherFilter"
          name="otherFilter"
        />
      </div>
    </Form>
  );
}
