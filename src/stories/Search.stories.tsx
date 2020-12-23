import React, { useState } from "react";
import Search from "../components/search";
import { addDecorator } from "@storybook/react";
import "../components/search/styles.css";
import { text, withKnobs } from "@storybook/addon-knobs";
import { withConsole } from "@storybook/addon-console";
import "../App.scss";

export default {
  title: "CCF/components/Search",
  component: Search,
  decorators: [
    (Story: any) => (
      <div style={{ width: "94%" }}>
        <Story />
      </div>
    ),
    withKnobs,
  ],
  argTypes: {
    backgroundColor: { control: "color" },
  },
};
addDecorator((storyFn, context) => withConsole()(storyFn)(context));
export const InputSearch = (args: any) => {
  const placeholder = text("Placeholder", "Search child by name");
  const [search, setSearch] = useState("");
  console.log(search);
  return (
    <div>
      <Search
        type="text"
        value={search}
        placeholder={placeholder}
        variants=""
        name="search"
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
