import { Props, GroupBase } from "react-select";
import { AsyncPaginateProps } from "react-select-async-paginate";

export type Option = {
  label: string;
  value: any;
  isDisabled?: boolean;
};

export type SelectProps = Props<Option> & {
  label: string;
  required?: boolean;
};

export type AdditionalAsyncProps = {
  limit: number;
  page: number;
};

export type AsyncSelectProps = AsyncPaginateProps<
  Option,
  GroupBase<Option>,
  AdditionalAsyncProps,
  boolean
> & {
  label: string;
  required?: boolean;
};
