import React from "react";

const Question = ({ setQtext }) => {
  return (
    <div className="col-md-8 offset-md-3 col-12 input-group my-3">
      <div className="input-group-prepend">
        <span className="input-group-text" id="basic-addon1">
          ?
        </span>
      </div>
      <input
        type="text"
        className="from-control"
        placeholder="Question"
        onChange={(event) => {
          setQtext(event.target.value);
        }}
      />
    </div>
  );
};

export default Question;
