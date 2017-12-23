import * as React from "react";

interface BeverageState {

}

export default class BeverageItems extends React.Component<{}, BeverageState> {
  public beveragItem = [
    { name: '펩시', value: 300 },
    { name: 'v10', value: 200 },
    { name: '칸타타', value: 700 },
    { name: '2%', value: 500 },
    { name: '환타', value: 800 },
    { name: '식혜', value: 100 },
    { name: '비타500', value: 400 },
    { name: '박카스', value: 600 },
  ]

  constructor(props: {}) {
    super(props);
  }

  public randomSort() {

  }

  public render(): JSX.Element {
    return (
      <ul>
        <li className="item1">
          <button><span className="blind">펩시</span></button>
          <span>300원</span></li>
        <li className="item2">
          <button><span className="blind">V10</span></button>
          <span>200원</span></li>
        <li className="item3">
          <button><span className="blind">칸타타</span></button>
          <span>700원</span></li>
        <li className="item4">
          <button><span className="blind">2%</span></button>
          <span>500원</span></li>
        <li className="item5">
          <button><span className="blind">환타</span></button>
          <span>800원</span></li>
        <li className="item6">
          <button><span className="blind">식혜</span></button>
          <span>100원</span></li>
        <li className="item7">
          <button><span className="blind">비타500</span></button>
          <span>400원</span></li>
        <li className="item8">
          <button><span className="blind">박카스</span></button>
          <span>600원</span></li>
      </ul>
    )
  }
}