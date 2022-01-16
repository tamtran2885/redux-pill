import React from "react";
import { Stack } from "react-bootstrap";
import { FaRegTrashAlt } from "react-icons/fa";

const PropertyCard = ({ property }) => {
  console.log(property);
  return (
    <div>
      <Stack direction="horizontal">
        <div className="bg-light">
          <img
            src={property.imageUrl}
            alt="property"
            style={{ maxWidth: "100px" }}
          />
        </div>
        <div className="bg-light ms-auto">{property.number}</div>
        <div className="bg-light ms-auto">{property.price}</div>
        <div className="bg-light ms-auto">
          Bed: {property.room} - Bath: {property.bath} - Size: {property.size}
        </div>
        <div className="bg-light ms-auto">{property.status}</div>
        <div className="bg-light ms-auto">
          <FaRegTrashAlt />
        </div>
      </Stack>
    </div>
  );
};

export default PropertyCard;
