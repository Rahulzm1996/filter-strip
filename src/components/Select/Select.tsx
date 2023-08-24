import { components } from "react-select";
import React, { useState, useEffect } from "react";
import ReactSelect from "react-select";

import styled from "styled-components";

export const Select = ({
  isClearable = true,
  isDisabled = false,
  isMulti = false,
  isSearchable = true,
  ...rest
}) => {
  const [value, setValue] = useState(null);

  const handleChange = (option) => {
    setValue(option);

    if (rest.handleChange)
      rest.handleChange({
        id: rest.id,
        option,
      });
  };

  useEffect(() => {
    setValue(rest.value);
  }, [rest.value]);

  return (
    <ReactSelect
      {...rest}
      value={value}
      onChange={(option) => handleChange(option)}
      isClearable={isClearable}
      isDisabled={isDisabled}
      isSearchable={isSearchable}
      menuPlacement="auto"
      menuPortalTarget={document.querySelector("body")}
      isMulti={isMulti}
    />
  );
};
