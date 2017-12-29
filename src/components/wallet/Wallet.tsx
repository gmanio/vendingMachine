import * as React from "react";
import { connect } from 'react-redux';

interface IWallet {
  currentMoney: number;
}

class Wallet extends React.Component<{}, IWallet> {
  private coins = [
    { className: 'w50', value: 50 },
    { className: 'w100', value: 100 },
    { className: 'w500', value: 500 },
    { className: 'w1000', value: 1000 }
  ]

  constructor(props: any) {
    super(props);
    this.state = { currentMoney: 10000 };
  }

  componentDidMount() {
    console.log(this.props);
  }

  decreaseMoney(value: number) {
    this.setState(this.state, { currentMoney: this.state.currentMoney - value });
  }

  selectMoney(elTarget: HTMLElement, value: number) {
    this.decreaseMoney(value);
    debugger;
  }

  public handleClick() {
    debugger;
  }

  public render(): JSX.Element {
    return (
      <div className="wallet" id="_wallet">
        {/*<!-- [D] 돈이 drag 될때
                       li엘리먼트 아래에 div 먼저 복사 w_draggable 클래스 추가 후
                       위치값 변경
                       예:) <div className="w500 w_draggable" style="top:30px;left:200px;"><span>50원</span></div>
              //--> */}
        <h3>내 주머니</h3>
        <ul>
          {this.coins.map((coin, index) => (
            <li key={index}>
              <div className={`${coin.className} _drag_able`} onClick={(e) => {
                this.selectMoney(e.currentTarget, coin.value)
              }}>
                <span className="blind">${coin.value}원</span>
              </div>
            </li>
          ))}
        </ul>
        <p className="my_money">지금 내 돈: <span>{this.state.currentMoney}</span>원</p>
      </div>
    )
  }
}

// export default Wallet;
export default connect((state) => {
  return state.wallet;
}, (dispatch) => ({
  handleClick: this.handleClick
}))(Wallet)