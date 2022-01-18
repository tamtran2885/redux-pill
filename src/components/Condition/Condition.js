import React from "react";
import { Form } from "react-bootstrap";

export default function Condition() {
  const typeOfCondition = [
    { label: "New Homes", value: "new" },
    { label: "Good Condition", value: "good" },
    { label: "Needs Renovation", value: "renovation" },
  ];
  return (
    <Form>
      <Form.Label htmlFor="TextInput">Condition</Form.Label>
      <div key="checkbox" className="mb-3">
        {typeOfCondition.map((option) => (
          <Form.Check
            inline
            label={option.label}
            name="conditionType"
            type="checkbox"
            id={option.value}
            key={option.value}
          />
        ))}
      </div>
    </Form>
  );
}
