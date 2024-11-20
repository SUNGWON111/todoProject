import { useRef } from "react";
import "./Editor.css";

export default function Editor({ onCreate }) {
  const contentRef = useRef(null);

  const onSubmit = () => {
    if (contentRef.current.value === "") {
      contentRef.current.focus();
      return;
    }
    onCreate(contentRef.current.value);
    contentRef.current.value = "";
  };
  return (
    <div className="Editor">
      <input ref={contentRef} placeholder="새로운 Todo..." />
      <button onClick={onSubmit}>추가</button>
    </div>
  );
}
