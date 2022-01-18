import React from "react";
import { Stack } from "react-bootstrap";
import {
  FaRegTrashAlt,
  FaBed,
  FaBath,
  FaStore,
  FaRegFrown,
  FaRegGrinBeam,
} from "react-icons/fa";

const PropertyCard = ({ property }) => {
  // console.log(property);
  return (
    <div>
      <Stack direction="horizontal">
        <div className="bg-light">
          <img
            src={property.imageUrl}
            alt="property"
            style={{ maxWidth: "80px" }}
          />
        </div>
        <div className="bg-light ms-auto">
          <div>
            <strong>
              {property.street} {property.number}
            </strong>
          </div>
          <div>
            {property.province}, {property.country}
          </div>
        </div>
        <div className="bg-light ms-auto">{property.price}</div>
        <div className="bg-light ms-auto">
          <FaBed /> {property.room} - <FaBath />: {property.bath} - <FaStore />:{" "}
          {property.size}
        </div>
        <div className="bg-light ms-auto">
          {property.status === "available" ? <FaRegGrinBeam /> : <FaRegFrown />}
        </div>
        <div className="bg-light ms-auto">
          <FaRegTrashAlt />
        </div>
      </Stack>
    </div>
  );
};

export default PropertyCard;
