import { useState } from "react";
import "./List.css";
import TodoItem from "./TodoItem";

export default function List({ todos, onDelete, onUpdate }) {
  const [search, setSearch] = useState("");
  const onSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearchData = () => {
    if (search === "") return todos;
    return todos.filter((todo) => todo.content.includes(search.toLowerCase()));
  };

  const filteredTodo = getSearchData(search);
  const listItems = filteredTodo.map((todo) => {
    return (
      <TodoItem
        key={todo.id}
        {...todo}
        onDelete={onDelete}
        onUpdate={onUpdate}
      />
    );
  });
  return (
    <div className="List">
      <h4>Todo List🌱</h4>
      <input
        value={search}
        onChange={onSearch}
        placeholder="검색어를 입력하세요"
      />
      <div className="todos_wrapper">{listItems}</div>
    </div>
  );
}
