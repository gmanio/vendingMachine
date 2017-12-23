import * as React from "react";

interface AppState {
  timesClicked: number;
  on: boolean;
}

export default class App extends React.Component<{}, AppState> {
  private initialState: AppState = { timesClicked: 0, on: false };

  constructor(props: {}) {
    super(props);
  }
}