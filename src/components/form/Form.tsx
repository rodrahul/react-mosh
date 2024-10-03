import { useForm, FieldValues } from "react-hook-form";

interface FormData {
  name: string;
  age: number;
}

const Form = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

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
            {...register("name", { required: true, minLength: 3 })}
            id="name"
            type="text"
          />
          {errors.name?.type == "required" && (
            <p className="text-xs text-red-500">The name field is required</p>
          )}
          {errors.name?.type == "minLength" && (
            <p className="text-xs text-red-500">
              Name must be at least three characters long
            </p>
          )}
        </div>
        <div className="mb-3 flex flex-col">
          <label className="mb-3" htmlFor="age">
            Age
          </label>
          <input
            className="rounded-md border border-solid border-gray-400 p-2"
            id="age"
            {...register("age", { required: true, min: 1 })}
            type="number"
          />
          {errors.age?.type == "min" && (
            <p className="text-xs text-red-500">
              Age must be a positive number
            </p>
          )}
        </div>
        <button className="text-md rounded-md bg-blue-500 p-2 pl-4 pr-4 text-center text-white hover:bg-blue-600 active:bg-blue-700">
          {" "}
          Submit{" "}
        </button>
      </form>
    </>
  );
};

export default Form;
