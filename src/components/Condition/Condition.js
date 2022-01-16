import React from "react";
import { Form } from "react-bootstrap";

export default function Condition() {
  return (
    <Form>
      <Form.Label htmlFor="TextInput">Condition</Form.Label>
      <div key="checkbox" className="mb-3">
        <Form.Check
          inline
          label="New homes"
          name="condition"
          type="checkbox"
          id="condition"
        />
        <Form.Check
          inline
          label="Good Condition"
          name="condition"
          type="checkbox"
          id="condition"
        />
        <Form.Check
          inline
          label="Needs Renovation"
          type="checkbox"
          id="condition"
          name="condition"
        />
      </div>
    </Form>
  );
}
