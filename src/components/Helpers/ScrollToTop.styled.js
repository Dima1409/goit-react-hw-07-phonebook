import styled from 'styled-components';

const ToTop = styled.div`
position: relative;
`
const Icon = styled.div`
  position: fixed;
  bottom: 10px;
  right: 10px;
  border: 1px solid ${({theme}) => theme.colors.font};
  background-color: ${({theme}) => theme.colors.body};
  opacity: 0.5;
  border-radius: 50%;
  z-index: 20;
  width: 25px;
  height: 25px;
  transition: 0.3s cubic-bezier(0.165, 0.84, 0.44, 1); 
  &:hover {
  cursor: pointer;
  color:${({theme}) => theme.colors.font};
  transform: scale(1.1);
  opacity: 1;
  }
`
export {Icon, ToTop};