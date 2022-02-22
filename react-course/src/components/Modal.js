function Modal(props) {

  function cancelHandler() {
      props.onCancel();
  }
  function confirmHandler() {
      props.onConfirm();
  }

  return (
    <div>
      <p className="modal">
        Are you sure?
        <button className="btn btn--alt" onClick={cancelHandler}>Confirm</button>
        <button className="btn" onClick={confirmHandler}>Cancel</button>
      </p>
    </div>
  );
}

export default Modal;
