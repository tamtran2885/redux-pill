import React from "react";
import { Form } from "react-bootstrap";

export default function PublicationDate() {
  return (
    <Form>
      <Form.Label htmlFor="TextInput">Publication Date</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">Last 48 hours</option>
        <option value="2">Last 24 hours</option>
        <option value="3">Last week</option>
      </Form.Select>
    </Form>
  );
}
