import React from 'react';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const CustomModal = ({ modalIsOpen, setModalIsOpen, checkedItems }) => (
  <Modal
    isOpen={modalIsOpen}
    onRequestClose={() => setModalIsOpen(false)}
    className="flex items-center justify-center min-h-screen px-4 py-6 text-center text-white bg-gradient-to-r from-indigo-300  via-purple-400 to-violet-600 overlay:bg-black overlay:opacity-75"
  >
    <div className="p-6 bg-orange-500 rounded shadow-lg">
      <h2 className="mb-4 text-3xl font-ice font-bold">Time's up!</h2>
      <p className="mb-4">You checked {checkedItems.length} items.</p>
      <button 
        onClick={() => setModalIsOpen(false)}
        className="px-4 py-2 text-red-500 bg-white rounded hover:bg-gray-200"
      >
        Close
      </button>
    </div>
  </Modal>
);

export default CustomModal;