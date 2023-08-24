import React from "react";
import AddIcon from "@mui/icons-material/Add";
import Button from "@mui/material/Button";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import { styled } from "@mui/system";

const StyledList = styled(List)({
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

const CustomFilters = ({ otherFilters, handleCustomFilter }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  console.log({ otherFilters });

  const otherFiltersOption = otherFilters.map((filter) => ({
    id: filter.id,
    label: filter.name,
  }));

  return (
    <div>
      <Button
        variant="outlined"
        aria-describedby={id}
        onClick={handleClick}
        startIcon={<AddIcon />}
        disabled={!otherFiltersOption.length}
      >
        Custom Filters
      </Button>
      {otherFiltersOption.length > 0 && (
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <StyledList>
            {otherFiltersOption.map((option) => {
              return (
                <div className="single-list" key={option.label}>
                  <ListItem
                    onClick={() => {
                      handleClose();
                      handleCustomFilter(option.id);
                    }}
                  >
                    <ListItemText primary={option.label} />
                  </ListItem>
                </div>
              );
            })}
          </StyledList>
        </Popover>
      )}
    </div>
  );
};

export { CustomFilters };
