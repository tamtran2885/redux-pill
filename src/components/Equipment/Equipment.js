import React from "react";
import { connect, useDispatch } from "react-redux";
import { Form } from "react-bootstrap";
import { fetchProperty, changeEquipment } from "../../redux/homeSearch/action";

const Equipment = ({
  text,
  homeList,
  conditionList,
  isCheckedPetAllowed,
  isCheckedLift,
  isCheckedGarden,
  isCheckedAirConditioning,
  isCheckedSwimmingPool,
  isCheckedTerrace,
  bathRoomList,
  bedRoomList,
}) => {
  const dispatch = useDispatch();

  const options = [
    { label: "Indifferent", value: "indifferent" },
    { label: "Different", value: "different" },
  ];

  const handleChange = (e) => {
    const equipment = e.target.value;
    dispatch(
      fetchProperty(
        text,
        equipment,
        homeList,
        isCheckedPetAllowed,
        isCheckedLift,
        isCheckedGarden,
        isCheckedAirConditioning,
        isCheckedSwimmingPool,
        isCheckedTerrace,
        bathRoomList,
        conditionList,
        bedRoomList
      )
    );
    dispatch(changeEquipment(equipment));
  };

  return (
    <Form>
      <Form.Label htmlFor="TextInput">Equipment</Form.Label>
      <Form.Select aria-label="Default select example" onChange={handleChange}>
        <option>Select options</option>
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
  homeList: state.homeSearch.homeType,
  conditionList: state.homeSearch.condition,
  isCheckedPetAllowed: state.homeSearch.pet_allowed,
  isCheckedLift: state.homeSearch.lift,
  isCheckedGarden: state.homeSearch.garden,
  isCheckedAirConditioning: state.homeSearch.air_conditioning,
  isCheckedSwimmingPool: state.homeSearch.swimming_pool,
  isCheckedTerrace: state.homeSearch.terrace,
  bathRoomList: state.homeSearch.bathroom,
  bedRoomList: state.homeSearch.bedroom,
});

const reduxHoc = connect(mapStateToProps);

export default reduxHoc(Equipment);
