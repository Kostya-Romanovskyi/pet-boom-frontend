import styled from '@emotion/styled';

export const MainContainer = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;

  width: 400px;
  height: auto;

  padding: 10px;

  border: 1px solid black;
`;

export const StyledLabel = styled.label`
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  margin-bottom: 20px;
`;
