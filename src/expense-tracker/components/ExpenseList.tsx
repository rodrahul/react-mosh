import { Table } from "@mantine/core";
import { IconTrash } from "@tabler/icons-react";

interface Expense {
  id: number;
  description: string;
  amount: number;
  category: string;
}

interface Props {
  expenses: Expense[];
  onDelete: (id: number) => void;
}

const ExpenseList = ({ expenses, onDelete }: Props) => {
  if (expenses.length == 0) return null;
  return (
    <>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Description</Table.Th>
            <Table.Th>Amount</Table.Th>
            <Table.Th>Category</Table.Th>
          </Table.Tr>
        </Table.Thead>

        <Table.Tbody>
          {expenses.map((expense) => (
            <Table.Tr key={expense.id}>
              <Table.Td>{expense.description}</Table.Td>
              <Table.Td>{expense.amount}</Table.Td>
              <Table.Td>{expense.category}</Table.Td>
              <Table.Td>
                <IconTrash
                  color="red"
                  size={20}
                  onClick={() => onDelete(expense.id)}
                ></IconTrash>
              </Table.Td>
            </Table.Tr>
          ))}
        </Table.Tbody>

        {/* Table Footer */}
        <Table.Tfoot>
          <Table.Tr>
            <Table.Td>Total</Table.Td>
            <Table.Td>
              $
              {expenses
                .reduce((acc, expense) => expense.amount + acc, 0)
                .toFixed(2)}
            </Table.Td>
            <Table.Td></Table.Td>
            <Table.Td></Table.Td>
          </Table.Tr>
        </Table.Tfoot>
      </Table>
    </>
  );
};

export default ExpenseList;
