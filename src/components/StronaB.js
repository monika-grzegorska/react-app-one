import React from "react";
import styled from "styled-components";

function StronaB() {
  return (
    <Wrapper>
      <span>Strona B</span>
      <section>
        <p>
          STRONA B
        </p>
        <p>
          Nulla ornare a dui pellentesque imperdiet. Fusce nec dolor semper,
          aliquet risus eget, dignissim nisl. Vestibulum nec iaculis metus. Nam
          vitae volutpat dui, non ultricies eros. Aenean vitae leo laoreet,
          faucibus lorem a, sagittis libero. Nulla id dignissim augue. Quisque
          laoreet tristique purus, eu rutrum mi consequat ut.
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #00bfff;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default StronaB;
