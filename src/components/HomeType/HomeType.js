import React from "react";
import { Form } from "react-bootstrap";

export default function HomeType() {
  const typeOfHouse = [
    { label: "Flat/Apartment", value: "flat/apartment" },
    { label: "Duplex", value: "duplex" },
    { label: "House", value: "house" },
    { label: "Penthouse", value: "penthouse" },
  ];

  return (
    <Form>
      <Form.Label htmlFor="TextInput">Type of Home</Form.Label>
      <div key="checkbox" className="mb-3">
        {typeOfHouse.map((option) => (
          <Form.Check
            inline
            label={option.label}
            name="homeType"
            type="checkbox"
            id={option.value}
            key={option.value}
          />
        ))}
      </div>
    </Form>
  );
}
