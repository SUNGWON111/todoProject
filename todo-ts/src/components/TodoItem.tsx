import { useContext } from "react";
import { Data, todoContext } from "../App";
import "../componentsCss/TodoItem.css";

type TodoItemProps = {
  todo: Data;
};

export default function TodoItem({ todo }: TodoItemProps) {
  //console.log(todo.id);
  const { onDelete, onUpdate } = useContext(todoContext);
  const onClickDelBtn = () => onDelete(todo.id);
  const onClickUpdateBtn = () => onUpdate(todo.id);

  return (
    <div className="TodoItem">
      <input type="checkbox" onChange={onClickUpdateBtn} />
      <div className="content">{todo.content}</div>
      <div className="date">{new Date(todo.date).toLocaleDateString()}</div>
      <button onClick={onClickDelBtn}>삭제</button>
    </div>
  );
}
