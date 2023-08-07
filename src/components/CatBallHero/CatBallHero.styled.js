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

export const FlexText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const StyledTitle = styled.h1`
  color: #000;
  font-size: 17px;
  font-weight: 700;

  font-size: 15px;

  margin-top: 65px;
  margin-bottom: 20px;

  text-align: center;

  background-color: rgba(255, 255, 255, 0.5);
  color: #000;
  padding: 10px;
  border: 2px solid #000;
  border-radius: 40px;

  @media screen and (min-width: 768px) {
    font-size: 20px;

    margin: 0 auto;
    margin-bottom: 20px;
    margin-top: 105px;

    width: 500px;
  }

  @media screen and (min-width: 1200px) {
    color: #000000;

    margin: 0;
    margin-bottom: 30px;

    font-size: 35px;

    width: 85%;
  }
`;

export const Text = styled.p`
  width: 130px;

  margin-bottom: 10px;

  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  color: black;
  padding: 10px;
  border: 2px solid black;
  border-radius: 40px;

  @media screen and (min-width: 1200px) {
    font-size: 20px;

    width: 200px;

    margin-bottom: 30px;
  }
`;

export const BottomArr = styled.a`
  position: absolute;
  bottom: 0%;
  left: 50%;

  transform: translate(-50%, -50%);

  display: inline-block;

  background-color: rgba(255, 255, 255, 0.5);
  text-align: center;
  color: black;
  padding: 10px;
  border: 2px solid black;
  border-radius: 35px;

  width: 200px;

  font-size: 15px;
  font-weight: 700;

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
