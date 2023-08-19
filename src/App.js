import styled, { createGlobalStyle } from "styled-components";

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Square />
      </Wrapper>
    </>
  );
};

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

const Square = styled.div`
  background-color: #929bb8;
  width: 516px;
  height: 100vh;
`;

export default App;
