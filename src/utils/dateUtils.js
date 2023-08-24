import moment from "moment";

export const getFieldFromDateLabel = (label) => {
  let timestampMap;
  if (label === "Today") {
    timestampMap = {
      to: moment().toISOString(),
      from: moment().add(-7, "days").toISOString(),
    };
  } else if (label === "Last 7 Days") {
    timestampMap = {
      to: moment().toISOString(),
      from: moment().add(-7, "days").toISOString(),
    };
  } else if (label === "Last 30 Days") {
    timestampMap = {
      to: moment().toISOString(),
      from: moment().subtract(1, "month").toISOString(),
    };
  } else if (label === "Last 90 Days") {
    timestampMap = {
      to: moment().toISOString(),
      from: moment().subtract(3, "month").toISOString(),
    };
  }

  return timestampMap;
};
