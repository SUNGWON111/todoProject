import { useReducer, createContext } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Header from "./components/Header";
import List from "./components/List";

export type Data = {
  id: number;
  isDone: boolean;
  content: string;
  date: number;
};

type Action =
  | { type: "CREATE"; data: Data }
  | { type: "UPDATE"; targetId: number }
  | { type: "DELETE"; targetId: number };

const mocData: Data[] = [
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
type todoContextType = {
  todos: Data[];
  onCreate: (content: string) => void;
  onDelete: (targetId: number) => void;
  onUpdate: (targetId: number) => void;
};
export const todoContext = createContext<todoContextType>({
  todos: mocData,
  onCreate: () => {},
  onDelete: () => {},
  onUpdate: () => {},
});

function reducer(todos: Data[], dispatch: Action) {
  switch (dispatch.type) {
    case "CREATE":
      return [...todos, dispatch.data];

    case "UPDATE":
      return todos.map((todo: Data) =>
        dispatch.targetId === todo.id ? { ...todo, isDone: !todo.isDone } : todo
      );

    case "DELETE":
      return todos.filter((todo) => dispatch.targetId !== todo.id);
  }
}

function App() {
  const [todos, dispatch] = useReducer(reducer, mocData);

  const onCreate = (content: string) => {
    dispatch({
      type: "CREATE",
      data: {
        id: Math.max(...todos.map((todo: Data) => todo.id), 0) + 1,
        isDone: false,
        content: content,
        date: new Date().getTime(),
      },
    });
  };
  const onDelete = (targetId: number) => {
    dispatch({
      type: "DELETE",
      targetId: targetId,
    });
  };
  const onUpdate = (targetId: number) => {
    dispatch({
      type: "UPDATE",
      targetId: targetId,
    });
  };

  console.log(todos);
  return (
    <div className="App">
      <Header />
      <todoContext.Provider value={{ todos, onCreate, onDelete, onUpdate }}>
        <Editor />
        <List />
      </todoContext.Provider>
    </div>
  );
}

export default App;
