import styled from '@emotion/styled';
import Cat from '../../assets/catBallPage/lastCat.png';

export const StyledSection = styled.section`
  position: relative;
  background-color: rgba(255, 210, 45, 0.8);

  @media screen and (min-width: 768px) {
    background-image: url(${Cat});
    background-repeat: no-repeat;
    background-position: right;
    background-size: 40%;
  }

  @media screen and (min-width: 1200px) {
    background-size: contain;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-size: 20px;
  font-weight: 700;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
  }
`;
