import { useForm, FieldValues } from "react-hook-form";

const Form = () => {
  const { register, handleSubmit } = useForm();

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
        </div>
        <div className="mb-3 flex flex-col">
          <label className="mb-3" htmlFor="age">
            Age
          </label>
          <input
            className="rounded-md border border-solid border-gray-400 p-2"
            id="age"
            {...register("age")}
            type="number"
          />
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
