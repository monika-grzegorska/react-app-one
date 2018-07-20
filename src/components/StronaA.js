import React from "react";
import styled from "styled-components";

function StronaA() {
  return (
    <Wrapper>
      <span>Strona A</span>
      <section>
        <p>
               STRONA A 
        </p>
        <p>
          Fusce imperdiet suscipit posuere. Aliquam sed consectetur eros.
          Praesent nec malesuada est. Quisque vel turpis viverra, condimentum
          mauris at, imperdiet ex. Duis vitae velit vestibulum, bibendum justo
          vitae, pellentesque velit. Morbi quis posuere ante. Nulla consequat
          condimentum dolor, sed ullamcorper mi condimentum et. Sed vitae
          efficitur metus. Donec vitae bibendum metus. Maecenas ultrices
          hendrerit enim a porttitor. Mauris vitae ante vel metus fermentum
          lacinia. In non placerat metus, vitae laoreet felis. Cras aliquet erat
          ut placerat molestie. Ut tristique orci a leo tempus condimentum.
        </p>
      </section>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  min-height: calc(100vh - 50px);
  background-color: #00d38a;
  padding: 20px;

  span {
    color: #fff;
    font-size: 40px;
  }

  section {
    color: #fff;
  }
`;

export default StronaA;
