import * as React from "react";
import BeverageItems from '../../components/BeverageItem';
import Footer from '../../components/footer/Footer';
import Header from '../../components/header/Header';
import Wallet from '../../components/wallet/Wallet';

class Machine extends React.Component {
  constructor(props: {}) {
    super(props);
  }

  public render() {
    return (
      <div id="wrap">
        <Header/>
        {/*<!-- container --> */}
        <div id="container">
          {/*<!-- content --> */}
          <div id="content">
            <div className="machine">
              <div className="product_area" id="_product_area">
                <h2 className="blind">상품선택</h2>
                <BeverageItems/>
              </div>
              <div className="pay_area">
                <h2 className="blind">금전투입</h2>
                <div className="insert_area" id="_insert_area">
                  <h3>투입구</h3>
                  <div className="insert"><span>0</span>원</div>
                  <div className="insert_papermoney _drop_able"><span className="blind">지폐투입</span></div>
                  <div className="insert_coin _drop_able"><span className="blind">동전투입</span></div>
                  <div className="return_money"><span className="blind">반환구</span></div>
                  <button id="_btn_money_return"><span className="blind">반환버튼</span></button>
                </div>
                <Wallet/>
              </div>
              <div className="console_area" id="_console_area">
                <h2 className="blind">콘솔</h2>
                {/*<!-- [D] 확인을 위한 메시지 임의 출력 개발반영 이후 삭제하세요. --> */}
                {/*<!-- 메시지 --> */}
                {/*<!-- //메시지 --> */}
              </div>
            </div>
          </div>
          {/*<!-- //content --> */}
          {/*<!-- aside --> */}
          <div className="aside">
            <h2>자바스크립트를 이용한 가상의 자동판매기 구현 </h2>
            <h3>상품전시 영역</h3>
            <p>상품이 전시되고, 사용자가 상품을 클릭하여 물건을 구매하는 영역입니다.</p>
            <ol>
              <li>상품은 페이지가 로드 될 때 8종이 랜덤으로 진열됩니다. 이 진열은 ‘새로 고침’ 할 때마다 랜더믹 하게 뿌립니다.</li>
              <li>같은 상품을 중복하여 진열할 수 없습니다.</li>
              <li>상품의 가격은 100원부터 800원 까지 모두 다릅니다.</li>
              <li>상품의 사진 또는 가격을 클릭하면 구매하는 것으로 합니다.</li>
              <li>화면에는 보이지 않지만 상품에는 재고(수량)이 있습니다. 수량은 각자 정하고, 그 수량이 모두 소진(품절) 되었을 때에는 상품을 구매할 수 없습니다. ‘품절 되었다’는 상황을 어떤 방식으로 묘사하면 좋을지는 본인이
                판단하여 만들어주세요. 사용자가 인지 할 정도면 됩니다.
              </li>
              <li>재고 또한 페이지를 ‘새로 고침’ 할 때마다 랜더믹 하게 변합니다. (최소수량 1개, 최대 수량3개)</li>
            </ol>
            <h3>금전 투입 영역</h3>
            <p>상품을 구매하기 위해 동전이나 지폐를 투입하며 물건을 구매하면 충전한 돈을 삭감하는 기능을 하는 영역입니다.</p>
            <ol>
              <li>좌측 끝에는 동전/지폐 투입구, 우측에는 지폐와 동전이 자리하게 됩니다.</li>
              <li>내 주머니에 들어있는 돈은 10,000원 입니다. 주머니 안의 돈은 동전과 지폐의 구분이 없습니다. 꺼내는 대로(우측의 동전 또는 지폐 버튼을 클릭해서 드래그 하는 것을 ‘꺼낸다’ 라고 표현합니다) 지폐가 되기도,
                동전이 되기도 합니다.
              </li>
              <li>우측의 지폐 또는 동전을 드래그해서, 좌측 투입구에 드롭 하면 돈을 넣은 것이 됩니다.</li>
              <li>돈을 넣으면, 투입구에 현재 얼마가 들어갔는지 표시됩니다. 자판기가 구식이라 3,000원 이상 들어가지 않으며, 지폐는 2장 이상 들어가지 않습니다. 동전은 투입 제한이 없습니다.</li>
              <li>돈을 드래그해서 투입구에 드롭 해야 하는데, 실수로 투입구 바깥 영역에 드롭 하는 경우 투입구에 돈이 올라가지 않고 내 주머니에서도 그만큼 깎이게 됩니다. 돈을 떨어뜨린 것입니다. 다시 주울 수는 없습니다.</li>
              <li>상품을 구매한 경우 투입구의 금액 표시가 차감된 금액으로 바뀌어 표시 되어야 합니다.</li>
              <li>반환 버튼을 누르면 투입구에 표시된 금액이 내 주머니로 반환됩니다.</li>
            </ol>
            <h3>콘솔 영역</h3>
            <p>모든 행동에 대한 메시지를 출력하는 영역입니다.</p>
            <ol>
              <li>상품 전시 영역과 금전 투입 영역에서 일어나는 모든 행동에 대한 메시지를 출력합니다.</li>
              <li>콘솔 내용은 스크롤이 가능하도록 합니다.</li>
              <li>스크롤은 항상 최신 정보 최 하단에 위치(유지)하여 최신 정보를 볼 수 있도록 해야 합니다.</li>
            </ol>
          </div>
          {/*<!-- //aside --> */}
          <div id="dragging_layer">

          </div>
        </div>
        {/*<!-- //container --> */}
        <Footer/>
      </div>
    )
  }
}

export default Machine;