import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: fit-content;
  border-radius: 50%;
  border: 2px solid #fff;
  &:hover {
    animation: grow 700ms ease-in infinite alternate;
  }
  img {
    border-radius: 50%;
    width: 60px;
    height: 60px;
    object-fit: cover;
  }

  input {
    display: none;
  }

  @keyframes grow {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(1.1);
    }
  }
`;
