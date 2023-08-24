import React from "react";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";

import { Select } from "../Select";
import { PredefinedFiltersWrapper } from "./styles";

const PredefinedFilters = ({
  preDefinedFilters,
  removePredefinedFilter,
  handlePredefinedFilterChange,
}) => {
  return (
    <PredefinedFiltersWrapper>
      {preDefinedFilters?.map((filter) => {
        return (
          <div key={filter.key} className="filter-container">
            <Select {...filter} handleChange={handlePredefinedFilterChange} />
            <div
              className="remove-icon"
              onClick={() => removePredefinedFilter(filter.id)}
            >
              <HighlightOffTwoToneIcon
                sx={{
                  color: "#ff4d4d",
                  height: "0px",
                  cursor: "pointer",
                  transition: "all 0.5s linear",
                }}
              />
            </div>
          </div>
        );
      })}
    </PredefinedFiltersWrapper>
  );
};

export { PredefinedFilters };

<div className="parent">
  <div className="child"></div>
</div>;
