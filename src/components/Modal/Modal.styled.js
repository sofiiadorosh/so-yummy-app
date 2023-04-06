import styled from 'styled-components';

const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  z-index: 4;

  background-color: rgba(0, 0, 0, 0.1);
`;

const CloseButton = styled.button`
  position: absolute;
  top: 18px;
  right: 18px;

  display: flex;
  align-items: center;
  justify-content: center;

  padding: 0;

  background-color: transparent;

  border: none;
  outline: none;

  cursor: pointer;

  svg {
    stroke: #333333;
  }
`;

const ModalWindow = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;

  background-color: #fafafa;
  box-shadow: 0px 4px 48px rgba(0, 0, 0, 0.1);
  border-radius: 24px;

  transform: translate(-50%, -50%) scale(1);
`;

export { Overlay, ModalWindow, CloseButton };
