import styled from "styled-components";

export const PredefinedFiltersWrapper = styled.div`
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
