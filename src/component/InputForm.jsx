import { useState } from "react";
import { useDispatch } from "react-redux";
import styled from "styled-components";
import { v4 as uuid } from "uuid";
import { addTodo } from "../redux/modules/todos";

export default function InputForm() {
  //제목 내용 입력
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  //useSelector: 리덕스에 있는 데이터를 불러옴 const selector=useSelector();
  const dispatch = useDispatch();

  const titleChangeHandler = (e) => {
    console.dir(e.target);
    setTitle(e.target.value);
  };

  const contentChangeHandler = (e) => {
    console.dir(e.target);
    setContent(e.target.value);
  };
  // 이벤트: 이벤트 핸들러 함수가 연결될 이벤트를 지정, "클릭", "입력", "마우스 이동" 등 다양한 종류의 이벤트를 이용할 경우
  // 이벤트 핸들러 함수: 특정 이벤트가 발생했을 때 실행될 JavaScript 함수.

  const clickAddButtonHandler = () => {
    if (title.trim() === "" || content.trim() === "") {
      return; //입력창이 비어있으면 아무것도 실행 안됌
    }
    //리덕스로 보낼 데이터
    const newTodo = {
      id: uuid(),
      title,
      content,
      isDone: false,
    };

    //dispatch를 이용해 todo데이터를 리덕스로 보낸다
    dispatch(addTodo(newTodo));

    // 새로운 할 일을 추가한 후 입력창 비우기
    setTitle(""); // 제목 입력창 비우기
    setContent(""); // 내용 입력창 비우기
  };

  return (
    <Container>
      <div>
        <span>제목</span>
        <input value={title} onChange={titleChangeHandler} />
        <span>내용</span>
        <input value={content} onChange={contentChangeHandler} />
      </div>
      <button onClick={clickAddButtonHandler}>추가하기</button>
    </Container>
  );
}

const Container = styled.div`
  background-color: rgb(238, 238, 238);
  padding: 30px;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  span {
    margin-right: 10px;
    font-weight: bold;
  }

  input {
    margin-right: 20px;
  }

  button {
    background-color: teal;
    color: white;
    border: none;
    width: 140px;
    height: 40px;
    cursor: pointer;
  }
`;
