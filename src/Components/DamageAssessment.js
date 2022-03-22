import { useState } from "react";

const DamageAssessment = (props) => {
  const [background, setBackground] = useState("col-4 damages");
  const [select, setSelect] = useState(true);
  const onParamsClick = () => {
    setSelect(!select);

    setBackground(select ? "col-4 damages-select" : "col-4 damages");
  };

  return (
    <>
      <div className={background} key={props.id} onClick={onParamsClick}>
        <h6 className="m-0">{props.label}</h6>
      </div>
    </>
  );
};

export default DamageAssessment;
