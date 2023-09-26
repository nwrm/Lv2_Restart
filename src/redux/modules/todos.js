import { v4 as uuid } from "uuid";

const initialState = [
  {
    id: uuid(),
    title: "리액트 공부하기",
    content: "리액트 공부하기",
    isDone: true,
  },
  {
    id: uuid(),
    title: "자바스크립트 공부하기",
    content: "자바스크립트 공부하기",
    isDone: false,
  },
];

const TODO_ADD = "todos/TODO_ADD";
const TODO_UPDATE = "todos/TODO_UPDATE";
const TODO_REMOVER = "todos/TODO_REMOVER";

export const addTodo = (payload) => {
  return { type: TODO_ADD, payload };
};

export const removeTodo = (payload) => {
  return { type: TODO_REMOVER, payload };
};

export const updateTodo = (payload) => {
  return { type: TODO_UPDATE, payload };
};

const todos = (state = initialState, action) => {
  switch (action.type) {
    //todo 추가할 때
    case TODO_ADD:
      state = [...state, action.payload];
      return state;

    //todo 지울 때
    case TODO_REMOVER:
      //Todo 컴포넌트로부터 받은 id를 이용해서 id와 일치하지 않는 todo들을 반환
      //action.payload: Todo 컴포넌트로부터 받은 id
      return state.filter((todo) => {
        return todo.id !== action.payload;
      });

    //todo 상태를 변경할 때: 완료 -> 취소, 취소 -> 완료
    case TODO_UPDATE:
      return state.map((todo) => {
        if (todo.id === action.payload) {
          return { ...todo, isDone: !todo.isDone };
        }
        return todo;
      });
    default:
      return state;
  }
};
export default todos;
