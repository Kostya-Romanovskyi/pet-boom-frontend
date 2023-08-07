import styled from '@emotion/styled';

export const Section = styled.section`
  position: relative;
  background-color: #9cfff9;
`;

export const Info = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2; /* 166.667% */
  letter-spacing: 0.9px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.66;
  }

  @media screen and (min-width: 1200px) {
    max-width: 700px;
  }
`;

export const FlexContainer = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const StyledAnchor = styled.a`
  color: #fff;
  font-size: 10px;
  font-weight: 500;

  text-align: center;
  text-decoration: none;

  width: 200px;

  padding: 10px 22px;

  border-radius: 50px;
  background: #00c8c8;

  @media screen and (min-width: 768px) {
    font-size: 15px;
    height: 40px;
    display: block;

    margin-left: 60px;
  }
`;

export const BallsStyled = styled.img`
  display: block;
  width: 60%;
  margin: 0 auto;

  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    width: 80%;
  }
`;

export const CatStyled = styled.img`
  display: block;
  width: 60%;
  margin: 0 auto;

  @media screen and (min-width: 1200px) {
    width: 35%;
  }
`;

export const StyledLeft = styled.img`
  position: absolute;
  top: 46%;
  left: 0%;
  width: 100px;

  @media screen and (min-width: 768px) {
    top: 72%;
    width: 130px;
  }

  @media screen and (min-width: 1200px) {
    top: 52%;
    width: 182px;
  }
`;

export const StyledRight = styled.img`
  position: absolute;
  top: 35%;
  right: 0%;
  width: 130px;

  @media screen and (min-width: 768px) {
    top: 18%;
    width: 173px;
  }

  @media screen and (min-width: 1200px) {
    top: 18%;
    width: 238px;
  }
`;
