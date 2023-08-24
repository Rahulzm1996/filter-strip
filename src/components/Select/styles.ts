import type { StylesConfig } from 'react-select';

import type { Option } from './types';

export const makeStyles = (theme): StylesConfig<Option> => ({
  container: styles => ({
    ...styles
  }),
  control: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    background: isFocused || isSelected ? theme.palette['D-10'] : theme.palette.white,
    borderRadius: theme.spacing(1),
    padding: theme.spacing(1),
    border: 'transparent',
    boxShadow: isFocused || isSelected ? '0px 0px 2px #0F72EE' : 'none',
    minHeight: '22px',

    '&:hover': {
      backgroundColor: theme.palette['D-10'],
      cursor: 'pointer'
    }
  }),
  clearIndicator: styles => ({
    ...styles,
    padding: 0
  }),
  dropdownIndicator: styles => ({
    ...styles,
    padding: 0
  }),
  indicatorsContainer: styles => ({
    ...styles,
    display: 'flex',
    gap: theme.spacing(1)
  }),
  indicatorSeparator: styles => ({
    ...styles,
    margin: 4
  }),
  input: styles => ({
    ...styles,
    margin: 0,
    padding: 0
  }),
  loadingMessage: styles => ({
    ...styles,
    ...theme.typography.bodyMedium,
    fontFamily: theme.typography.fontFamily
  }),
  menu: styles => ({
    ...styles,
    boxShadow: `0px 10px 18px rgba(51, 51, 52, 0.15), 0px 0px 1px rgba(51, 51, 52, 0.31)`,
    width: 'auto',
    margin: 0
  }),
  menuList: styles => ({
    ...styles,
    padding: '8px 0',
    width: 'auto',
    height: 'max-content',
    maxHeight: '225px'
  }),
  noOptionsMessage: styles => ({
    ...styles,
    ...theme.typography.captionMedium,
    fontFamily: theme.typography.fontFamily,
    minWidth: '200px'
  }),
  option: (styles, { isDisabled, isFocused, isSelected }) => ({
    ...styles,
    ...theme.typography.bodyMedium,
    fontFamily: theme.typography.fontFamily,
    background: isFocused || isSelected ? theme.palette['P-10'] : '#ffffff',
    color: isSelected ? theme.palette['P-50'] : theme.palette['D-90'],
    cursor: isDisabled ? 'not-allowed' : 'pointer',
    pointerEvents: 'auto',
    padding: '10px 8px 10px 16px',
    minWidth: '200px',
    borderBottom: '1px solid #f2f2f2'
  }),
  placeholder: styles => ({
    ...styles,
    color: theme.palette['D-40']
  }),
  singleValue: (styles, { isDisabled }) => ({
    ...styles,
    color: isDisabled ? theme.palette['D-30'] : theme.palette['D-90']
  }),
  valueContainer: styles => ({
    ...styles,
    ...theme.typography.captionMedium,
    fontFamily: theme.typography.fontFamily,
    padding: 0,
    color: theme.palette['D-80']
  }),
  menuPortal: styles => ({
    ...styles,
    zIndex: 99999
  })
});
