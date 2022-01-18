import React from "react";
import { Form } from "react-bootstrap";

export default function OtherFilter() {
  const typeOfFilter = [
    { label: "Pet Allowed", value: "false" },
    { label: "Lift", value: "false" },
    { label: "Air Conditioning", value: "false" },
    { label: "Garden", value: "false" },
    { label: "Terrace", value: "false" },
    { label: "Swimming pool", value: "false" },
  ];
  return (
    <Form>
      <Form.Label htmlFor="TextInput">Other Filters</Form.Label>
      <div key="checkbox" className="mb-3">
        {typeOfFilter.map((option) => (
          <Form.Check
            inline
            label={option.label}
            name="filterType"
            type="checkbox"
            id={option.label}
            key={option.label}
          />
        ))}
      </div>
    </Form>
  );
}
