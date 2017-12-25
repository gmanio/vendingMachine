import * as React from "react";

class BeverageItems extends React.Component {
  public beverageList = [
    { name: '식혜', value: 100, className: 'item6' },
    { name: 'v10', value: 200, className: 'item2' },
    { name: '펩시', value: 300, className: 'item1' },
    { name: '비타500', value: 400, className: 'item7' },
    { name: '2%', value: 500, className: 'item4' },
    { name: '박카스', value: 600, className: 'item8' },
    { name: '칸타타', value: 700, className: 'item3' },
    { name: '환타', value: 800, className: 'item5' }
  ]

  constructor(props: {}) {
    super(props);
  }

  public randomSort() {
    return this.beverageList.sort(() => Math.random() - 0.5);
  }

  public render(): JSX.Element {
    return (
      <ul>
        {/*<!-- [D] 새로고침 할때 마다 렌덤으로 출력, 품절은 li엘리먼트에 soldout클래스를 추가하고, 아래 <span className="soldout_msg">품절</span> 로 추가하고 button 은 disabed 시킴 --> */}
        {this.randomSort().map((item, index) => {
          return <li className={item.className} key={index}>
            <button>
              <span className="blind">{item.name}</span>
            </button>
            <span>{item.value}원</span>
          </li>
        })}
      </ul>
    )
  }
}

export default BeverageItems;