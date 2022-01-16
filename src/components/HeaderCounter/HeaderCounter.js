import React from "react";
import { connect } from "react-redux";
import { increaseCounter, decreaseCounter } from "../../redux/counter/action";

const HeaderCounter = ({ onIncreaseCounter, onDecreaseCounter }) => {
  return (
    <div>
      <button onClick={onIncreaseCounter}>+</button>
      <button onClick={onDecreaseCounter}>-</button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  onIncreaseCounter: () => dispatch(increaseCounter()),
  onDecreaseCounter: () => dispatch(decreaseCounter()),
});

const reduxHoc = connect(null, mapDispatchToProps);
export default reduxHoc(HeaderCounter);
