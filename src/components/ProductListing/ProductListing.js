import React from "react";
import { connect } from "react-redux";
import { Stack } from "react-bootstrap";

import PropertyCard from "../PropertyCard";

const ProductListing = ({ properties }) => {
  return (
    <div>
      <h1>Product Listing</h1>
      <Stack direction="horizontal">
        <div className="bg-light">
          <strong>Image</strong>
        </div>
        <div className="bg-light ms-auto">
          <strong>Address</strong>
        </div>
        <div className="bg-light ms-auto">
          <strong>Price</strong>
        </div>
        <div className="bg-light ms-auto">
          <strong>Characteristics</strong>
        </div>
        <div className="bg-light ms-auto">
          <strong>Marked As Sold</strong>
        </div>
        <div className="bg-light ms-auto">
          <strong>Remove</strong>
        </div>
      </Stack>
      {properties && (
        <Stack>
          {properties.map((property) => (
            <div
              className="bg-light"
              key={property.id}
              style={{ marginTop: "1rem" }}
            >
              <PropertyCard key={property.id} property={property} />
            </div>
          ))}
        </Stack>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  properties: state.dashboardSearch.properties,
});

const reduxHoc = connect(mapStateToProps);

export default reduxHoc(ProductListing);
