import React, { useState } from "react";
import TypeSelector from "./TypeSelector";
import Question from "./Question";
import Options from "./Options";
import { useHistory } from "react-router";

const CreateSurvey = ({ surveyQue, setSurveyQue }) => {
  const history = useHistory();
  const getRandom = () => {
    return Math.floor(Math.random() * 1000 + 1);
  };
  const defaultOptions = [
    { uid: getRandom(), value: "" },
    { uid: getRandom(), value: "" },
  ];
  const [qtext, setQtext] = useState("");
  const [qtype, setQtype] = useState(0);
  const [options, setOptions] = useState(defaultOptions);

  const addOptions = () => {
    let newOption = {
      uid: getRandom(),
      value: "",
    };
    let updateOption = [...options];
    updateOption.push(newOption);
    setOptions(updateOption);
  };
  const deleteOption = (event) => {
    if (options.length === 2) {
      alert("ERROR: Question should have atleast 2 options");
    } else {
      let updateOption = [...options];
      updateOption.pop();
      setOptions(updateOption);
    }
  };

  const updateOptionText = (id, text) => {
    let updateOption = [...options];
    let changeIndex = updateOption.findIndex((x) => x.uid === id);
    updateOption[changeIndex].value = text;
    // console.log(text);
    setOptions(updateOption);
  };

  const updateSurveyQuestion = () => {
    let newSurveyQuestion = [...surveyQue];
    let newQ = {
      qtext: qtext,
      qtype: qtype,
      options: options,
    };
    newSurveyQuestion.push(newQ);
    setSurveyQue(newSurveyQuestion);
    setQtext("");
    setQtype(0);
    setOptions(defaultOptions);
  };

  const Publish = () => {
    updateSurveyQuestion();
    history.push("/published");
  };
  return (
    <div>
      <TypeSelector qtype={qtype} setQtype={setQtype} />
      {qtype !== 0 ? (
        <>
          <Question setQtext={setQtext} />
          {options.map((val, index) => {
            return (
              <Options
                key={index}
                uid={val.uid}
                addOptions={addOptions}
                deleteOption={deleteOption}
                updateOptionText={updateOptionText}
              />
            );
          })}
          <button
            className="btn btn-primary m-2"
            onClick={updateSurveyQuestion}
          >
            Add Question
          </button>
          <button className="btn btn-primary m-2" onClick={Publish}>
            Publish
          </button>
        </>
      ) : null}
    </div>
  );
};

export default CreateSurvey;
