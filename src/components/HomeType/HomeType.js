import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchProperty, changeHomeType } from "../../redux/homeSearch/action";
import { Form } from "react-bootstrap";

const HomeType = ({ text, equipment, conditionList }) => {
  const dispatch = useDispatch();

  const typeOfHouse = [
    { label: "Flat/Apartment", value: "flat/apartment" },
    { label: "Duplex", value: "duplex" },
    { label: "House", value: "house" },
    { label: "Penthouse", value: "penthouse" },
  ];

  const [homeList, setHomeList] = useState([]);
  // console.log(activeList);

  const handleOnChange = (option) => {
    if (!homeList.includes(option)) {
      setHomeList([...homeList, option]);
    } else {
      const optionIndex = homeList.indexOf(option);
      const newFilter = [...homeList];
      newFilter.splice(optionIndex, 1);
      setHomeList(newFilter);
    }
  };

  useEffect(() => {
    dispatch(fetchProperty(text, equipment, homeList, conditionList));
    dispatch(changeHomeType(homeList));
  }, [homeList, dispatch, equipment, text, conditionList]);

  return (
    <Form>
      <Form.Label htmlFor="TextInput">Type of Home</Form.Label>
      <div key="checkbox" className="mb-3">
        {typeOfHouse.map((option) => (
          <Form.Check
            inline
            label={option.label}
            name="homeType"
            type="checkbox"
            id={option.value}
            key={option.value}
            checked={homeList.includes(option.value)}
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
});

const reduxHoc = connect(mapStateToProps);

export default reduxHoc(HomeType);
