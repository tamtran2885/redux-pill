import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  fetchProperty,
  changeBedRoomType,
} from "../../redux/homeSearch/action";
import { Form } from "react-bootstrap";
import { FaBed } from "react-icons/fa";

const BedRoom = ({
  text,
  equipment,
  conditionList,
  homeList,
  bathRoomList,
  isCheckedPetAllowed,
  isCheckedLift,
  isCheckedGarden,
  isCheckedAirConditioning,
  isCheckedSwimmingPool,
  isCheckedTerrace,
}) => {
  const dispatch = useDispatch();

  const typeOfBedroom = [
    { label: "0/Studio", value: "0" },
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "Three", value: "3" },
    { label: "+3", value: "_gte=3" },
  ];

  const [bedRoomList, setBedRoomList] = useState([]);
  // console.log(bedRoomList);

  const handleOnChange = (option) => {
    if (!bedRoomList.includes(option)) {
      setBedRoomList([...bedRoomList, option]);
    } else {
      const optionIndex = bedRoomList.indexOf(option);
      const newFilter = [...bedRoomList];
      newFilter.splice(optionIndex, 1);
      setBedRoomList(newFilter);
    }
  };

  useEffect(() => {
    dispatch(
      fetchProperty(
        text,
        equipment,
        homeList,
        conditionList,
        bathRoomList,
        isCheckedPetAllowed,
        isCheckedLift,
        isCheckedGarden,
        isCheckedAirConditioning,
        isCheckedSwimmingPool,
        isCheckedTerrace,
        bedRoomList
      )
    );
    dispatch(changeBedRoomType(bedRoomList));
  }, [
    homeList,
    dispatch,
    equipment,
    text,
    conditionList,
    bathRoomList,
    isCheckedPetAllowed,
    isCheckedLift,
    isCheckedGarden,
    isCheckedAirConditioning,
    isCheckedSwimmingPool,
    isCheckedTerrace,
    bedRoomList,
  ]);

  return (
    <Form>
      <Form.Label htmlFor="TextInput">
        Bedrooms{" "}
        <span>
          <FaBed />
        </span>
      </Form.Label>
      <div key="checkbox" className="mb-3">
        {typeOfBedroom.map((option) => (
          <Form.Check
            inline
            label={option.label}
            name="bathRoomType"
            type="checkbox"
            id={option.value}
            key={option.value}
            checked={bedRoomList.includes(option.value)}
            onChange={() => handleOnChange(option.value)}
            value={option.value}
          />
        ))}
      </div>
    </Form>
  );
};

const mapStateToProps = (state) => ({
  text: state.homeSearch.text,
  equipment: state.homeSearch.text.equipment,
  conditionList: state.homeSearch.condition,
  homeList: state.homeSearch.homeType,
  bathRoomList: state.homeSearch.bathroom,
  isCheckedPetAllowed: state.homeSearch.pet_allowed,
  isCheckedLift: state.homeSearch.lift,
  isCheckedGarden: state.homeSearch.garden,
  isCheckedAirConditioning: state.homeSearch.air_conditioning,
  isCheckedSwimmingPool: state.homeSearch.swimming_pool,
  isCheckedTerrace: state.homeSearch.terrace,
});

const reduxHoc = connect(mapStateToProps);

export default reduxHoc(BedRoom);
