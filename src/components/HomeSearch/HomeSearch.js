import React from "react";
import { connect, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { Form, FormControl } from "react-bootstrap";
import { searchProperty, fetchProperty } from "../../redux/homeSearch/action";

const HomeSearch = ({ handleChange, text }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(fetchProperty(text));
    goToDashboard();
  };

  const goToDashboard = () => {
    navigate("./dashboard");
  };

  return (
    <Form className="d-flex" onSubmit={handleSubmit}>
      <FormControl
        type="search"
        placeholder="Search"
        className="me-2"
        aria-label="Search"
        onChange={(e) => {
          handleChange(e.target.value);
        }}
      />
    </Form>
  );
};

const mapStateToProps = (state) => ({
  text: state.homeSearch.text,
});

const mapDispatchToProps = (dispatch) => ({
  handleChange: (text) => dispatch(searchProperty(text)),
});

const reduxHoc = connect(mapStateToProps, mapDispatchToProps);

export default reduxHoc(HomeSearch);
