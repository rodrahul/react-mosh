import { FormEvent, InputHTMLAttributes, useRef } from "react";

const Form = () => {
  const nameRef = useRef<HTMLInputElement>(null);
  const ageRef = useRef<HTMLInputElement>(null);

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (nameRef.current) console.log(nameRef.current.value);
    if (ageRef.current) console.log(ageRef.current.value);
  };

  return (
    <>
      <form onSubmit={onSubmit}>
        <div className="mb-3 flex flex-col">
          <label className="mb-3" htmlFor="name">
            Name
          </label>
          <input
            className="rounded-md border border-solid border-gray-400 p-4"
            id="name"
            ref={nameRef}
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
            ref={ageRef}
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
