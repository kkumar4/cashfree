import React, { useEffect, useRef } from 'react';

const Modal = ({ modalCloseHandler, children }) => {
  const modalContentRef = useRef(null);

  useEffect(() => {

    function windowClickHandler(event) {

      if (!modalContentRef.current.contains(event.target)) {
        modalCloseHandler();
      }
    }

    window.addEventListener('click', windowClickHandler);

    return () => {
      window.removeEventListener('click', windowClickHandler);
    }
  }, []);

  return (
    <div className='modal'>
      <div ref={modalContentRef} className='modal-content'>
        {children}
      </div>
    </div>
  )
}

export default Modal;