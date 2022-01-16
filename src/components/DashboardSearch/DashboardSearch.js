import React from "react";
import { connect } from "react-redux";
import { Form, FormControl, Button } from "react-bootstrap";
import {
  searchProperty,
  fetchProperties,
} from "../../redux/dashboardSearch/action";

const DashboardSearch = () => {
  const onSubmit = (e) => {
    e.preventDefault();
    console.log("onSubmit");
  };

  return (
    <Form className="d-flex" onSubmit={onSubmit}>
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => searchProperty(e.target.value)}
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  text: state.dashboardSearch.text,
});

export default connect(mapStateToProps, { searchProperty, fetchProperties })(
  DashboardSearch
);
