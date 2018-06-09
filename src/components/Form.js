import React from "react";
import { TextField } from '@material-ui/core';

export class Form extends React.Component {
  render() {
    return (
      <div>
        <TextField
          id="coefficient"
          label="Coefficient"
          type="number"
          />
        <TextField
          id="speed"
          label="Speed"
          type="number"
        />
      </div>
    )
  }
}
