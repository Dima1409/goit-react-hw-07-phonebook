import styled from 'styled-components';

const ModeButton = styled.button`
  position: relative;
  /* top: 10px;
  right: 10px; */
  padding: 15px;
  border-radius: 50%;
  background: ${(props) => props.theme.text};
  color: ${(props) => props.theme.body};
  background: red;
  color: yellow;
  border: none;
  width: 30px;
  height: 30px;
  cursor: pointer;
  transition: 0.3s all;
  &:hover {
    ${(props) => props.theme.text};
  box-shadow: red;
  }
`
const Wrapper = styled.div`
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
`
export {ModeButton, Wrapper};