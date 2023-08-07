import styled from '@emotion/styled';

export const StyledFooter = styled.footer`
  background-color: rgba(255, 210, 45, 0.8);
`;

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StyledLogo = styled.img`
  display: block;
  width: 70px;

  @media screen and (min-width: 768px) {
    width: 100px;
  }

  @media screen and (min-width: 1200px) {
    width: 200px;
  }
`;

export const Text = styled.p`
  font-size: 10px;

  @media screen and (min-width: 768px) {
    font-size: 15px;
  }

  @media screen and (min-width: 1200px) {
    font-size: 20px;
    font-weight: 500;
  }
`;
