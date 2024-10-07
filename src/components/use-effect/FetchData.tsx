import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
import Alert from "../Alert";

interface User {
  id: number;
  name: string;
}

const FetchData = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const controller = new AbortController();
    setIsLoading(true);
    axios
      .get<User[]>("https://jsonplaceholder.typicode.com/users", {
        signal: controller.signal,
      })
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

    return () => controller.abort();
  }, []);

  return (
    <>
      {error && <Alert message={error} type="error"></Alert>}
      {isLoading && <div className="spinner-border"></div>}
      <ul>
        {users.map((user) => (
          <li key={user.id}>{user.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FetchData;
