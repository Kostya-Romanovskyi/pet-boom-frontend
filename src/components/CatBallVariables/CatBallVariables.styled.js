import styled from '@emotion/styled';
export const StyledSection = styled.section`
  position: relative;
  background-color: #9cfff9;
`;

export const StyledFootLeft = styled.img`
  position: absolute;
  top: 74%;
  left: -3%;

  width: 120px;

  @media screen and (min-width: 768px) {
    top: 64%;
    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    top: 64%;
    width: 310px;
  }
`;

export const FootRight1 = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    top: 17%;
    right: 0%;

    display: block;

    width: 250px;
  }

  @media screen and (min-width: 1200px) {
    position: absolute;
    top: 8%;
    right: 8%;

    display: block;

    width: 400px;
  }
`;

export const FootRight2 = styled.img`
  display: none;
  @media screen and (min-width: 768px) {
    position: absolute;
    bottom: -3%;
    right: 4%;

    display: block;

    width: 200px;
  }

  @media screen and (min-width: 1200px) {
    position: absolute;
    bottom: -5%;
    right: 11%;

    display: block;

    width: 325px;
  }
`;

export const Info = styled.p`
  color: #000;
  font-size: 15px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: 0.9px;

  margin-bottom: 20px;

  @media screen and (min-width: 768px) {
    font-size: 20px;
    line-height: 1.66;
    max-width: 900px;
  }

  @media screen and (min-width: 1200px) {
    margin-bottom: 50px;
  }
`;

export const FlexWrapp = styled.div`
  text-align: center;
  @media screen and (min-width: 768px) {
    display: flex;
    align-items: center;
  }

  @media screen and (min-width: 1200px) {
    justify-content: space-around;
  }
`;

export const StyledImg = styled.img`
  display: block;
  width: 90%;
  margin: 0 auto;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 55%;
  }

  @media screen and (min-width: 1200px) {
    margin-left: 30px;
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
