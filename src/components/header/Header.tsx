import * as React from "react";

class Header extends React.Component {
  public title = 'Vending Machine';

  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div id="header">
        <h1>{this.title}</h1>
      </div>
    )
  }
}

export default Header;
