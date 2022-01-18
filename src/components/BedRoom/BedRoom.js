import React from "react";
import { Form } from "react-bootstrap";
import { FaBed } from "react-icons/fa";

export default function BedRoom() {
  const typeOfBedroom = [
    { label: "0/Studio", value: "0" },
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "Three", value: "3" },
    { label: "+3", value: "3" },
  ];
  return (
    <Form>
      <Form.Label htmlFor="TextInput">
        Bedrooms{" "}
        <span>
          <FaBed />
        </span>
      </Form.Label>
      <div key="checkbox" className="mb-3">
        {typeOfBedroom.map((option) => (
          <Form.Check
            inline
            label={option.label}
            name="bedroomType"
            type="checkbox"
            id={option.value}
            key={option.value}
          />
        ))}
      </div>
    </Form>
  );
}
