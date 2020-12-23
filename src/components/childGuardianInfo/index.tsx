import React from "react";
import "./styles.css";

export interface GuardianProps {
  designation?: string;
  name?: string;
  email?: string;
  guardianStyle?: string;
}
const ChildGuardianInfo: React.FC<GuardianProps> = ({
  designation,
  name,
  email,
  guardianStyle,
}) => {
  return (
    <div className="guardian_detail">
      <p>{designation}</p>
      <h5 className={`${guardianStyle}`}>{name}</h5>
      <p>{email}</p>
    </div>
  );
};
export default ChildGuardianInfo;
