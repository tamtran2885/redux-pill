import React from "react";
import { Form } from "react-bootstrap";
import { FaBath } from "react-icons/fa";

export default function BathRoom() {
  const typeOfBathRoom = [
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "+2", value: "house" },
  ];

  return (
    <Form>
      <Form.Label htmlFor="TextInput">
        Bathrooms{" "}
        <span>
          <FaBath />
        </span>
      </Form.Label>

      <div key="checkbox" className="mb-3">
        {typeOfBathRoom.map((option) => (
          <Form.Check
            inline
            label={option.label}
            name="bathRoomType"
            type="checkbox"
            id={option.value}
            key={option.value}
          />
        ))}
      </div>
    </Form>
  );
}
