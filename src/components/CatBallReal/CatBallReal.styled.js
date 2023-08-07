import styled from '@emotion/styled';
export const HeroContainer = styled.div``;

export const Info = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2; /* 166.667% */
  letter-spacing: 0.9px;

  margin-bottom: 40px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.66;
  }

  @media screen and (min-width: 1200px) {
    max-width: 700px;
  }
`;

export const FlexWrapp = styled.div`
  text-align: center;

  @media screen and (min-width: 768px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
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
  }
`;

export const StyledImg = styled.img`
  display: block;
  width: 100%;

  @media screen and (min-width: 768px) {
    width: 50%;
  }

  @media screen and (min-width: 1200px) {
    width: 70%;
  }
`;

export const FootMob = styled.img`
  position: absolute;
  top: 27%;
  right: 23%;
  display: block;
  width: 100px;

  @media screen and (min-width: 768px) {
    top: 44%;
    right: 46%;
    width: 207px;
  }

  @media screen and (min-width: 1200px) {
    top: 3%;
    right: 0%;
    width: 330px;
  }
`;

export const FootTab = styled.img`
  display: none;

  @media screen and (min-width: 768px) {
    display: block;

    position: absolute;
    top: 50%;
    left: -4%;
    width: 220px;
  }

  @media screen and (min-width: 1200px) {
    position: absolute;
    top: 38%;
    left: 2%;

    width: 450px;
  }
`;
