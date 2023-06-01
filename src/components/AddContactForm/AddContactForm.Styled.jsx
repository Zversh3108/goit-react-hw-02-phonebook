import styled from '@emotion/styled';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  outline: 1px solid black;
  padding: 15px;
  width: 300px;

  height: 150px;
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 50%;
  margin-bottom: 20px;

  &:focus {
    box-shadow: 0 0 5px 3px blue;
    font-weight: bold;
  }
`;
export const Input = styled.input`
  border: none;
  width: 150px;
  outline: 0.5px solid grey;
  border-radius: 3px;
  &:focus {
    box-shadow: 0 0 5px 3px #14e1f7;
    border: none;
  }
`;
export const ButtonSubmit = styled.button`
  width: 35%;
  height: 20px;
  background-color: white;
  border: 0.5px solid grey;
  border-radius: 5px;
  &:enabled:active {
    background-color: darkblue;
  }
`;
