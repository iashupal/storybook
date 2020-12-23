import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import ChildGuardianInfo from "../components/childGuardianInfo";
import { GuardianProps } from "../components/childGuardianInfo";
import "../components/childGuardianInfo/styles.css";
import "../App.scss";

export default {
  title: "CCF/components/ChildGuardianInfo",
  component: ChildGuardianInfo,
  decorators: [],
  argTypes: {},
} as Meta;

const Template: Story<GuardianProps> = (args) => <ChildGuardianInfo {...args} />;

export const GuardianInfo = Template.bind({});
GuardianInfo.args = {
  designation: "Surgeon",
  name: "Ashu Pal",
  email: "ashupal0005@gmail.com",
};
