import styled from '@emotion/styled';

export const Section = styled.section`
  background-color: #ffd22d;
`;

export const Container = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
`;

export const StyledImg = styled.img`
  display: block;
  width: 50px;

  @media screen and (min-width: 768px) {
    width: 100px;
  }

  @media screen and (min-width: 1200px) {
    width: 150px;
  }
`;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
`;

export const Item = styled.li`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const Info = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.9px;
  margin-left: 10px;

  @media screen and (min-width: 768px) {
    font-size: 30px;
    line-height: 1.66;
  }

  @media screen and (min-width: 1200px) {
    font-size: 35px;

    margin-left: 30px;
  }
`;

export const StyledFootLeft = styled.img`
  position: absolute;
  top: -3%;
  left: -5%;

  display: block;
  width: 200px;

  @media screen and (min-width: 768px) {
    width: 200px;
  }
  @media screen and (min-width: 1200px) {
    width: 350px;
  }
`;

export const StyledFootRight = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    position: absolute;
    top: 28%;
    right: 0%;

    display: block;

    width: 250px;
  }

  @media screen and (min-width: 1200px) {
    top: 15%;
    right: 0%;
    width: 300px;
  }
`;
