import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import GeneralForm from "../components/medical/generalForm";
import { withKnobs } from "@storybook/addon-knobs";
import "../App.scss";
import "../components/medical/styles.css";

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  title: "CCF/Components/GeneralForm",
  component: "GeneralForm",
  decorators: [
    (Story: any) => (
      <div style={{ width: "95%", margin: "0 auto" }}>
        <Story />
      </div>
    ),
    withKnobs,
  ],
  argTypes: {},
};

export const MedicalGeneralForm = (args: any) => {
  const isFormSave = () => {
    console.log("Ashu");
  };
  return <div>{/* <GeneralForm id="1" isFormSave={isFormSave} /> */}</div>;
};
