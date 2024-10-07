import { useEffect, useState } from "react";
import { CanceledError } from "../services/api-clients";
import userService, { User } from "../services/userService";


const useUsers = () => {
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


  return { users, setUsers, error, setError, isLoading, setIsLoading }

}

export default useUsers;