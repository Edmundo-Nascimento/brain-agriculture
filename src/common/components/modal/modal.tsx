import { useModal } from "../../../context/modal-context";

const Modal = () => {
  const { isOpen, modalContent, closeModal }: any = useModal();

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[9999] transition-opacity duration-300">
      <div className="bg-white rounded-lg shadow-lg w-5/6 h-full transform transition-transform duration-300 scale-95 overflow-y-scroll">
        <div className="">
          <span className="close z-50 bg-primary-dark rounded-full h-10 w-10 flex items-center justify-center text-primary" onClick={closeModal}>&times;</span>
        </div>
        <div className="flex justify-end">
          {modalContent}
        </div>
      </div>
    </div>
  );
};



export default Modal;
