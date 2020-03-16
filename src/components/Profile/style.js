import styled from "styled-components";
import DefaultAvatar from "components/Avatar";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background: #383838;
  width: 300px;
  height: 100px;
  padding: 15px;
  position: absolute;
  left: 0;
  cursor: pointer;
`;

export const Avatar = styled(DefaultAvatar)``;

export const Box = styled.div`
  display: flex;
  flex-direction: column;
  span {
    font-size: 13px;
  }

  h3 {
    color: #fff;
  }
`;
