import React, { Fragment } from "react";
import ContentCard from "../components/contentCard";
import "../components/contentCard/styles.css";
import { text, withKnobs } from "@storybook/addon-knobs";
import MedicationStatus from "../components/medicationStatus";
import ChildGuardianInfo from "../components/childGuardianInfo";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "../App.scss";

export default {
  title: "CCF/components/ContentCard",
  component: ContentCard,
  decorators: [
    (Story: any) => (
      <div style={{ width: "95%" }}>
        <Story />
      </div>
    ),
    withKnobs,
  ],
  argTypes: {},
};

export const ContentWrapper = () => {
  return (
    <Fragment>
      <ContentCard
        styleName="childTab__status"
        contents={[
          <div className="status__wrapper">
            <div className="statusInfo__cover">
              <div>
                <span className="name_wrap">PA</span>
                <p className="ccfChild_username">
                  Pal Ashu <br /> <span>MRN, 11111</span>
                  <br />
                  <span>DOB: 12/5/1996</span>
                </p>
              </div>
            </div>
            <div className="statusInfo__cover">
              <ChildGuardianInfo
                designation="Teacher"
                name="
                  Ashu Pal"
                email="ashupal0005@gmail.com"
              />
            </div>
            <div style={{ display: "none" }}>
              <ChildGuardianInfo designation="Medication Status" name="" email="" />
              <div>
                <MedicationStatus
                  text="BL1"
                  backgroundColor="var(--color-parrot)"
                  color="var(--color-white)"
                />
                <MedicationStatus
                  text="W1"
                  backgroundColor="var(--color-parrot)"
                  color="var(--color-white)"
                />
                <MedicationStatus
                  text="W2"
                  backgroundColor="var(--color-yellow)"
                  color="var(--color-white)"
                />
                <MedicationStatus
                  text="W3"
                  backgroundColor="var(--color-lightWhite)"
                  color="var(--color-navyBlue)"
                />
                <MedicationStatus
                  text="W4"
                  backgroundColor="var(--color-lightWhite)"
                  color="var(--color-navyBlue)"
                />
                <MedicationStatus
                  text="W5"
                  backgroundColor="var(--color-lightWhite)"
                  color="var(--color-navyBlue)"
                />
              </div>
            </div>
            <div className="statusInfo__cover">
              <ChildGuardianInfo
                designation="Physician"
                name="Ashu Pal"
                email="ashupal0005@gmail.com"
              />
            </div>
            <div className="statusInfo__cover">
              <div className="status_pending">
                <CircularProgressbar
                  value={70}
                  // text="70%"
                  styles={buildStyles({
                    strokeLinecap: "butt",
                    textColor: "var(--color-slaty)",
                    pathColor: "var(--color-parrot)",
                    trailColor: "var(--color-slaty)",
                  })}
                  className="graphStroke"
                />
                <ChildGuardianInfo
                  designation=""
                  name="70% Completed"
                  email="Complete Remaining 30%"
                  guardianStyle="guardianStyle"
                />
              </div>
            </div>
          </div>,
        ]}
      />
    </Fragment>
  );
};
