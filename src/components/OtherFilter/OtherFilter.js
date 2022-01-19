import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { connect, useDispatch } from "react-redux";
import {
  fetchProperty,
  changeTerrace,
  changeSwimmingPool,
  changePetAllowed,
  changeLift,
  changeAirConditioning,
  changeGarden,
} from "../../redux/homeSearch/action";

const OtherFilter = ({
  text,
  equipment,
  homeList,
  conditionList,
  bathRoomList,
  bedRoomList,
}) => {
  const dispatch = useDispatch();

  const [isCheckedTerrace, setIsCheckedTerrace] = useState(false);
  const [isCheckedSwimmingPool, setIsCheckedSwimmingPool] = useState(false);
  const [isCheckedPetAllowed, setIsCheckedPetAllowed] = useState(false);
  const [isCheckedAirConditioning, setIsCheckedAirConditioning] =
    useState(false);
  const [isCheckedGarden, setIsCheckedGarden] = useState(false);
  const [isCheckedLift, setIsCheckedLift] = useState(false);

  const handleOnChangeTerrace = () => {
    setIsCheckedTerrace(!isCheckedTerrace);
  };

  const handleOnChangeSwimmingPool = () => {
    setIsCheckedSwimmingPool(!isCheckedSwimmingPool);
  };

  const handleOnChangePetAllowed = () => {
    setIsCheckedPetAllowed(!isCheckedPetAllowed);
  };

  const handleOnChangeAirConditioning = () => {
    setIsCheckedAirConditioning(!isCheckedAirConditioning);
  };

  const handleOnChangeLift = () => {
    setIsCheckedLift(!isCheckedLift);
  };

  const handleOnChangeGarden = () => {
    setIsCheckedGarden(!isCheckedGarden);
  };

  useEffect(() => {
    dispatch(
      fetchProperty(
        text,
        equipment,
        homeList,
        conditionList,
        bathRoomList,
        bedRoomList,
        isCheckedTerrace,
        isCheckedPetAllowed,
        isCheckedSwimmingPool,
        isCheckedLift,
        isCheckedAirConditioning,
        isCheckedGarden
      )
    );
    dispatch(changeTerrace(isCheckedTerrace));
    dispatch(changeSwimmingPool(isCheckedSwimmingPool));
    dispatch(changePetAllowed(isCheckedPetAllowed));
    dispatch(changeLift(isCheckedLift));
    dispatch(changeAirConditioning(isCheckedAirConditioning));
    dispatch(changeGarden(isCheckedGarden));
  }, [
    homeList,
    dispatch,
    equipment,
    text,
    conditionList,
    bathRoomList,
    bedRoomList,
    isCheckedTerrace,
    isCheckedPetAllowed,
    isCheckedSwimmingPool,
    isCheckedLift,
    isCheckedAirConditioning,
    isCheckedGarden,
  ]);

  return (
    <Form>
      <Form.Label htmlFor="TextInput">Other Filters</Form.Label>
      <div key="checkbox" className="mb-3">
        <Form.Check
          inline
          label="Terrace"
          name="otherFilter"
          type="checkbox"
          checked={isCheckedTerrace}
          onChange={handleOnChangeTerrace}
        />
        <Form.Check
          inline
          label="Swimming pool"
          name="otherFilter"
          type="checkbox"
          checked={isCheckedSwimmingPool}
          onChange={handleOnChangeSwimmingPool}
        />
        <Form.Check
          inline
          label="Pet Allowed"
          name="otherFilter"
          type="checkbox"
          checked={isCheckedPetAllowed}
          onChange={handleOnChangePetAllowed}
        />
        <Form.Check
          inline
          label="Lift"
          name="otherFilter"
          type="checkbox"
          checked={isCheckedLift}
          onChange={handleOnChangeLift}
        />
        <Form.Check
          inline
          label="Air Conditioning"
          name="otherFilter"
          type="checkbox"
          checked={isCheckedAirConditioning}
          onChange={handleOnChangeAirConditioning}
        />
        <Form.Check
          inline
          label="Garden"
          name="otherFilter"
          type="checkbox"
          checked={isCheckedGarden}
          onChange={handleOnChangeGarden}
        />
      </div>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  text: state.homeSearch.text,
  equipment: state.homeSearch.text.equipment,
  conditionList: state.homeSearch.condition,
  homeList: state.homeSearch.homeType,
  bathRoomList: state.homeSearch.bathRoom,
  bedRoomList: state.homeSearch.bedroom,
});

const reduxHoc = connect(mapStateToProps);

export default reduxHoc(OtherFilter);
