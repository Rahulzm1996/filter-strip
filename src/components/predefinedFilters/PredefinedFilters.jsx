import React from "react";
import { Select } from "../Select";
import styled from "styled-components";

import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import HighlightOffTwoToneIcon from "@mui/icons-material/HighlightOffTwoTone";

const PredefinedFiltersWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  .filter-container {
    position: relative;
    .remove-icon {
      position: absolute;
      top: -15px;
      left: -12px;
      transition: "all 0.5s linear";
      z-index: 10;
    }

    &:hover {
      & .remove-icon {
        .MuiSvgIcon-root {
          height: initial;
        }
      }
    }
  }
`;

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
