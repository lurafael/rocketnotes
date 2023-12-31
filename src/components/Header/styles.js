import styled from 'styled-components';

export const Container = styled.header`
  grid-area: header;

  height: 105px;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};

  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 45px;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;

  > img {
    width: 60px;
    height: 60px;
    border-radius: 50%;
  }

  > div {
    display: flex;
    flex-direction: column;

    span {
      font-size: 14px;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    strong {
      font-size: 18px;
      color: ${({ theme }) => theme.COLORS.WHITE};
    }
  }
`;

export const Logout = styled.button`
  border: none;
  background: none;
  
  > svg {
    font-size: 36px;
    color: ${({theme}) => theme.COLORS.GRAY_100};
  }
`;