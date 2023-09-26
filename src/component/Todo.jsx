import styled from "styled-components";
import { removeTodo, updateTodo } from "../redux/modules/todos";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

export default function Todo({ item }) {
  const dispatch = useDispatch();
  //또다른 페이지로 이동하기 위해 사용하는 리액트-라우터의 함수
  const navigate = useNavigate();

  return (
    <Container>
      <div>
        <p onClick={() => navigate(`detail/${item.id}`, { state: item })}>
          상세보기
        </p>
        <h4>{item.title}</h4>
        <p>{item.content}</p>
        {/* 삭제하기 버튼을 클릭했을 때 dispatch가 item.id를 리덕스에 전달한다. */}
        <button onClick={() => dispatch(removeTodo(item.id))}>삭제하기</button>
        {/* 완료 및 취소 버튼을 클릭했을 때 dispatch가 item.id를 리덕스에 전달한다. */}
        <button onClick={() => dispatch(updateTodo(item.id))}>
          {item.isDone ? "취소" : "완료"}
        </button>
      </div>
    </Container>
  );
}

const Container = styled.div`
  border: 3px solid teal;
  border-radius: 8px;
  width: 300px;
  padding: 30px;
  margin: 10px;
`;
