import "./DeleteModal.css";

const DeleteModal = ({
  open,
  onClose,
  onConfirm,
}) => {

  if (!open) return null;

  return (

    <div className="modal-overlay">

      <div className="delete-modal">

        <h3>Delete Task?</h3>

        <p>
          This action cannot be undone.
        </p>

        <div className="modal-actions">

          <button
            onClick={onClose}
          >
            Cancel
          </button>

          <button
            className="danger"
            onClick={onConfirm}
          >
            Delete
          </button>

        </div>

      </div>

    </div>

  );

};

export default DeleteModal;