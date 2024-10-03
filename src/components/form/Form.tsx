import { FormEvent, useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({ name: "", age: 0 });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(person);
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
            value={person.name}
            onChange={(event) =>
              setPerson({ ...person, name: event.target.value })
            }
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
            value={person.age}
            onChange={(event) =>
              setPerson({ ...person, age: parseInt(event.target.value) })
            }
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
