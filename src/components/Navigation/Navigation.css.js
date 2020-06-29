import styled from 'styled-components';

export const Container = styled.div`
 display: flex;
 background-color: ${({ theme }) => theme.colors.gray.dark};
 padding: ${({ theme }) => theme.spacing.xl}px 0;
 justify-content: space-between;
 color: white;
`
export const List = styled.ul`
 display: flex;
`