import styled from '@emotion/styled';
export const HeroContainer = styled.div``;

export const StyledSection = styled.section`
  position: relative;
`;

export const StyledFootLeft = styled.img`
  position: absolute;
  top: 0;
  left: 0;

  width: 100px;

  opacity: 0.5;

  @media screen and (min-width: 768px) {
    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    width: 300px;
  }
`;

export const StyledFootRight = styled.img`
  position: absolute;
  top: 59%;
  right: 0;

  width: 200px;

  opacity: 0.5;

  @media screen and (min-width: 768px) {
    top: 11%;
    right: 0;

    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    top: 11%;
    right: 0;

    width: 300px;
  }
`;

export const Title = styled.h2`
  color: #000;
  font-size: 20px;
  font-weight: 700;

  text-align: center;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    margin-bottom: 30px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 30px;
    margin-bottom: 70px;
  }
`;

export const List = styled.ul`
  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 20px;
  }
`;

export const Item = styled.li`
  display: flex;
  gap: 10;
  flex-direction: column;
  align-items: center;

  color: #000;
  font-weight: 600;

  &:not(:last-child) {
    margin-bottom: 15px;
  }

  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: center;
    gap: 10px;
    &:not(:last-child) {
      margin-bottom: 0;
    }
  }
`;
