import styled from '@emotion/styled';

export const FlexWrapp = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 45%;
  }
`;

export const Info = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2; /* 166.667% */
  letter-spacing: 0.9px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.66;

    margin-left: 40px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    margin-left: 170px;
  }
`;
export const FlexPrice = styled.div`
  display: flex;
  justify-content: center;

  font-weight: 700;

  align-items: center;
`;

export const Price = styled.p`
  margin-left: 20px;
`;

export const FootLeftStyled = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100px;

  @media screen and (min-width: 1200px) {
    top: 0%;

    width: 200px;
  }
`;

export const FootRightStyled = styled.img`
  display: none;

  position: absolute;
  top: 80%;
  right: 0;

  width: 150px;

  @media screen and (min-width: 768px) {
    display: block;
    top: 65%;
  }

  @media screen and (min-width: 1200px) {
    top: 50%;
    right: 0%;

    width: 300px;
  }
`;

export const StyledLink = styled.a`
  display: block;

  padding: 10px 22px;

  border: 1px solid #000000;
  border-radius: 10px;

  text-decoration: none;

  color: #000000;
  background-color: transparent;

  transition: color 500ms cubic-bezier(0.19, 1, 0.22, 1),
    background-color 500ms cubic-bezier(0.19, 1, 0.22, 1);

  &:hover {
    color: #ffffff;
    background-color: #000000;
  }
`;
