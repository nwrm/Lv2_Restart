import React from "react";
import styled from "styled-components";

function Header() {
  const Container = styled.div`
    align-items: center;
    border: 1px solid #ddd;
    display: flex;
    height: 50px;
    justify-content: space-between;
    padding: 0 20px;
  `;

  return (
    <Container>
      <div>My Todo List</div>
      <div>React</div>
    </Container>
  );
}

export default Header;
