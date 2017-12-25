import * as React from "react";

class Footer extends React.Component {
  public title = 'Vending Machine';

  constructor(props: {}) {
    super(props);
  }

  render(): JSX.Element {
    return (
      <div id="footer">
        <address>
          <strong>Vending Machine</strong>
        </address>
      </div>
    )
  }
}

export default Footer;
