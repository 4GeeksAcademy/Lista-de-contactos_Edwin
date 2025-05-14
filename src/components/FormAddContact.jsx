export const FormAddContact = () => (
  <div>
    <div className="mb-3">
      <label for="formGroupExampleInput" className="form-label">
        Full Name
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter full name"
      ></input>
    </div>
    <div className="mb-3">
      <label for="formGroupExampleInput2" className="form-label">
        Email
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter email"
      >
      </input>
    </div>
    <div className="mb-3">
      <label for="formGroupExampleInput2" className="form-label">
        Phone
      </label>
      <input
        type="number"
        className="form-control"
        placeholder="Enter phone number"
      >
      </input>
    </div>
    <div className="mb-3">
      <label for="formGroupExampleInput2" className="form-label">
        Address
      </label>
      <input
        type="text"
        className="form-control"
        placeholder="Enter address"
      >
      </input>
    </div>
    <div className="mb-3">
      <button type="button" class="btn btn-success w-100">Save</button>
    </div>
  </div>
);
