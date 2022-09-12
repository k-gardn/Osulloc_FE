import React from "react";
import styles from "../cart/Cart.module.css";
function Cart() {
    return (
        <div className={styles.cartContainer}>
            <div className={styles.leftBox}>
                <div>장바구니</div>
                <div>
                    <div> 전체 선택</div>
                    <div> 전체 삭제</div>
                </div>
                <div>
                    <img src="" alt="" />
                    <div>
                        <div>메모리 인 제주 20입</div>
                        <span>포장 가능</span>
                        <span>선물 가능한 상품입니다.</span>
                    </div>
                    <button>- 1 +</button>
                    <span> 3,8000원</span>
                    <button>바로구매</button>
                    <div>
                        <button>선택상품 주문</button>
                        <button>전체상품 주문하기</button>
                        <p>
                            ! 장바구니에 보관된 상품은 3개월 후에 삭제 됩니다.
                        </p>
                    </div>
                </div>
            </div>

            <div className={styles.rightBox}>
                <div>
                    <div>
                        <span>상품 금액</span>
                        <span>+0원</span>
                    </div>
                    <div>
                        <span>상품 할인</span>
                        <span>+0원</span>
                    </div>
                    <div>
                        <span>포장비</span>
                        <span>+0원</span>
                    </div>
                    <div>
                        <span>부가 쇼핑백</span>
                        <span>+0원</span>
                    </div>
                    <div>
                        <span>배송비</span>
                        <span>+0원</span>
                    </div>
                </div>
                <div>
                    <span>결제 예상 금액</span>
                    <span>+0원</span>
                </div>
                <div>0원 주문하기</div>
            </div>
        </div>
    );
}

export default Cart;
