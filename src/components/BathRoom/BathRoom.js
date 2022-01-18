import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import {
  fetchProperty,
  changeBathRoomType,
} from "../../redux/homeSearch/action";
import { Form } from "react-bootstrap";
import { FaBath } from "react-icons/fa";

const BathRoom = ({ text, equipment, conditionList, homeList }) => {
  const dispatch = useDispatch();

  const typeOfBathRoom = [
    { label: "One", value: "1" },
    { label: "Two", value: "2" },
    { label: "+2", value: "_gte=2" },
  ];

  const [bathRoomList, setBathRoomList] = useState([]);
  console.log(bathRoomList);

  const handleOnChange = (option) => {
    if (!bathRoomList.includes(option)) {
      setBathRoomList([...bathRoomList, option]);
    } else {
      const optionIndex = bathRoomList.indexOf(option);
      const newFilter = [...bathRoomList];
      newFilter.splice(optionIndex, 1);
      setBathRoomList(newFilter);
    }
  };

  useEffect(() => {
    dispatch(
      fetchProperty(text, equipment, homeList, conditionList, bathRoomList)
    );
    dispatch(changeBathRoomType(bathRoomList));
  }, [homeList, dispatch, equipment, text, conditionList, bathRoomList]);

  return (
    <Form>
      <Form.Label htmlFor="TextInput">
        Bathrooms{" "}
        <span>
          <FaBath />
        </span>
      </Form.Label>

      <div key="checkbox" className="mb-3">
        {typeOfBathRoom.map((option) => (
          <Form.Check
            inline
            label={option.label}
            name="bathRoomType"
            type="checkbox"
            id={option.value}
            key={option.value}
            checked={bathRoomList.includes(option.value)}
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
  homeList: state.homeSearch.homeList,
});

const reduxHoc = connect(mapStateToProps);

export default reduxHoc(BathRoom);
