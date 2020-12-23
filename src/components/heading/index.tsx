import React from "react";
import "./styles.css";

export interface HeadingProps {
  heading?: string;
  subHeading?: string;
  styleName?: string;
}
const Heading: React.FC<HeadingProps> = ({ heading, subHeading, styleName }) => {
  return (
    <div className="ccf__heading">
      <h3 className={`heading ${styleName}`}>{heading}</h3>
      {subHeading && <p>{subHeading}</p>}
    </div>
  );
};
export default Heading;
