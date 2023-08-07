import styled from '@emotion/styled';

export const StyledAnchor = styled.a`
  display: block;
  font-size: 10px;
  font-weight: 500;

  text-align: center;
  text-decoration: none;

  width: 200px;

  padding: 10px 22px;

  border-radius: 50px;

  color: #fff;
  background: #00c8c8;

  behavior: smooth;
  @media screen and (min-width: 768px) {
    font-size: 15px;
    height: 40px;
    display: block;

    margin-left: 60px;
  }
`;
