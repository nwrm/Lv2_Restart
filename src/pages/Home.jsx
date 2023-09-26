import styled from "styled-components";
import InputForm from "../component/InputForm";
import Todos from "../component/Todos";

export default function Home() {
  return (
    <>
      <Container>
        Home
        <InputForm />
        <Todos />
      </Container>
    </>
  );
}
const Container = styled.div`
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;
