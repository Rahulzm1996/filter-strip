import List from "@mui/material/List";
import { styled } from "@mui/system";

export const StyledList = styled(List)({
  "& .MuiListItem-root": {
    cursor: "pointer",
    borderBottom: "1px solid #fafafa",
  },

  "& .single-list": {
    "& :hover": {
      background: "#f5f5f5",
    },
  },
});
