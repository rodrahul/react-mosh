import { useEffect, useState } from "react";
import { CanceledError } from "../../services/api-clients";
import userService, { User } from "../../services/userService";
import Alert from "../Alert";

const FetchData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    const { request, cancel } = userService.getAll<User>();

    request
      .then((res) => {
        setUsers(res.data);
        setIsLoading(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setIsLoading(false);
        setError(err.message);
      })
      .finally(() => setIsLoading(false));

    return () => cancel();
  }, []);

  const deleteUser = (userToDelete: User) => {
    const originalUsers = [...users];
    setUsers(users.filter((user) => user.id !== userToDelete.id));
    userService.delete(userToDelete.id).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  const addUser = () => {
    const newUser = { id: 0, name: "Rahul" };
    const originalUsers = [...users];

    setUsers([...users, newUser]);

    userService
      .create(newUser)
      .then(({ data: savedUser }) => {
        setUsers([...users, savedUser]);
        setIsLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setUsers(originalUsers);
      });
  };

  const updateUser = (user: User) => {
    const originalUsers = [...users];
    const updatedUser = { ...user, name: user.name + " updated" };
    setUsers(users.map((u) => (u.id === user.id ? updatedUser : u)));

    userService.update(updatedUser).catch((err) => {
      setError(err.message);
      setUsers(originalUsers);
    });
  };

  return (
    <>
      {error && <Alert message={error} type="error"></Alert>}
      {isLoading && <div className="spinner-border"></div>}
      <button className="btn btn-primary mb-3" onClick={addUser}>
        Add
      </button>
      <ul className="list-group">
        {users.map((user) => (
          <li className="list-group-item flex justify-between" key={user.id}>
            {user.name}
            <div className="flex justify-between gap-2">
              <button
                className="btn btn-outline-secondary"
                onClick={() => updateUser(user)}
              >
                Update
              </button>
              <button
                className="btn btn-outline-danger"
                onClick={() => deleteUser(user)}
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
};

export default FetchData;
