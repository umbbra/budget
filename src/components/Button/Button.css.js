import styled from 'styled-components';

const RootButton = styled.button`
color: ${({ theme: { colors }, primary }) => primary ? colors.gray.light : colors.pink.normal};
  cursor: inherit;
  border: none;
  background-color: transparent;
  cursor: ${props => props.to || props.onClick || props.type === 'submit' ? 'pointer' : 'default'};
 
  `;
export const InlineButton = styled(RootButton)`
  display:block;
  padding: 10px 15px;
  margin: 0 5px 0 10px;
  color: white;
  border: none;
  border-bottom: 1px solid rgba(255, 255, 255);
  font-size: 16px;
  transition: .1s;

  &:hover{
   color: #7dc4ee;
   border-bottom: 1px solid #7dc4ee91;
  }
`;
export const RegulareButton = styled(RootButton)`
 display:block;
 padding: 0 15px;
 margin: 0 5px 0 10px;
 background-color: #ffffff08;
 color: white;
 border: none;
 border-bottom: 1px solid rgba(255, 255, 255, 0.075);
 font-size: 16px;
 border-radius: 15px;
 transition: .1s;

 &:hover{
  color: #7dc4ee;
 }
`;
