import { PredefinedFilters } from "../predefinedFilters";
import { CustomFilters } from "../customFilters";

import styled from "styled-components";
import { filterStripConfig } from "../contants";
import React, { useEffect, useState } from "react";
import { transformFilterDataBasedOnType } from "../../utils/common";

import { isEmpty } from "lodash";

const FilterStripContainer = styled.div`
  width: 100%;
  .filter-strip {
    padding: 20px;
    background-color: #f3fafd;
    display: flex;
    align-items: center;
    gap: 12px;
  }
`;

export function FilterList() {
  const [filtersConfig, setFiltersConfig] = useState(filterStripConfig);
  const [filtersData, setfiltersData] = useState({});

  const preDefinedFilters = filtersConfig.filter((el) => el.preSelected);
  const otherFilters = filtersConfig.filter((el) => !el.preSelected);

  const handleCustomFilter = (id) => {
    setFiltersConfig((prevFilters) => {
      return prevFilters.map((el) => {
        if (el.id === id) {
          return { ...el, preSelected: true };
        }
        return el;
      });
    });
  };

  const removePredefinedFilter = (id) => {
    setFiltersConfig((prevFilters) => {
      return prevFilters.map((el) => {
        if (el.id === id) {
          return { ...el, preSelected: false };
        }
        return el;
      });
    });
  };

  const handlePredefinedFilterChange = ({ id, option }) => {
    console.log({ id, option });
    const {
      name: fieldName,
      componentType,
      isDateField,
    } = preDefinedFilters.find((el) => el.id === id);

    console.log({ fieldName, componentType, isDateField });

    const data = transformFilterDataBasedOnType({
      fieldName,
      componentType,
      isDateField,
      option,
    });

    setfiltersData((prevData) => ({ ...prevData, ...data }));
  };

  useEffect(() => {
    if (!isEmpty(filtersData)) {
      //MAKE API CALL AND SEND FILTERS_DATA IN REQUEST HERE.
      //SINCE WE DONT HAVE SERVER SO LOGGING FILTER_DATA HERE
      console.log({ filtersData });
    }
  }, [filtersData]);

  useEffect(() => {
    let data = {};
    preDefinedFilters?.forEach((filter) => {
      const {
        name: fieldName,
        componentType,
        isDateField,
        value: option,
      } = filter;

      const temp = transformFilterDataBasedOnType({
        fieldName,
        componentType,
        isDateField,
        option,
      });

      data = { ...data, ...temp };
    });

    if (!isEmpty(data)) {
      setfiltersData((prevData) => ({ ...prevData, ...data }));
    }
  }, []);

  return (
    <FilterStripContainer>
      <div className="filter-strip">
        <PredefinedFilters
          preDefinedFilters={preDefinedFilters}
          removePredefinedFilter={removePredefinedFilter}
          handlePredefinedFilterChange={handlePredefinedFilterChange}
        />
        <CustomFilters
          otherFilters={otherFilters}
          handleCustomFilter={handleCustomFilter}
        />
      </div>
    </FilterStripContainer>
  );
}
