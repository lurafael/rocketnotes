import styled from 'styled-components';

export const Container = styled.section`
  margin: 28px 0;
  
  > h2 {
    border-bottom: 1px solid ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({theme}) => theme.COLORS.GRAY_100};
    padding-bottom: 16px;
    margin-bottom: 24px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;