import { useContext, useState } from "react";
import "../componentsCss/List.css";
import TodoItem from "./TodoItem";
import { todoContext } from "../App";

// type ListProps = {

//   onDelete: (targetId: number) => void;
//   onUpdate: (targetId: number) => void;
// };

export default function List() {
  const { todos } = useContext(todoContext);
  const [search, setSearch] = useState<string>("");
  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  const getSearchData = () => {
    if (search === "") return todos;
    return todos.filter((todo) => todo.content.includes(search.toLowerCase()));
  };

  const filteredTodo = getSearchData();
  const listItems = filteredTodo.map((todo) => {
    return <TodoItem key={todo.id} todo={todo} />;
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
