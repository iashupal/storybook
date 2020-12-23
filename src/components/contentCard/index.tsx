import React, { Fragment } from "react";
import PropTypes from "prop-types";
import "./styles.css";

function ContentCard({ contents, styleName }) {
  return (
    <Fragment>
      {contents.map((content, index) => (
        <div className={`card_wrapper ${styleName}`} key={index}>
          {content}
        </div>
      ))}
    </Fragment>
  );
}
ContentCard.defaultProps = {
  styleName: "",
};
ContentCard.propTypes = {
  contents: PropTypes.array,
};
export default ContentCard;
