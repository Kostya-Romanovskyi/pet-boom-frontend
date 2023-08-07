import styled from '@emotion/styled';

export const StyledSection = styled.section`
  position: relative;
  background-color: #ffd22d;
`;

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
  }
`;

export const StyledFoot = styled.img`
  position: absolute;
  top: 0;
  right: 0;

  width: 200px;

  @media screen and (min-width: 768px) {
    top: 45%;
    right: 0%;
    width: 300px;
    opacity: 0.5;
  }

  @media screen and (min-width: 1200px) {
    opacity: 0.5;
    top: 0%;
    right: 0%;
  }
`;

export const StyledFootLeft = styled.img`
  position: absolute;
  bottom: 30%;
  left: 0;

  width: 200px;

  @media screen and (min-width: 768px) {
    bottom: -10%;
    left: -7%;
    width: 370px;
  }
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;

  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;

    width: 55%;
  }
`;

export const InfoContainer = styled.div`
  text-align: center;

  @media screen and (min-width: 1200px) {
    text-align: left;
    margin-left: 145px;
  }
`;

export const Info = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2; /* 166.667% */
  letter-spacing: 0.9px;

  text-align: left;

  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.66;
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
  }
  @media screen and (min-width: 1200px) {
    margin-right: 40px;
  }
`;

export const DesctopFoot = styled.img`
  display: none;
  @media screen and (min-width: 1200px) {
    position: absolute;
    bottom: -6%;
    right: 12%;

    display: block;

    width: 335px;
  }
`;
