export const ConfirmDeleteModal = ({ contactName, onConfirm, onCancel }) => {
  return (
    <div className="modal show d-block" tabIndex="-1" style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }}>
      <div className="modal-dialog">
        <div className="modal-content p-3">
          <h5 className="modal-title mb-3">¿Delete contact?</h5>
          <p>¿Are you sure to delete: <strong>{contactName}</strong>?</p>
          <div className="d-flex justify-content-end">
            <button className="btn btn-secondary me-2" onClick={onCancel}>Cancel</button>
            <button className="btn btn-danger" onClick={onConfirm}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  );
};
