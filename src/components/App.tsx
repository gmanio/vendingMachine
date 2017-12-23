import * as React from "react";

interface AppState {
  timesClicked: number;
  on: boolean;
}

export default class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);
  }
}