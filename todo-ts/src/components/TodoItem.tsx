import { Data } from "../App";
import "../componentsCss/TodoItem.css";

type TodoItemProps = {
  todo: Data;
  onDelete: (targetId: number) => void;
  onUpdate: (targetId: number) => void;
};

export default function TodoItem({ todo, onDelete, onUpdate }: TodoItemProps) {
  //console.log(todo.id);
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
