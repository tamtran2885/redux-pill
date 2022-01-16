import React from "react";
import { connect } from "react-redux";

const FooterCounter = ({ counter }) => {
  return <div>Counter: {counter}</div>;
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
  };
};

const reduxHoc = connect(mapStateToProps);
export default reduxHoc(FooterCounter);
