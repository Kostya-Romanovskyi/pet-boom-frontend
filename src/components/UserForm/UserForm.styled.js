import styled from '@emotion/styled';

export const StyledForm = styled.form`
  display: flex;
  flex-direction: column;

  @media screen and (min-width: 1200px) {
    /* display: flex;
    flex-direction: row;
    flex-wrap: wrap;

    gap: 30px; */

    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;

    gap: 30px;
  }
`;

export const StyledLabel = styled.label`
  display: block;
  color: #000;
  font-size: 15px;
  font-weight: 700;

  margin-top: 10px;
  margin-bottom: 10px;
`;

export const StyledInput = styled.input`
  width: 100%;

  font-size: 30px;

  border: none;
  outline: none;

  border-bottom: 1px solid #000000;

  background-color: transparent;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledRadioLabel = styled.label`
  display: inline-block;

  color: #000;
  font-size: 12px;
  font-weight: 700;

  margin-top: 10px;
  margin-bottom: 10px;
  margin-left: 10px;

  cursor: pointer;
`;

export const StyledRadio = styled.input`
  &[type='radio'] {
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid #333;
    border-radius: 50%;
    outline: none;
    cursor: pointer;
  }

  /* Стили для активного (выбранного) чекбокса */
  &[type='radio']:checked {
    border-color: black;
    background-color: black;
  }
`;

export const StyledSelect = styled.select`
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  color: #ffffff;
  background-color: #000000;
  outline: none;

  margin-bottom: 10px;

  cursor: pointer;

  & option {
    padding: 10px;
    font-size: 16px;

    color: #ffffff;
    background-color: #000000;

    cursor: pointer;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

export const StyledTextArea = styled.textarea`
  width: 100%;

  font-size: 30px;

  border: none;
  outline: none;

  border-bottom: 1px solid #000000;

  background-color: transparent;

  margin-bottom: 35px;

  resize: none;

  @media screen and (min-width: 1200px) {
    margin-bottom: 0;
  }
`;

export const Error = styled.p`
  color: red;

  margin-bottom: 20px;
`;
export const Success = styled.p`
  color: green;

  margin-bottom: 20px;
`;

export const ButtonContainer = styled.div`
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  @media screen and (min-width: 1200px) {
    align-self: end;
    padding: 0 0;
  }
`;

export const StyledButton = styled.button`
  padding: 10px 40px;

  border: none;
  border-radius: 20px;

  color: #fff;
  background-color: #000;

  cursor: pointer;

  @media screen and (min-width: 1200px) {
    padding: 15px 120px;
  }
`;

export const MarginBottom = styled.div`
  margin-bottom: 20px;
`;

export const LoaderText = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-top: 10px;
`;
