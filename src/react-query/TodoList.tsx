import axios from "axios";
import { useEffect, useState } from "react";

interface Todo {
  id: number;
  title: string;
  userId: number;
  completed: boolean;
}

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/todos")
      .then((res) => setTodos(res.data))
      .catch((err) => setError(err));
  }, []);

  if (error) return <p>{error}</p>;

  return (
    <ul className="list-group">
      {todos.map((todo) => (
        <li className="list-group-item" key={todo.id}>
          {todo.title}
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
