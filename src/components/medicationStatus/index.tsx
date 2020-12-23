import React from "react";
import "./styles.css";

export interface MedicationProps {
  text: string;
  color: string;
  backgroundColor: string;
}
const MedicationStatus: React.FC<MedicationProps> = ({
  text,
  color,
  backgroundColor,
}) => {
  return (
    <span
      style={{ backgroundColor: backgroundColor, color: color }}
      className="status__badge"
    >
      {text}
    </span>
  );
};
export default MedicationStatus;
