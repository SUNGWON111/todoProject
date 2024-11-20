import { useRef } from "react";
import "../componentsCss/Editor.css";
// import { Data } from "../App";

interface EditorProps {
  onCreate: (content: string) => void;
}

export default function Editor({ onCreate }: EditorProps) {
  const contentRef = useRef<HTMLInputElement>(null);

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
