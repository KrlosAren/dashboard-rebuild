import React, { useEffect, useState } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children = null }) => {
  const [isBrowser, setIsBrowser] = useState(false);

  useEffect(() => {
    setIsBrowser(true);
  }, []);

  const target = document.getElementById('modal');
  return createPortal(
    <div aria-hidden={true} role='button' className='modal'>
      {children}
    </div>,
    target
  );
};

export default Modal;
