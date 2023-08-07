import styled from '@emotion/styled';
import HeroBG from '../../assets/catBallPage/HeroBG.jpg';

export const StyledSection = styled.section`
  /* background-color: #9cfff9; */
  background-image: url(${HeroBG});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  height: 100vh;

  @media screen and (min-width: 1200px) {
    background-size: cover;
  }

  position: relative;
`;

export const MainContainer = styled.div`
  position: relative;
`;

export const StyledLogo = styled.img`
  position: absolute;
  top: 0%;
  left: 0%;

  display: block;

  width: 100px;

  @media screen and (min-width: 768px) {
    width: 150px;
  }

  @media screen and (min-width: 1200px) {
    width: 200px;
  }
`;
export const LeftFoot = styled.img`
  position: absolute;
  top: 70%;
  left: 0;

  width: 100px;

  @media screen and (min-width: 768px) {
    top: 51%;
    left: 0;

    width: 150px;
  }

  @media screen and (min-width: 1200px) {
    top: 44%;
    left: 0;

    width: 275px;
  }
`;

export const RightFoot = styled.img`
  position: absolute;
  top: 5%;
  right: 0;

  width: 145px;

  @media screen and (min-width: 768px) {
    top: 0;
    right: 0;
  }

  @media screen and (min-width: 1200px) {
    top: -5%;
    right: 0;

    width: 320px;
  }
`;
export const TitleContainer = styled.div`
  @media screen and (min-width: 1200px) {
    padding-top: 100px;
  }
`;
export const FlexContainer = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-between;
    /* align-items: center; */
  }

  @media screen and (min-width: 1200px) {
    display: flex;
    justify-content: space-between;
  }
`;

export const StyledTitle = styled.h1`
  position: absolute;
  bottom: 10%;
  left: 50%;

  transform: translate(-50%, -50%);

  color: #000;
  font-size: 17px;
  font-weight: 700;

  display: inline-block;
  font-size: 24px;

  /* display: inline-block;
  background-color: rgba(255, 255, 255, 0.5);
  color: black;
  padding: 10px;
  border: 2px solid black;
  border-radius: 5px; */

  /* margin-bottom: 15px; */

  width: 325px;

  @media screen and (min-width: 768px) {
    left: 50%;

    font-size: 17px;
  }

  @media screen and (min-width: 1200px) {
    bottom: 82%;
    left: 50%;

    color: #000000;

    font-size: 50px;
    width: 1000px;
  }
`;

export const StyledSubTitle = styled.p`
  color: #000;
  font-size: 15px;
  margin-bottom: 15px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    margin-bottom: 25px;
  }
`;

export const ImgContainer = styled.div`
  /* text-align: center; */
`;

export const HeroStyledImg = styled.img`
  display: block;
  margin: 0 auto;
  width: 90%;
  margin-bottom: 10px;

  @media screen and (min-width: 768px) {
    margin-bottom: 0;
  }
`;

export const StyledAnchorMob = styled.a`
  display: block;

  color: #fff;
  font-size: 10px;
  font-weight: 500;

  text-align: center;
  text-decoration: none;

  width: 200px;
  padding: 10px 22px;
  margin: 0 auto;

  border-radius: 50px;
  background: #00c8c8;

  @media screen and (min-width: 768px) {
    display: none;
  }
`;

export const StyledAnchor = styled.a`
  display: none;

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
    display: block;
    font-size: 15px;
  }
`;

export const BottomArr = styled.a`
  position: absolute;
  bottom: 0%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: inline-block;

  color: #000000;
  font-size: 15px;
  font-weight: 500;

  text-align: center;
  text-decoration: none;

  animation: moveUpDown 2s infinite;

  /* @keyframes moveUpDown {
    0% {
      transform: translateY(0);
    }
    50% {
      transform: translateY(-10px);
    }
    100% {
      transform: translateY(0);
    }
  } */

  /* 
  @media screen and (min-width: 768px) {
    left: 42%;

    display: block;
    font-size: 15px;
  } */

  @media screen and(min-width: 1200px) {
  }
`;
