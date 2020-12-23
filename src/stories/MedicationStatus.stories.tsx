import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import MedicationStatus from "../components/medicationStatus";
import { MedicationProps } from "../components/medicationStatus";
import { text, withKnobs } from "@storybook/addon-knobs";
import "../components/medicationStatus/styles.css";
import "../App.scss";

export default {
  title: "CCF/components/MedicationStatus",
  component: MedicationStatus,
  decorators: [withKnobs],
  argTypes: {
    backgroundColor: { control: "color" },
    color: { control: "color" },
  },
} as Meta;

const Template: Story<MedicationProps> = (args: any) => (
  <MedicationStatus {...args} />
);

export const Status1 = Template.bind({});
Status1.args = {
  backgroundColor: "var(--color-parrot)",
  color: "var(--color-white)",
  text: "BL1",
};
export const Status2 = Template.bind({});
Status2.args = {
  backgroundColor: "var(--color-parrot)",
  color: "var(--color-white)",
  text: "W1",
};
export const Status3 = Template.bind({});
Status3.args = {
  backgroundColor: "var(--color-yellow)",
  color: "var(--color-white)",
  text: "W2",
};
export const Status4 = Template.bind({});
Status4.args = {
  backgroundColor: "var(--color-lightWhite)",
  color: "var(--color-navyBlue)",
  text: "W3",
};
export const Status5 = Template.bind({});
Status5.args = {
  backgroundColor: "var(--color-lightWhite)",
  color: "var(--color-navyBlue)",
  text: "W4",
};
export const Status6 = Template.bind({});
Status6.args = {
  backgroundColor: "var(--color-lightWhite)",
  color: "var(--color-navyBlue)",
  text: "W5",
};
