import React, { FC, useState, useEffect } from "react";

interface UserTodosProps {
  username: string;
}

const UserTodos: FC<UserTodosProps> = ({ username }) => {
  const [todos, setTodos] = useState<Array<JSX.Element>>();

  const setUsersTodos = async () => {
    const usersResponse = await fetch(
      "https://jsonplaceholder.typicode.com/Users"
    );

    if (usersResponse) {
      const users = await usersResponse.json();
      const userByName = users.find((usr: any) => {
        return usr.username.toLower() === username;
      });

      console.log("user by username", userByName);
      const todosResponse = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );

      if (userByName && todosResponse) {
        const todos = await todosResponse.json();
        const userTodos = todos.filter((todo: any) => {
          return todo.userId === userByName.id;
        });
        const todoList = userTodos.map((todo: any) => {
          return <li key={todo.id}>{todo.title}</li>;
        });
        setTodos(todoList);
        console.log("uesr todos", userTodos);
      }
    }
  };

  useEffect(() => {
    if (username) {
      setUsersTodos();
    }
  }, [username]);

  return <ul style={{ marginTop: "1rem", listStyleType: "none" }}>{todos}</ul>;
};

export default UserTodos;
