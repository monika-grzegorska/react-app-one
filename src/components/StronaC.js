import React from "react";
import styled from "styled-components";

function StronaC() {
  return (
    <Wrapper>
      <span>Strona C</span>
      <section>
        <p>
          STRONA C
        </p>
        <p>
          Praesent eu lorem euismod, convallis nisl in, cursus metus. Cras dolor
          eros, fringilla id erat et, sollicitudin rhoncus lectus. Phasellus non
          vestibulum massa, vel ornare ligula. Quisque accumsan leo eget nibh
          mattis tempor. Nunc imperdiet diam ut enim viverra, non porta lorem
          bibendum. Phasellus et pulvinar enim. Nunc elementum quam metus, et
          venenatis nunc viverra eget. Sed quis lacinia enim. Ut sit amet
          elementum lacus, nec porta elit. Sed dignissim feugiat vehicula. Nunc
          et commodo orci.
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #f76565;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default StronaC;
