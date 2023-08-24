import { getFieldFromDateLabel } from "./dateUtils";

export const transformFilterDataBasedOnType = ({
  fieldName,
  componentType,
  isDateField,
  option,
}) => {
  if (componentType === "multi-select") {
    return { [fieldName]: option?.map?.((el) => el.value) };
  } else if (componentType === "select" && !isDateField) {
    return { [fieldName]: option?.value };
  } else if (componentType === "select" && isDateField) {
    let underscoreFieldName = fieldName?.split(" ")?.join("_");
    let { to, from } = getFieldFromDateLabel(option.value) || {};

    return {
      [`${underscoreFieldName}_range`]: option?.value,
      [`${underscoreFieldName}_to`]: to,
      [`${underscoreFieldName}_from`]: from,
    };
  }
};
