import { Select } from "@mantine/core";
import categories from "../categories";

interface Props {
  onSelectCategory: (category: string) => void;
}

const ExpenseFilter = ({ onSelectCategory }: Props) => {
  return (
    <>
      <Select
        label="Filter By Category"
        placeholder="All Categories"
        onOptionSubmit={(value) => onSelectCategory(value)}
        onClear={() => onSelectCategory("")}
        data={categories}
        clearable
      ></Select>
    </>
  );
};

export default ExpenseFilter;
