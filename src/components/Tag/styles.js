import styled from 'styled-components'

export const Container = styled.span`
  color: ${({theme}) => theme.COLORS.BACKGROUND_900};
  background: ${({theme}) => theme.COLORS.ORANGE};
  padding: 5px 14px;
  margin-right: 6px;
  border-radius: 5px;
  font-size: 12px;
`;