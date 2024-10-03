import { zodResolver } from "@hookform/resolvers/zod";
import { FieldValues, useForm } from "react-hook-form";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(3, { message: "Name must atleast 3 characters" }),
  age: z.number({ invalid_type_error: "Age field is required" }).min(18),
});

type FormData = z.infer<typeof schema>;

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  console.log(errors);

  const onSubmit = (data: FieldValues) => {
    console.log(data);
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-3 flex flex-col">
          <label className="mb-3" htmlFor="name">
            Name
          </label>
          <input
            className="rounded-md border border-solid border-gray-400 p-4"
            {...register("name")}
            id="name"
            type="text"
          />
          {errors.name && (
            <p className="text-xs text-red-500">{errors.name.message}</p>
          )}
        </div>
        <div className="mb-3 flex flex-col">
          <label className="mb-3" htmlFor="age">
            Age
          </label>
          <input
            className="rounded-md border border-solid border-gray-400 p-2"
            id="age"
            {...register("age", { valueAsNumber: true })}
            type="number"
          />
          {errors.age && (
            <p className="text-xs text-red-500">{errors.age.message}</p>
          )}
        </div>
        <button
          className="text-md rounded-md bg-blue-500 p-2 pl-4 pr-4 text-center text-white hover:bg-blue-600 active:bg-blue-700 disabled:bg-gray-300"
          disabled={!isValid}
        >
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
};

export default Form;
