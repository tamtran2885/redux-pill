import React from "react";
import { Box, Slider } from "@mui/material";
import { Form } from "react-bootstrap";
import "./styles.css";

function valuetext(value) {
  return `${value}°C`;
}

const PriceRange = () => {
  const [value, setValue] = React.useState([20, 37]);

  // console.log(value[0], value[1]);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: 300 }}>
      <Form.Label htmlFor="TextInput">Price Range</Form.Label>
      <Slider
        getAriaLabel={() => "Temperature range"}
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        getAriaValueText={valuetext}
      />
    </Box>
  );
};

export default PriceRange;
