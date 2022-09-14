import React, { useState } from "react";
import styles from "../detail/Detail.module.css";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Link from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getdetail } from "../../redux/modules/detailSlice";
import { postdetail } from "../../redux/modules/detailSlice";
import { moneyForm } from "../../utils/moneyForm";

const Detail = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();

  const [count, setCount] = useState(parseInt("1"));
  const [pack, setPack] = useState(false);
  const [packPrice, setPackPrice] = useState(0);

  const selectPackHandler = (e) => {
    e.preventDefault();
    setPack(e.target.value);
  };
  console.log("pack > ", pack);
  console.log("packPrice > ", packPrice);

  useEffect(() => {
    if (pack === true) {
      return setPackPrice(parseInt("2000"));
    } else {
      return setPackPrice(parseInt("0"));
    }
  }, [pack]);

  const breadcrumbs = [
    <Link underline="hover" key="1" color="inherit" href="/">
      Home
    </Link>,
    <Link underline="hover" key="2" color="inherit" href={`/products/${id}`}>
      product
    </Link>,
  ];

  const detail = useSelector((state) => state.detail);
  const data = detail?.detail;
  console.log(data?.content);

  useEffect(() => {
    dispatch(getdetail(id));
  }, [dispatch]);

  const cartHandler = (e) => {
    e.preventDefault();
    const cart = {
      productId: id,
      count,
      pack,
    };
    if (localStorage.getItem("email") === null) {
      alert("로그인 후 이용해주세요.");
    } else {
      dispatch(postdetail(cart)).then((res) =>
        res.payload === `DUPLICATE_CART` ? "" : navigate("/cart")
      );
    }
  };

  return (
    <>
      <div className={styles.container}>
        <div className={styles.item_info}>
          <div className={styles.leftbox}>
            <div className={styles.item_layout}>
              <div className={styles.imgbox}>
                <img className={styles.img} src={data.img1} alt="" />
                <div className={styles.buyer_benefits}>
                  <div className={styles.items}>
                    <span>💍 뷰티포인트</span>
                  </div>
                  <div className={styles.items}>
                    <span>🍀 찻잎 450p 적립</span>
                  </div>
                  <div className={styles.items}>
                    <span>🚛 3만원 이상 무료배송</span>
                  </div>

                  <div className={styles.items}>
                    <span>🎁 (유료)포장가능</span>
                  </div>
                  <div className={styles.items}>
                    <span>👜 쇼핑백 동봉</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.rightbox}>
            <div>
              <Stack className={styles.breadcrumbs} spacing={2}>
                <Breadcrumbs separator="›" aria-label="breadcrumb">
                  {breadcrumbs}
                </Breadcrumbs>
              </Stack>
              <p className={styles.productName}>{data?.name}</p>
              <p className={styles.produtContent}>{data?.content}</p>
              <div>
                <div className={styles.btnAndPriceBox}>
                  <div className={styles.smallbtnset}>
                    {/* TODO: a 태그로 하는 방법 생각해보기  */}
                    <button className={styles.urlbtn}> </button>
                    <button className={styles.fbtn}> </button>
                  </div>
                  <p>{moneyForm(data?.price)}</p>
                </div>

                <div>
                  <div className={styles.productbottombox}>
                    <div className={styles.productflexbox}>
                      <label>구매 수량</label>
                      <div className={styles.productcount}>
                        <button
                          onClick={() => {
                            if (count > 1) {
                              setCount(count - 1);
                            }
                          }}
                        >
                          -
                        </button>
                        <span
                          style={{
                            fontSize: "1.5rem",
                          }}
                        >
                          {count}
                        </span>
                        <button
                          onClick={() => {
                            setCount(count + 1);
                          }}
                        >
                          +
                        </button>
                      </div>
                    </div>
                    <div className={styles.package}>
                      <FormControl sx={{ m: 0, minWidth: 120 }} fullWidth>
                        <Select
                          value={pack}
                          onChange={selectPackHandler}
                          displayEmpty
                          inputProps={{
                            "aria-label": "Without label",
                          }}
                        >
                          <MenuItem value={false}>포장 안함</MenuItem>
                          <MenuItem value={true}>포장 함(+2000원)</MenuItem>
                        </Select>
                      </FormControl>
                    </div>
                  </div>
                  <div>
                    <div className={styles.delivery}>
                      <div
                        style={{
                          width: "max-content",
                          backgroundColor: "#6c801a",
                          padding: "5px",
                        }}
                      >
                        무료배송
                      </div>
                    </div>

                    <div className={styles.price}>
                      <span className={styles.spanPrice}>상품금액합계</span>
                      <span className={styles.totalPrice}>
                        {`${moneyForm(data?.price * count + packPrice)}`}
                      </span>
                    </div>
                    <div className={styles.buyBtnSet}>
                      <button className={styles.giftBtn}>선물하기</button>
                      <button onClick={cartHandler} className={styles.cartBtn}>
                        장바구니
                      </button>
                      <button className={styles.buyBtn}>바로구매</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
