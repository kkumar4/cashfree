import React from 'react';

import Modal from './Modal';
import Filters from './Filters';
import FiltersActionButtons from './FiltersActionButtons';

const FiltersModal = ({ modalCloseHandler }) => {
  return (
    <Modal modalCloseHandler={modalCloseHandler}>
      <Filters />
      <FiltersActionButtons />
    </Modal>
  )
}

export default FiltersModal;