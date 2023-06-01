import styled from '@emotion/styled';

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;
export const ListItem = styled.li`
  display: flex;
  gap: 10px;
`;
export const Button = styled.button`
  width: 60px;
  height: 20px;
  background-color: white;
  border: 0.5px solid grey;
  border-radius: 5px;
  &:active {
    background-color: #0d89d6;
  }
`;
