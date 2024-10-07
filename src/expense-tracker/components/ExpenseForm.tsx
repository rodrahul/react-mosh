import { zodResolver } from "@hookform/resolvers/zod";
import { Button, Group, NativeSelect, Text, TextInput } from "@mantine/core";
import { useForm } from "react-hook-form";
import { z } from "zod";
import categories from "../categories";

const schema = z.object({
  description: z
    .string()
    .min(3, { message: "Description must be at least 3 characters long" }),
  amount: z
    .number({ invalid_type_error: "Amount is required" })
    .min(1, { message: "Amount must be at least 1" }),
  category: z.enum(categories, {
    errorMap: () => ({ message: "Category is required" }),
  })
});

type ExpenseFormData = z.infer<typeof schema>;

interface Props {
  onSubmit: (data: ExpenseFormData) => void;
}

const ExpenseForm = ({ onSubmit }: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ExpenseFormData>({ resolver: zodResolver(schema) });

  return (
    <>
      <form
        onSubmit={handleSubmit((data) => {
          onSubmit(data);
          reset();
        })}
      >
        <TextInput
          withAsterisk
          label="Description"
          id="description"
          {...register("description")}
        ></TextInput>
        {errors.description && (
          <Text size="xs" c="red">
            {errors.description.message}
          </Text>
        )}

        <TextInput
          type="number"
          withAsterisk
          label="Amount"
          id="amount"
          {...register("amount", { valueAsNumber: true })}
        ></TextInput>
        {errors.amount && (
          <Text size="xs" c="red">
            {errors.amount.message}
          </Text>
        )}

        <NativeSelect
          withAsterisk
          label="Category"
          id="category"
          {...register("category")}
          data={categories}
        ></NativeSelect>
        {errors.category && (
          <Text size="xs" c="red">
            {errors.category.message}
          </Text>
        )}

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </form>
    </>
  );
};

export default ExpenseForm;
