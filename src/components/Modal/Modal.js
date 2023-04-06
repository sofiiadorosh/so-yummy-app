import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { RxCross2 } from 'react-icons/rx';

import { Overlay, ModalWindow, CloseButton } from './Modal.styled';

export function UserModal({ children, state, stateFn }) {
  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        stateFn('closed');
      }
    };
    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [state, stateFn]);

  const handleBackdropClick = e => {
    if (e.currentTarget === e.target) {
      stateFn('closed');
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalWindow>
        <CloseButton type="button" onClick={() => stateFn('closed')}>
          <RxCross2 size={20} />
        </CloseButton>
        {children}
      </ModalWindow>
    </Overlay>,
    document.querySelector('#modal')
  );
}
