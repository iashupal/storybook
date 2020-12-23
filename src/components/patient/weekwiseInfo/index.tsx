import React from "react";
import "./styles.css";

function WeekwiseInfo({ weekCount, weekDate, contents, styleName }) {
  return (
    <div className="week__wrapper">
      <h5>{weekCount}</h5>
      <p>{weekDate}</p>
      {contents.map((content, index) => (
        <div className={`weekcard_wrapper ${styleName}`} key={index}>
          {content}
        </div>
      ))}
    </div>
  );
}
export default WeekwiseInfo;
