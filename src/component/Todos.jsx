import { useSelector } from "react-redux";
import Todo from "./Todo";

export default function Todos() {
  //리덕스에서 todo 데이터 불러오기
  const todos = useSelector((state) => state.todos);

  return (
    <div>
      {/* Working 에는 todos의 속성 중 isDone이 false인 것만 나열한다. */}
      <h1>Working...🔥</h1>
      {todos
        .filter((value) => !value.isDone)
        .map((value) => (
          <Todo key={value.id} item={value} />
        ))}
      <h1>Done..! 🎉</h1>
      {/* Done에는 todos의 속성 중 isDone이 true인 것만 나열한다. */}
      {todos
        .filter((value) => value.isDone)
        .map((value) => (
          <Todo key={value.id} item={value} />
        ))}
    </div>
  );
}
