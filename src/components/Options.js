import React from "react";

const Options = ({ uid, addOptions, deleteOption, updateOptionText }) => {
  return (
    <div className="col-md-8 offset-md-3 col-12 input-group my-3">
      <input
        type="text"
        className="from-control"
        placeholder="Option Text"
        onChange={(event) => {
          updateOptionText(uid, event.target.value);
        }}
      />
      <div className="input-group-append">
        <button className="btn btn-outline-secondary" onClick={addOptions}>
          +
        </button>
        <button className="btn btn-outline-secondary" onClick={deleteOption}>
          -
        </button>
      </div>
    </div>
  );
};

export default Options;
