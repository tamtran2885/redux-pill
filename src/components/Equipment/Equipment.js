import React from "react";
import { Form } from "react-bootstrap";

export default function Equipment() {
  return (
    <Form>
      <Form.Label htmlFor="TextInput">Equipment</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="1">Indifferent</option>
        <option value="2">Different</option>
        <option value="3">Normal</option>
      </Form.Select>
    </Form>
  );
}
