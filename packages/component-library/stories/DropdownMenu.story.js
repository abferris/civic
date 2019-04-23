import React from "react";
/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from "@storybook/react";
import { checkA11y } from "@storybook/addon-a11y";
import { withKnobs, text, color } from "@storybook/addon-knobs";
import { Dropdown } from "../src";
import { storybookStyles } from "./storyStyles.js";

const description = `
  This is some basic usage with the button with providing a label to show the text.
  Clicking should trigger an action.`;

// const propDocs = { inline: true, propTables: [Dropdown] };

export default () =>
  storiesOf("Component Lib|Basic Inputs/Dropdown List", module)
    .addDecorator(checkA11y)
    .addDecorator(story => (
      <div style={storybookStyles.storyGrid}>
        <div style={storybookStyles.storyGridItem}>{story()}</div>
      </div>
    ))
    .add("Simple usage", () => {
      const options = [
        { value: "0", label: "Murphy" },
        { value: "1", label: "Carter" },
        { value: "2", label: "Bebe" },
        { value: "3", label: "Cissi" }
      ];
      return (
        <Dropdown
          dispatch={dispatch => action => dispatch(action)}
          reduxAction={payload => console.log({ type: "ACTION", payload })}
          options={options}
        />
      );
    })
    .add("Basic usage", () => {
      const options = [
        { value: "0", label: "Murphy" },
        { value: "1", label: "Carter" },
        { value: "2", label: "Bebe" },
        { value: "3", label: "Cissi" }
      ];
      return (
        <Dropdown
          dispatch={dispatch => action => dispatch(action)}
          reduxAction={payload => console.log({ type: "ACTION", payload })}
          options={options}
        />
      );
    })
    .add("Multi-select", () => {
      const options = [
        { value: "0", label: "Murphy" },
        { value: "1", label: "Carter" },
        { value: "2", label: "Bebe" },
        { value: "3", label: "Cissi" }
      ];
      const multi = true;
      return (
        <Dropdown
          dispatch={dispatch => action => dispatch(action)}
          reduxAction={payload => console.log({ type: "ACTION", payload })}
          options={options}
          multi={multi}
        />
      );
    });
