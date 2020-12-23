import * as React from "react";
import "../../layout/medicalHistory/styles.scss";
import "./styles.css";

function Tabs({
  text,
  selected,
  tabChange,
  styleName,
  image,
  steps,
  fullText,
  activeImage,
  familyTextName,
  stepsAct,
}: {
  text: string;
  selected: boolean;
  tabChange: () => void;
  styleName: string;
  image: string;
  steps: string;
  fullText: string;
  activeImage: string;
  familyTextName: string;
  stepsAct: string;
}) {
  return (
    <section className="tabsWrapper">
      <div
        onClick={tabChange}
        className={`tabContainer ${styleName} ${selected ? "activeTab" : ""}`}
      >
        {selected ? (
          <div className="step-text">
            {image && (
              <img src={activeImage} className="img-fluid" alt="icon" />
            )}
            {familyTextName && (
              <p className="tab__familyName">{familyTextName}</p>
            )}
            <p>
              <span>{steps} </span>
              <br /> {fullText}
            </p>
          </div>
        ) : (
          <div className="step-text">
            {image && <img src={image} className="img-fluid" alt="icon" />}
            {familyTextName && (
              <p className="tab__familyName">{familyTextName}</p>
            )}
            <p>
              {stepsAct && (
                <span>
                  {stepsAct} <br />
                </span>
              )}
              {text}
            </p>
          </div>
        )}
      </div>
    </section>
  );
}

export default Tabs;
