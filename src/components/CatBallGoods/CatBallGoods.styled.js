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
    width: 40%;
  }

  @media screen and (min-width: 1200px) {
    width: 40%;
  }
`;

export const InfoContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-left: 51px;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 120px;
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
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;

    margin-left: 0;
  }
`;

export const FlexPrice = styled.div`
  display: flex;
  justify-content: center;

  font-size: 10px;

  align-items: center;

  @media screen and (min-width: 1200px) {
    justify-content: flex-start;
  }
`;

export const Price = styled.p`
  font-size: 15px;
  margin-left: 20px;
  font-weight: 700;
  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
`;

export const Sale = styled.p`
  font-size: 15px;
  font-weight: 700;
  text-decoration: line-through;
  margin-left: 20px;
  color: #808080;

  @media screen and (min-width: 768px) {
    font-size: 20px;
  }
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

  color: #fff;
  font-size: 15px;
  font-weight: 500;

  text-align: center;
  text-decoration: none;

  padding: 10px 22px;

  border-radius: 50px;
  background: #00c8c8;

  @media screen and (min-width: 1200px) {
    margin-right: 40px;
    font-size: 20px;
  }
`;
