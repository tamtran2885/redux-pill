import React from "react";
import { Form } from "react-bootstrap";

export default function PublicationDate() {
  return (
    <Form.Group>
      <Form.Label htmlFor="TextInput">Publication Date</Form.Label>
      <Form.Select
        aria-label="Default select example"
        onChange={(e) => console.log(e.target.value)}
      >
        <option className="d-none">Choose option</option>
        <option value="1">Last 24 hours</option>
        <option value="2">Last 48 hours </option>
        <option value="3">Last 72 hours</option>
      </Form.Select>
    </Form.Group>
  );
}
