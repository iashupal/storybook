import React, { useState, Fragment } from "react";
import Tabs from "../components/tabs";
import generalInfo from "../assets/images/svg-icons/general-info.svg";
import patient from "../assets/images/svg-icons/patient.svg";
import family from "../assets/images/svg-icons/family.svg";
import parentMissingHover from "../assets/images/icons/parent-missing-hover.png";
import birthIcon from "../assets/images/white_icon/birth.png";
import birth from "../assets/images/svg-icons/birth.svg";
import referral from "../assets/images/svg-icons/referral.svg";
import medical from "../assets/images/svg-icons/medical.svg";
import development from "../assets/images/svg-icons/development.svg";
import behaviour from "../assets/images/svg-icons/behaviour.svg";
import therapy from "../assets/images/svg-icons/therapy.svg";
import psychology from "../assets/images/svg-icons/psychology.svg";
import diagnosis from "../assets/images/svg-icons/diagnosis.svg";
import referralIcon from "../assets/images/white_icon/referral.png";
import medicalIcon from "../assets/images/white_icon/medical.png";
import developmentIcon from "../assets/images/white_icon/development.png";
import behaviourIcon from "../assets/images/white_icon/behaviour.png";
import therapyIcon from "../assets/images/white_icon/therapy.png";
import physcoIcon from "../assets/images/white_icon/physco_test.png";
import diagnosisIcon from "../assets/images/white_icon/diagnosis.png";
import GeneralForm from "../components/medical/generalForm";
import {
  text,
  boolean,
  number,
  color,
  object,
  array,
  optionsKnob,
  withKnobs,
} from "@storybook/addon-knobs";
import "../components/medical/styles.css";
import "../components/tabs/styles.css";
import "../App.scss";

export default {
  title: "CCF/Components/Tab",
  component: Tabs,
  decorators: [
    (Story: any) => (
      <div style={{ width: "95%", margin: "0 auto" }}>
        <Story />
      </div>
    ),
    withKnobs,
  ],
  argTypes: {
    // tabChange: { action: "message changes" },
  },
};

export const SocialHistory = (args: any) => {
  const halfText = text("Tab name", "General");
  const halfText1 = text("Tab name1", "Family");
  const halfText2 = text("Tab name2", "Birth");
  const halfText3 = text("Tab name3", "Referral");
  const halfText4 = text("Tab name4", "Medical");
  const halfText5 = text("Tab name5", "Development");
  const halfText6 = text("Tab name6", "Behaviour");
  const halfText7 = text("Tab name7", "Therapy");
  const halfText8 = text("Tab name8", "Psychology");
  const halfText9 = text("Tab name9", "Diagnosis");
  const fullText = text("Tab heading", "General Information");
  const fullText1 = text("Tab heading1", "Family Background");
  const fullText2 = text("Tab heading2", "Birth History");
  const fullText3 = text("Tab heading3", "Referral Concerns");
  const fullText4 = text("Tab heading4", "Medical History");
  const fullText5 = text("Tab heading5", "Development Profile");
  const fullText6 = text("Tab heading6", "Behaviour Profile");
  const fullText7 = text("Tab heading7", "Therapy/Counselling");
  const fullText8 = text("Tab heading8", "Psychological Testing");
  const fullText9 = text("Tab heading9", "Previous Diagnosis");

  const [tab, changeTab] = useState(0);
  const isFormSave = () => {
    // this.loadPatientList();
    console.log("Ashu");
  };
  return (
    <Fragment>
      <div className="medical__tabs">
        <Tabs
          styleName="profileTab"
          text={halfText}
          steps="Step 1 of 10"
          stepsAct=""
          fullText={fullText}
          familyTextName=""
          image={patient}
          activeImage={generalInfo}
          tabChange={() => changeTab(0)}
          selected={tab === 0}
        />
        <Tabs
          styleName="profileTab"
          text={halfText1}
          steps="Step 2 of 10"
          stepsAct=""
          fullText={fullText1}
          familyTextName=""
          image={family}
          activeImage={parentMissingHover}
          tabChange={() => changeTab(1)}
          selected={tab === 1}
        />
        <Tabs
          styleName="profileTab"
          text={halfText2}
          steps="Step 3 of 10"
          stepsAct=""
          fullText={fullText2}
          image={birth}
          familyTextName=""
          activeImage={birthIcon}
          tabChange={() => changeTab(2)}
          selected={tab === 2}
        />
        <Tabs
          styleName="profileTab"
          text={halfText3}
          steps="Step 4 of 10"
          stepsAct=""
          fullText={fullText3}
          image={referral}
          familyTextName=""
          activeImage={referralIcon}
          tabChange={() => changeTab(3)}
          selected={tab === 3}
        />
        <Tabs
          styleName="profileTab"
          text={halfText4}
          steps="Step 5 of 10"
          stepsAct=""
          fullText={fullText4}
          image={medical}
          familyTextName=""
          activeImage={medicalIcon}
          tabChange={() => changeTab(4)}
          selected={tab === 4}
        />
        <Tabs
          styleName="profileTab"
          text={halfText5}
          steps="Step 6 of 10"
          stepsAct=""
          fullText={fullText5}
          image={development}
          familyTextName=""
          activeImage={developmentIcon}
          tabChange={() => changeTab(5)}
          selected={tab === 5}
        />
        <Tabs
          styleName="profileTab"
          text={halfText6}
          steps="Step 7 of 10"
          stepsAct=""
          fullText={fullText6}
          image={behaviour}
          familyTextName=""
          activeImage={behaviourIcon}
          tabChange={() => changeTab(6)}
          selected={tab === 6}
        />
        <Tabs
          styleName="profileTab"
          text={halfText7}
          steps="Step 8 of 10"
          stepsAct=""
          fullText={fullText7}
          image={therapy}
          familyTextName=""
          activeImage={therapyIcon}
          tabChange={() => changeTab(7)}
          selected={tab === 7}
        />
        <Tabs
          styleName="profileTab"
          text={halfText8}
          steps="Step 9 of 10"
          stepsAct=""
          fullText={fullText8}
          image={psychology}
          familyTextName=""
          activeImage={physcoIcon}
          tabChange={() => changeTab(8)}
          selected={tab === 8}
        />
        <Tabs
          styleName="profileTab"
          text={halfText9}
          steps="Step 10 of 10"
          stepsAct=""
          fullText={fullText9}
          image={diagnosis}
          familyTextName=""
          activeImage={diagnosisIcon}
          tabChange={() => changeTab(9)}
          selected={tab === 9}
        />
      </div>
      {tab === 0 && <p>General Information</p>}
      {tab === 1 && <p>Family Background</p>}
      {tab === 2 && <p>Birth History</p>}
      {tab === 3 && <p>Referral Concerns</p>}
      {tab === 4 && <p>Medical History</p>}
      {tab === 5 && <p>Development Profile</p>}
      {tab === 6 && <p>Behaviour Profile</p>}
      {tab === 7 && <p>Therapy/Counseling</p>}
      {tab === 8 && <p>Psychological Testing</p>}
      {tab === 9 && <p>Previous Diagnosis</p>}
    </Fragment>
  );
};
