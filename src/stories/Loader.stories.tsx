import React, { Fragment, useState } from "react";
import { Loader } from "../shared/loaders";
import "../shared/loaders/loader.css";
import "../App.scss";

export default {
  title: "CCF/components/Loader",
  component: Loader,
  decorators: [],
  argTypes: {},
};

export const LoaderComp = () => {
  const [isSaving, setIsSaving] = useState(true);
  return (
    <Fragment>
      <Loader
        loading={isSaving}
        marginBottom="0px"
        marginTop="8px"
        width="368px"
      />
    </Fragment>
  );
};
