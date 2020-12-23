import React from "react";
import "./loader.css";

interface IProps {
  loading?: boolean;
  marginTop?: string;
  marginBottom?: string;
  width?: string;
  float?: string;
}
export const Loader = (props: IProps) => {
  let customStyle: any = {};
  if (props.marginBottom) {
    customStyle.marginBottom = props.marginBottom;
  }

  if (props.marginTop) {
    customStyle.marginTop = props.marginTop;
  }

  if (props.width) {
    customStyle.width = props.width;
  }

  if (props.float) {
    customStyle.float = props.float;
  }

  if (props.loading) {
    return (
      <div className="spinner" style={customStyle}>
        <div className="bounce0"></div>
        <div className="bounce1"></div>
        <div className="bounce2"></div>
        <div className="bounce3"></div>
      </div>
    );
  }
  return null;
};
