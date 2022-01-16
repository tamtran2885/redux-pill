import React from "react";
import { connect, useDispatch } from "react-redux";
import { Form, FormControl } from "react-bootstrap";
import {
  searchProperty,
  fetchProperty,
} from "../../redux/dashboardSearch/action";

const DashboardSearch = ({ handleChange, text }) => {
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProperty(text));
  };

  return (
    <div>
      <Form className="d-flex" onSubmit={handleSubmit}>
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
          onChange={(e) => handleChange(e.target.value)}
        />
        {/* <Button type="submit" variant="outline-success">
          Search
        </Button> */}
      </Form>
    </div>
  );
};

const mapStateToProps = (state) => ({
  text: state.dashboardSearch.text,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (text) => dispatch(searchProperty(text)),
});

const reduxHoc = connect(mapStateToProps, mapDispatchToProps);

export default reduxHoc(DashboardSearch);
