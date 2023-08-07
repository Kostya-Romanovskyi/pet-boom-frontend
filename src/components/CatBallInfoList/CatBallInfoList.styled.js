import styled from '@emotion/styled';

export const StyledSection = styled.section`
  background-color: #9cfff9;
`;

export const Title = styled.h2`
  color: #000;
  font-size: 20px;
  font-weight: 700;

  text-align: center;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 50px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 60px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
`;

export const Item = styled.li`
  display: flex;

  justify-content: space-around;
  align-self: flex-start;

  margin-bottom: 40px;
  margin-left: 20px;

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.66;

    margin-bottom: 40px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const Info = styled.p`
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2; /* 166.667% */
  letter-spacing: 0.9px;

  margin-left: 20px;

  &::first-letter {
    text-transform: uppercase;
  }

  @media screen and (min-width: 768px) {
    font-size: 18px;
    line-height: 1.66;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
  }
`;

export const FlexImg = styled.div`
  display: flex;
  justify-content: space-around;
`;

export const StyledBall = styled.img`
  display: block;
  width: 30%;

  @media screen and (min-width: 1200px) {
    width: 37%;
  }
`;

export const StyledCat = styled.img`
  display: block;
  width: 160px;

  @media screen and (min-width: 768px) {
    width: 350px;
  }

  @media screen and (min-width: 1200px) {
    width: 60%;
  }
`;

export const StyledFootLeft1 = styled.img`
  position: absolute;
  top: 15%;
  left: -6%;

  width: 140px;

  @media screen and (min-width: 768px) {
    left: -2%;

    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const StyledFootLeft2 = styled.img`
  position: absolute;
  top: 50%;
  left: -6%;

  width: 140px;

  @media screen and (min-width: 768px) {
    left: -2%;

    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const StyledFootRight1 = styled.img`
  position: absolute;
  top: 15%;
  right: 0%;

  display: none;

  width: 140px;

  @media screen and (min-width: 768px) {
    display: block;
    right: 0%;

    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const StyledFootRight2 = styled.img`
  position: absolute;
  top: 50%;
  right: 100%;

  display: none;

  width: 140px;

  @media screen and (min-width: 768px) {
    display: block;

    right: 0%;

    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;
