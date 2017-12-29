import * as React from "react";

interface HeaderState {
  title: string
}

interface HeaderProps {
  onClickHeader: Function
}

class Header extends React.Component<HeaderProps, HeaderState> {
  public title = 'Vending Machine';

  constructor(props) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div id="header" onClick={this.props.onClickHeader}>
        <h1>{this.title}</h1>
      </div>
    )
  }

}

export default Header;
