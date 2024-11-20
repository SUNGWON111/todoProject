import "./TodoItem.css";

export default function TodoItem({ id, content, date, onDelete, onUpdate }) {
  //console.log(todo.id);
  const onClickDelBtn = () => onDelete(id);
  const onClickUpdateBtn = () => onUpdate(id);

  return (
    <div className="TodoItem">
      <input type="checkbox" onChange={onClickUpdateBtn} />
      <div className="content">{content}</div>
      <div className="date">{date}</div>
      <button onClick={onClickDelBtn}>삭제</button>
    </div>
  );
}
