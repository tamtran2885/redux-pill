import React from "react";
import { connect, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { fetchProperty } from "../../redux/homeSearch/action";

const Equipment = ({ text }) => {
  const dispatch = useDispatch();
  const options = [
    { label: "Open this select menu" },
    { label: "Indifferent", value: "indifferent" },
    { label: "Different", value: "different" },
  ];

  const handleChange = (e) => {
    const equipment = e.target.value;
    dispatch(fetchProperty(text, equipment));
  };

  return (
    <Form>
      <Form.Label htmlFor="TextInput">Equipment</Form.Label>
      <Form.Select aria-label="Default select example" onChange={handleChange}>
        {options.map((option) => (
          <option value={option.value} key={option.label}>
            {option.label}
          </option>
        ))}
      </Form.Select>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  text: state.homeSearch.text,
});

const reduxHoc = connect(mapStateToProps);

export default reduxHoc(Equipment);
