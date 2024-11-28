import { useContext, useRef } from "react";
import "../componentsCss/Editor.css";
import { todoContext } from "../App";

// interface EditorProps {
//   onCreate: (content: string) => void;
// }

export default function Editor() {
  const contentRef = useRef<HTMLInputElement>(null);
  const { onCreate } = useContext(todoContext);
  const onSubmit = () => {
    if (contentRef.current && contentRef.current.value === "") {
      contentRef.current.focus();
      return;
    }
    if (contentRef.current) {
      onCreate(contentRef.current.value);
      contentRef.current.value = "";
    }
  };
  return (
    <div className="Editor">
      <input ref={contentRef} placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
