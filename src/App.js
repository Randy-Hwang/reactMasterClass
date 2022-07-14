import styled, { keyframes } from "styled-components";

// 2.5부터

const Wrapper = styled.div`
  display: flex;
`;

const rotation = keyframes`
  0% {
    transform: rotate(0deg);
    border-radius: 0px;
  } 50% {
    border-radius: 100px;
  } 100% {
    transform: rotate(360deg);
    border-radius: 0px;
  }
`;

const Box = styled.div`
  height: 100px;
  width: 100px;
  background-color: tomato;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${rotation} 1s linear infinite;
  // 자식 요소를 이런 방식으로 선택할 수도 있다.
  span {
    font-size: 36px;
    &:hover {
      // = span:hover. 이런 방식으로 수도 선택자도 가능하다.
      font-size: 40px;
    }
    &:active {
      // 클릭하고있으면 active, 아니면 inactive
      opacity: 0;
    }
  }
`;

function App() {
  return (
    <Wrapper>
      <Box>
        <span>🥰</span>
      </Box>
    </Wrapper>
  );
}

export default App;
