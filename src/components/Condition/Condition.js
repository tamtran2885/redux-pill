import React, { useState, useEffect } from "react";
import { connect, useDispatch } from "react-redux";
import { fetchProperty, changeCondition } from "../../redux/homeSearch/action";
import { Form } from "react-bootstrap";

const Condition = ({ text, equipment, homeList }) => {
  const dispatch = useDispatch();

  const typeOfCondition = [
    { label: "New Homes", value: "new" },
    { label: "Good Condition", value: "good" },
    { label: "Needs Renovation", value: "renovation" },
  ];

  const [conditionList, setConditionList] = useState([]);

  const handleOnChange = (option) => {
    if (!conditionList.includes(option)) {
      setConditionList([...conditionList, option]);
    } else {
      const optionIndex = conditionList.indexOf(option);
      const newFilter = [...conditionList];
      newFilter.splice(optionIndex, 1);
      setConditionList(newFilter);
    }
  };

  useEffect(() => {
    dispatch(fetchProperty(text, equipment, homeList, conditionList));
    dispatch(changeCondition(conditionList));
  }, [homeList, dispatch, equipment, text, conditionList]);

  return (
    <Form>
      <Form.Label htmlFor="TextInput">Condition</Form.Label>
      <div key="checkbox" className="mb-3">
        {typeOfCondition.map((option) => (
          <Form.Check
            inline
            label={option.label}
            name="conditionType"
            type="checkbox"
            id={option.value}
            key={option.value}
            checked={conditionList.includes(option.value)}
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
  homeList: state.homeSearch.text.homeType,
});

const reduxHoc = connect(mapStateToProps);

export default reduxHoc(Condition);
