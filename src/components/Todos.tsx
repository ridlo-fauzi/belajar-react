import { useState } from "react";

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const Todos = () => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [input, setInput] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim() === "") return;

    const newTodo: Todo = {
      id: Date.now(),
      title: input,
      completed: false,
    };

    setTodos((prevTodos) => {
      const updated = [...prevTodos, newTodo];
      //   console.log(updated);
      return updated;
    });
    console.log(todos);
    setInput("");
  };

  return (
    <div style={{ margin: "10px auto" }}>
      <h1>Todos App by Ridlo</h1>
      <div style={{ marginBottom: "20px" }}>
        <form action="" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button
            style={{
              background: "blue",
              color: "white",
              border: "none",
              padding: "5px 20px",
              marginLeft: "10px",
            }}
          >
            Add Todo
          </button>
        </form>
        <div>
          <h2>Todo List</h2>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "10px",
              marginTop: "10px",
            }}
          >
            {todos.map((todo) => (
              <div
                key={todo.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "10px",
                  borderRadius: "5px",
                  background: todo.completed ? "lightgreen" : "lightgrey",
                }}
              >
                <span
                  style={{
                    textDecoration: todo.completed ? "line-through" : "none",
                    color: "black",
                    fontSize: "15px",
                    marginRight: "10px",
                    marginLeft: "10px",
                  }}
                >
                  {todo.title}
                </span>
                <div>
                  <input
                    type="checkbox"
                    checked={todo.completed}
                    onChange={() =>
                      setTodos((prevTodos) =>
                        prevTodos.map((t) =>
                          t.id === todo.id
                            ? { ...t, completed: !t.completed }
                            : t
                        )
                      )
                    }
                  />
                  <button
                    style={{
                      marginLeft: "10px",
                      background: "red",
                      color: "white",
                      border: "none",
                      padding: "5px 10px",
                    }}
                    onClick={() =>
                      setTodos(todos.filter((t) => t.id !== todo.id))
                    }
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Todos;
