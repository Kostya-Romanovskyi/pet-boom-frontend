import styled from '@emotion/styled';

export const Section = styled.section`
  padding: 40px 0;
`;

export const ImgContainer = styled.div`
  display: flex;

  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 768px) {
    flex-direction: row;
  }
`;

export const FirstImage = styled.img`
  display: block;
  width: 100%;
  margin-bottom: 30px;

  @media screen and (min-width: 768px) {
    width: 50%;
    margin-bottom: 0;
  }
`;

export const SecondImage = styled.img`
  display: block;
  width: 100%;
  @media screen and (min-width: 768px) {
    width: 52%;
    margin-left: 20px;
  }
`;
