import React from "react";
import { Story, Meta } from "@storybook/react/types-6-0";
import Heading from "../components/heading";
import { HeadingProps } from "../components/heading";
import "../components/heading/styles.css";
import "../App.scss";

export default {
  title: "CCF/components/Heading",
  component: Heading,
  decorators: [],
  argTypes: {},
} as Meta;

const Template: Story<HeadingProps> = (args: any) => <Heading {...args} />;

export const CCFHeading = Template.bind({});
CCFHeading.args = {
  heading: "Patient Medical Social History",
  subHeading: "ADHD form for evaluation and treatment",
  styleName: "medicalHeading__style",
};
