import styled from 'styled-components';
import Wrapper from '../Wrapper';

export const Container = styled.div`
 display: flex;
 background-color: ${({ theme }) => theme.colors.gray.dark};
 padding: ${({ theme }) => theme.spacing.xl}px 0;
 justify-content: space-between;
 color: white;
`;

export const NavigationWrapper = styled(Wrapper)`
 display: flex;
 justify-content: space-between;
`;

export const List = styled.ul`
 display: flex;
 a{
  color: white;
  text-decoration:none;
 }
`;