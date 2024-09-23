import { useReducer } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

const mocData = [
  {
    id: 0,
    isDone: false,
    content: "Study React",
    date: new Date().getTime(),
  },
  {
    id: 1,
    isDone: false,
    content: "Study TypeScript",
    date: new Date().getTime(),
  },
  {
    id: 2,
    isDone: false,
    content: "Study JavaScript",
    date: new Date().getTime(),
  },
];

function reducer(todos, dispatch) {
  switch (dispatch.type) {
    case "CREATE":
      return [...todos, dispatch.data];

    case "UPDATE":
      return todos.map((todo) =>
        dispatch.targetId === todo.id ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "DELETE":
      return todos.filter((todo) => dispatch.targetId !== todo.id);
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mocData);

  const onCreate = (content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: Math.max(...todos.map((todo) => todo.id), 0) + 1,
        isDone: false,
        content: content,
        date: new Date().getDate(),
      },
    });
  };
  const onDelete = (targetId) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };
  const onUpdate = (targetId) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  console.log(todos);
  return (
    <div className="App">
      <Header />
      <Editor onCreate={onCreate} />
      <List todos={todos} onDelete={onDelete} onUpdate={onUpdate} />
    </div>
  );
}

export default App;
